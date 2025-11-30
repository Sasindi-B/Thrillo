import { randomUUID } from "crypto"

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
  const fullName = (body.fullName || '').trim()
  const email = (body.email || '').trim()
  const password = body.password || ''
  const confirmPassword = body.confirmPassword || ''
  const city = (body.city || '').trim()
  const interests = (body.interests || '').trim()

  const errors = []
  if (!fullName) errors.push('Full name is required.')
  if (!email) errors.push('Email is required.')
  else if (!isEmailValid(email)) errors.push('Email format is invalid.')
  if (!password) errors.push('Password is required.')
  else if (password.length < 8) errors.push('Password must be at least 8 characters.')
  if (!confirmPassword) errors.push('confirmPassword is required.')
  if (password && confirmPassword && password !== confirmPassword) errors.push('Passwords do not match.')
  if (!city) errors.push('City is required.')
  if (!interests) errors.push('Interests are required.')

  if (errors.length) {
    return res.status(400).json({ message: 'Validation failed.', errors })
  }

  const traveller = {
    id: randomUUID(),
    fullName,
    email,
    city,
    interests,
    createdAt: new Date().toISOString(),
  }

  return res.status(201).json({ message: 'Traveller account created.', traveller })
}
