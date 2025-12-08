import axios from 'axios'
import { getStoredToken } from '../utils/auth'

const API_BASE = import.meta.env?.VITE_API_BASE || '/api'

export const membershipApi = axios.create({
  baseURL: API_BASE,
})

membershipApi.interceptors.request.use((config) => {
  const token = getStoredToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const authHeaders = () => {
  const token = getStoredToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export const getPackages = async () => {
  const response = await membershipApi.get('/memberships/packages', {
    headers: authHeaders(),
  })
  return response.data
}

export const purchaseMembership = async (businessOwnerId, packageType) => {
  const response = await membershipApi.post(
    '/memberships/purchase',
    {
      businessOwnerId,
      packageType,
    },
    {
      headers: authHeaders(),
    },
  )
  return response.data
}

export const getCurrentMembership = async (businessOwnerId) => {
  const response = await membershipApi.get(`/memberships/${businessOwnerId}/current`, {
    headers: authHeaders(),
  })
  return response.data
}

