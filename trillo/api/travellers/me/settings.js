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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'PUT, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method !== 'PUT') {
    res.setHeader('Allow', 'PUT')
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const body = parseBody(req)
  // In a real app, persist settings. Here we just echo back.
  return res.status(200).json({ message: 'Preferences saved.', settings: body })
}
