import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import RoleGuard from './auth/RoleGuard.jsx'
import MembershipPage from './membership/MembershipPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/membership"
          element={
            <RoleGuard allowedRoles={['BUSINESS_OWNER']} redirectTo="/">
              <MembershipPage />
            </RoleGuard>
          }
        />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
