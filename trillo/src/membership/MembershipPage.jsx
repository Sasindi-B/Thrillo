import { useEffect, useMemo, useState } from 'react'
import { getPackages, purchaseMembership } from '../services/membershipService'
import MembershipStatus from './MembershipStatus'
import PackageCard from './PackageCard'
import PurchaseModal from './PurchaseModal'
import { getUserFromToken } from '../utils/auth'

const fallbackPackages = [
  {
    packageType: 'SILVER',
    name: 'Silver Membership',
    price: 'LKR 9,900 / year',
    features: ['Priority listing boosts', 'Owner helpdesk', 'Email support', 'Standard analytics'],
  },
  {
    packageType: 'GOLD',
    name: 'Gold Membership',
    price: 'LKR 19,900 / year',
    features: [
      'Top placement & badges',
      'Concierge onboarding',
      'Priority support',
      'Advanced analytics',
      'Featured in campaigns',
    ],
  },
]

const MembershipPage = () => {
  const user = useMemo(() => getUserFromToken(), [])
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [toast, setToast] = useState('')
  const [modalError, setModalError] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError('')
        const result = await getPackages()
        setPackages(Array.isArray(result) ? result : fallbackPackages)
      } catch (err) {
        console.error(err)
        setError('Unable to load membership packages right now. Showing defaults.')
        setPackages(fallbackPackages)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const handleSelect = (pkg) => {
    setSelectedPackage(pkg)
    setToast('')
    setModalError('')
  }

  const handlePurchase = async () => {
    if (!user?.id || !selectedPackage) return
    try {
      setProcessing(true)
      setModalError('')
      setToast('')
      await purchaseMembership(user.id, selectedPackage.packageType)
      setToast(`You are now on ${selectedPackage.name}!`)
      setRefreshKey((prev) => prev + 1)
    } catch (err) {
      console.error(err)
      setModalError(err?.response?.data?.message || 'Purchase failed. Please try again.')
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="membership-page">
      <div className="membership-hero">
        <div>
          <p className="badge">Business Owner</p>
          <h2>Memberships for growth</h2>
          <p className="panel-copy">
            Unlock boosted visibility, priority support, and advanced analytics tailored to Thrillo
            business owners.
          </p>
        </div>
        <div className="hero-actions">
          <a className="cta-button ghost" href="/">
            Back to home
          </a>
          <a className="cta-button primary" href="/membership">
            Membership hub
          </a>
        </div>
      </div>

      <div className="membership-grid">
        <div className="packages-column">
          {loading ? (
            <div className="membership-card status-card">
              <h4>Loading packages...</h4>
            </div>
          ) : (
            <>
              {error ? <div className="toast error">{error}</div> : null}
              <div className="package-grid">
                {packages.map((pkg) => (
                  <PackageCard key={pkg.packageType} pkg={pkg} onSelect={handleSelect} />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="status-column">
          <MembershipStatus businessOwnerId={user?.id} onRefreshTrigger={refreshKey} />
          <div className="membership-card note-card">
            <p className="small-label">Need help?</p>
            <p className="panel-copy">
              Our team can guide you on which plan fits your goals. Reach out via your account
              manager or hello@thrillo.com.
            </p>
          </div>
        </div>
      </div>

      <PurchaseModal
        open={Boolean(selectedPackage)}
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onConfirm={handlePurchase}
        loading={processing}
        message={toast}
        error={modalError}
      />
    </div>
  )
}

export default MembershipPage

