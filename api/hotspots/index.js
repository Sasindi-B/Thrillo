import { setCors } from "../_utils"

const hotspots = [
  { id: 'ella', name: 'Ella Cloud Peaks', category: 'Nature', location: 'Ella', rating: 4.9 },
  { id: 'mirissa', name: 'Mirissa Blue Bay', category: 'Beaches', location: 'Mirissa', rating: 4.8 },
  { id: 'sigiriya', name: 'Sigiriya Skies', category: 'Heritage', location: 'Sigiriya', rating: 5.0 },
  { id: 'colombo-hotel', name: 'Colombo Grand Hotel', category: 'Hotels', location: 'Colombo', rating: 4.7 },
  { id: 'kandy-resort', name: 'Kandy Mountain Resort', category: 'Hotels', location: 'Kandy', rating: 4.6 },
  { id: 'galle-beach', name: 'Galle Beach House', category: 'Beaches', location: 'Galle', rating: 4.8 },
]

export default async function handler(req, res) {
  setCors(res, 'GET, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  // Parse query parameters
  const search = (req.query?.search || '').trim().toLowerCase()
  const category = (req.query?.category || '').trim()
  const page = parseInt(req.query?.page || '0', 10)
  const size = parseInt(req.query?.size || '10', 10)

  // Filter hotspots
  let filtered = hotspots

  // Filter by search term (name or location)
  if (search) {
    filtered = filtered.filter(
      (spot) =>
        spot.name.toLowerCase().includes(search) ||
        spot.location.toLowerCase().includes(search) ||
        spot.category.toLowerCase().includes(search)
    )
  }

  // Filter by category
  if (category && category !== 'All') {
    filtered = filtered.filter((spot) => spot.category === category)
  }

  // Pagination
  const total = filtered.length
  const startIndex = page * size
  const endIndex = startIndex + size
  const paginated = filtered.slice(startIndex, endIndex)

  return res.status(200).json({
    hotspots: paginated,
    total,
    page,
    size,
    totalPages: Math.ceil(total / size),
  })
}
