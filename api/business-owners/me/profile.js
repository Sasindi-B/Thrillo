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

const setCors = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'PUT, OPTIONS')
}

export default async function handler(req, res) {
  setCors(res)

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'PUT') {
    res.setHeader('Allow', 'PUT')
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const body = parseBody(req)
  const businessType = (body.businessType || '').trim()
  const description = (body.description || '').trim()
  const googleMapsUrl = (body.googleMapsUrl || '').trim()
  const location = (body.location || '').trim()
  const imageUrls = Array.isArray(body.imageUrls)
    ? body.imageUrls.filter((url) => typeof url === 'string' && url.trim())
    : []

  const errors = []
  if (location.length > 200) errors.push('Location must be 200 characters or less.')
  if (description.length > 200) errors.push('Description must be 200 characters or less.')
  if (googleMapsUrl && !googleMapsUrl.startsWith('https://')) {
    errors.push('Google Maps link must start with https://')
  }
  if (imageUrls.length > 6) errors.push('A maximum of 6 images is allowed.')

  if (errors.length) {
    return res.status(400).json({ message: 'Validation failed.', errors })
  }

  const profile = {
    businessType: businessType || 'Wellness',
    description,
    googleMapsUrl,
    location,
    imageUrls,
    updatedAt: new Date().toISOString(),
  }

  return res.status(200).json({ message: 'Profile updated successfully.', profile })
}
