import { parseBody, setCors } from "../../_utils"

export default async function handler(req, res) {
  setCors(res, 'PUT, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'PUT') {
    res.setHeader('Allow', 'PUT')
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const body = parseBody(req)

  return res.status(200).json({
    message: 'Traveller settings saved.',
    settings: body,
    updatedAt: new Date().toISOString(),
  })
}
