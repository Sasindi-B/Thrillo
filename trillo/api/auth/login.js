const parseBody = (req) => {
  if (req.body && typeof req.body === 'object') return req.body
  if (req.body && typeof req.body === 'string') {
    try {
      return JSON.parse(req.body)
    } catch {
      return {}
    }
  }
  return {}
}

const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const body = parseBody(req)
  const email = (body.email || '').trim()
  const password = body.password || ''
  const role = (body.role || 'traveller').trim().toLowerCase()

  const errors = []
  if (!email) errors.push('Email is required.')
  else if (!isEmailValid(email)) errors.push('Email format is invalid.')
  if (!password) errors.push('Password is required.')
  if (role !== 'traveller' && role !== 'business') errors.push('Role must be traveller or business.')

  if (errors.length) {
    return res.status(400).json({ message: 'Validation failed.', errors })
  }

  // Demo-only stub: accept any credentials.
  const user = { email, role }
  const token = 'demo-token'

  return res.status(200).json({ message: 'Login successful.', token, user })
}
