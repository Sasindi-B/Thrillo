import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getCurrentMembership } from '../services/membershipService'

const formatDate = (dateString) => {
  if (!dateString) return '—'
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return dateString
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const MembershipStatus = ({ businessOwnerId, onRefreshTrigger }) => {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadStatus = async () => {
    if (!businessOwnerId) {
      setStatus(null)
      setLoading(false)
      return
    }
    try {
      setLoading(true)
      setError('')
      const data = await getCurrentMembership(businessOwnerId)
      setStatus(data)
    } catch (err) {
      console.error(err)
      setError('Unable to fetch current membership right now.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadStatus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessOwnerId, onRefreshTrigger])

  if (loading) {
    return (
      <div className="membership-card status-card">
        <p className="small-label">Membership</p>
        <h4>Loading your membership...</h4>
      </div>
    )
  }

  if (error) {
    return (
      <div className="membership-card status-card error">
        <p className="small-label">Membership</p>
        <h4>{error}</h4>
      </div>
    )
  }

  if (!status?.packageType) {
    return (
      <div className="membership-card status-card">
        <p className="small-label">Membership</p>
        <h4>No active membership</h4>
        <p className="muted">Upgrade to Silver or Gold to unlock more features.</p>
      </div>
    )
  }

  return (
    <div className="membership-card status-card active">
      <div className="status-header">
        <p className="small-label">Active membership</p>
        <span className={`pill mini ${status.packageType === 'GOLD' ? 'gold-pill' : 'silver-pill'}`}>
          {status.packageType}
        </span>
      </div>
      <h3 className="status-title">{status.packageType === 'GOLD' ? 'Gold' : 'Silver'} Member</h3>
      <p className="muted">Expires {formatDate(status.expiryDate)}</p>
      {status.features?.length ? (
        <div className="status-features">
          {status.features.map((feature) => (
            <span key={feature} className="chip small">
              ✓ {feature}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

MembershipStatus.propTypes = {
  businessOwnerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onRefreshTrigger: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
}

export default MembershipStatus

