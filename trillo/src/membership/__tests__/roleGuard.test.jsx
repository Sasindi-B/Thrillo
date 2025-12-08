import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import RoleGuard from '../../auth/RoleGuard'

const Protected = () => <div>Protected content</div>

describe('RoleGuard', () => {
  it('allows access for allowed role', () => {
    render(
      <MemoryRouter initialEntries={['/membership']}>
        <Routes>
          <Route
            path="/membership"
            element={
              <RoleGuard allowedRoles={['BUSINESS_OWNER']} user={{ id: '1', role: 'BUSINESS_OWNER' }}>
                <Protected />
              </RoleGuard>
            }
          />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByText('Protected content')).toBeInTheDocument()
  })

  it('redirects travellers away from membership route', () => {
    render(
      <MemoryRouter initialEntries={['/membership']}>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route
            path="/membership"
            element={
              <RoleGuard allowedRoles={['BUSINESS_OWNER']} user={{ id: '2', role: 'TRAVELLER' }}>
                <Protected />
              </RoleGuard>
            }
          />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.queryByText('Protected content')).not.toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
