import { setCors } from "../_utils"

const hotspots = [
  { id: 'ella', name: 'Ella Cloud Peaks', category: 'Nature', location: 'Ella', rating: 4.9 },
  { id: 'mirissa', name: 'Mirissa Blue Bay', category: 'Beaches', location: 'Mirissa', rating: 4.8 },
  { id: 'sigiriya', name: 'Sigiriya Skies', category: 'Heritage', location: 'Sigiriya', rating: 5.0 },
]

export default async function handler(req, res) {
  setCors(res, 'GET, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  return res.status(200).json({ hotspots })
}
