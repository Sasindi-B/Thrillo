const decodeTokenPayload = (token) => {
  if (!token || typeof token !== 'string') return null
  const parts = token.split('.')
  if (parts.length < 2) return null
  try {
    const payload = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'))
    return JSON.parse(payload)
  } catch (error) {
    console.error('Unable to decode token', error)
    return null
  }
}

export const getStoredToken = () => {
  if (typeof window === 'undefined') return ''
  return localStorage.getItem('token') || sessionStorage.getItem('token') || ''
}

export const getUserFromToken = () => {
  const token = getStoredToken()
  const payload = decodeTokenPayload(token)
  if (!payload) return null

  const id = payload.sub || payload.userId || payload.id
  const role = payload.role || payload.userRole || payload.scope

  if (!id || !role) return null
  return { id, role, token }
}

export const isBusinessOwner = () => {
  const user = getUserFromToken()
  return user?.role === 'BUSINESS_OWNER'
}

