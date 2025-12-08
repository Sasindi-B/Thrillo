import { afterEach, describe, expect, it, vi, beforeEach } from 'vitest'
import { getPackages, getCurrentMembership, purchaseMembership, membershipApi } from '../../services/membershipService'

describe('membershipService', () => {
  const mockStorage = () => {
    let store = {}
    return {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => {
        store[key] = value
      },
      removeItem: (key) => {
        delete store[key]
      },
      clear: () => {
        store = {}
      },
    }
  }

  beforeEach(() => {
    globalThis.localStorage = mockStorage()
    globalThis.sessionStorage = mockStorage()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    globalThis.localStorage.clear()
    globalThis.sessionStorage.clear()
  })

  it('attaches auth header on package fetch', async () => {
    localStorage.setItem('token', 'fake-token')
    const spy = vi.spyOn(membershipApi, 'get').mockResolvedValue({ data: [] })
    await getPackages()
    expect(spy).toHaveBeenCalledWith('/memberships/packages', {
      headers: { Authorization: 'Bearer fake-token' },
    })
  })

  it('posts purchase with businessOwnerId and packageType', async () => {
    sessionStorage.setItem('token', 'session-token')
    const spy = vi.spyOn(membershipApi, 'post').mockResolvedValue({ data: { ok: true } })
    await purchaseMembership('owner-1', 'GOLD')
    expect(spy).toHaveBeenCalledWith(
      '/memberships/purchase',
      { businessOwnerId: 'owner-1', packageType: 'GOLD' },
      { headers: { Authorization: 'Bearer session-token' } },
    )
  })

  it('fetches current membership for owner', async () => {
    localStorage.setItem('token', 'fake-token')
    const spy = vi.spyOn(membershipApi, 'get').mockResolvedValue({ data: { packageType: 'SILVER' } })
    const data = await getCurrentMembership('owner-2')
    expect(spy).toHaveBeenCalledWith('/memberships/owner-2/current', {
      headers: { Authorization: 'Bearer fake-token' },
    })
    expect(data).toEqual({ packageType: 'SILVER' })
  })
})
