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

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const body = parseBody(req)
  const businessName = (body.businessName || '').trim()
  const email = (body.email || '').trim()
  const password = body.password || ''
  const confirmPassword = body.confirmPassword || ''
  const location = (body.location || '').trim()
  const category = (body.category || '').trim()

  const errors = []
  if (!businessName) errors.push('Business name is required.')
  if (!email) errors.push('Email is required.')
  else if (!isEmailValid(email)) errors.push('Email format is invalid.')
  if (!password) errors.push('Password is required.')
  else if (password.length < 8) errors.push('Password must be at least 8 characters.')
  if (!confirmPassword) errors.push('confirmPassword is required.')
  if (password && confirmPassword && password !== confirmPassword) {
    errors.push('Passwords do not match.')
  }
  if (!location) errors.push('Location is required.')
  if (!category) errors.push('Category is required.')

  if (errors.length) {
    return res.status(400).json({
      message: 'Validation failed.',
      errors,
    })
  }

  const businessOwner = {
    id: randomUUID(),
    businessName,
    email,
    location,
    category,
    createdAt: new Date().toISOString(),
  }

  return res.status(201).json({
    message: 'Business owner account created.',
    businessOwner,
  })
}
