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

const validateProfile = (payload) => {
  const errors = []
  const name = (payload.businessName || '').trim()
  const desc = (payload.description || '').trim()
  const images = Array.isArray(payload.imageUrls) ? payload.imageUrls : []
  const location = (payload.location || '').trim()

  if (!name) errors.push('Business name is required.')
  if (desc.length > 200) errors.push('Description must be 200 characters or less.')
  if (location.length > 200) errors.push('Location must be 200 characters or less.')
  if (images.length > 6) errors.push('At most 6 images are allowed.')

  return errors
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
  const errors = validateProfile(body)

  if (errors.length) {
    return res.status(400).json({ message: 'Validation failed.', errors })
  }

  // Simulate persisting and return the updated profile object exactly the shape frontend expects
  const profile = {
    businessName: body.businessName || '',
    businessType: body.businessType || '',
    description: body.description || '',
    location: body.location || '',
    googleMapsUrl: body.googleMapsUrl || '',
    imageUrls: Array.isArray(body.imageUrls) ? body.imageUrls.slice(0, 6) : [],
    updatedAt: new Date().toISOString(),
  }

  return res.status(200).json({ message: 'Profile updated.', profile })
}
