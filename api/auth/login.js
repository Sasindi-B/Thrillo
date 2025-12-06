import { randomUUID } from "crypto"
import { parseBody, setCors } from "../_utils"

export default async function handler(req, res) {
  setCors(res, 'POST, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const body = parseBody(req)
  const email = (body.email || '').trim()
  const password = body.password || ''
  const role = body.role === 'business' ? 'business' : 'traveller'

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' })
  }

  // Demo login success. In production, validate credentials and issue a real token.
  const user = {
    id: randomUUID(),
    email,
    role,
    name: role === 'business' ? 'Business Owner' : 'Traveller',
  }

  return res.status(200).json({
    message: 'Logged in',
    token: `demo-token-${role}`,
    user,
  })
}
