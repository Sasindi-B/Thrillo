import { setCors } from "../_utils"

// Sample hotspots data - in production, this would come from a database
const hotspots = [
  { id: 'ella', name: 'Ella Cloud Peaks', category: 'Nature', location: 'Ella', rating: 4.9, description: 'Stunning mountain views and hiking trails' },
  { id: 'mirissa', name: 'Mirissa Blue Bay', category: 'Beaches', location: 'Mirissa', rating: 4.8, description: 'Beautiful beach with crystal clear waters' },
  { id: 'sigiriya', name: 'Sigiriya Skies', category: 'Heritage', location: 'Sigiriya', rating: 5.0, description: 'Ancient rock fortress with breathtaking views' },
  { id: 'colombo-hotel', name: 'Colombo Grand Hotel', category: 'Hotels', location: 'Colombo', rating: 4.7, description: 'Luxury hotel in the heart of Colombo' },
  { id: 'kandy-resort', name: 'Kandy Mountain Resort', category: 'Hotels', location: 'Kandy', rating: 4.6, description: 'Scenic resort overlooking Kandy' },
  { id: 'galle-beach', name: 'Galle Beach House', category: 'Beaches', location: 'Galle', rating: 4.8, description: 'Charming beach house near Galle Fort' },
]

export default async function handler(req, res) {
  setCors(res, 'GET, OPTIONS')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  // Extract businessId from the URL path
  // In Vercel/serverless functions, this comes from req.query
  const businessId = req.query?.businessId

  if (!businessId) {
    return res.status(400).json({ message: 'Business ID is required.' })
  }

  // Find the hotspot by ID
  const hotspot = hotspots.find((spot) => spot.id === businessId)

  if (!hotspot) {
    return res.status(404).json({ message: 'Hotspot not found.' })
  }

  return res.status(200).json(hotspot)
}

