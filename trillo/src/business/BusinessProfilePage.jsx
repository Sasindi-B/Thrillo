import { useEffect, useMemo, useState } from 'react'
import MembershipStatus from '../membership/MembershipStatus'
import PackageCard from '../membership/PackageCard'
import PurchaseModal from '../membership/PurchaseModal'
import { getPackages, purchaseMembership } from '../services/membershipService'
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

const BusinessProfilePage = ({
  profile,
  setProfile,
  profileMessage,
  profileError,
  isManagingProfile,
  startManagingProfile,
  handleSaveProfile,
  handleImageUpload,
  handleRemoveImage,
  toggleLocationPreview,
  showLocationPreview,
  fileInputRef,
  activeSlot,
  setActiveSlot,
  setIsManagingProfile,
  setProfileError,
  setProfileMessage,
  profileSaving,
  ownerBusinessTypes,
  setActivePage,
}) => {
  const user = useMemo(() => getUserFromToken(), [])
  const [packages, setPackages] = useState([])
  const [membershipLoading, setMembershipLoading] = useState(true)
  const [packagesError, setPackagesError] = useState('')
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [processingPurchase, setProcessingPurchase] = useState(false)
  const [toast, setToast] = useState('')
  const [modalError, setModalError] = useState('')
  const [statusRefreshKey, setStatusRefreshKey] = useState(0)

  const handleCancel = () => {
    setIsManagingProfile(false)
    setProfileError('')
    setProfileMessage('')
  }

  useEffect(() => {
    const loadPackages = async () => {
      try {
        setMembershipLoading(true)
        setPackagesError('')
        const result = await getPackages()
        setPackages(Array.isArray(result) ? result : fallbackPackages)
      } catch (error) {
        console.error(error)
        setPackagesError('Unable to load membership packages right now. Showing defaults.')
        setPackages(fallbackPackages)
      } finally {
        setMembershipLoading(false)
      }
    }

    loadPackages()
  }, [])

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg)
    setToast('')
    setModalError('')
  }

  const handlePurchaseMembership = async () => {
    if (!user?.id || !selectedPackage) {
      setModalError('Sign in as a business owner to purchase a membership.')
      return
    }

    try {
      setProcessingPurchase(true)
      setModalError('')
      setToast('')
      await purchaseMembership(user.id, selectedPackage.packageType)
      setToast(`You are now on ${selectedPackage.name}!`)
      setStatusRefreshKey((prev) => prev + 1)
    } catch (error) {
      console.error(error)
      setModalError(error?.response?.data?.message || 'Purchase failed. Please try again.')
    } finally {
      setProcessingPurchase(false)
    }
  }

  return (
    <section className="page-screen owner-profile">
      <div className="profile-header">
        <button className="icon-circle ghost" onClick={() => setActivePage('home')}>
          {'<'}
        </button>
        <div>
          <p className="badge">Business</p>
          <h2>Business Owner Profile</h2>
          <p className="panel-copy">
            Keep your Thrillo presence polished for travellers and partners.
          </p>
        </div>
        <button className="cta-button primary manage" onClick={startManagingProfile}>
          Manage Your Profile
        </button>
      </div>

      {profileMessage && !isManagingProfile && (
        <div className="toast success floating-toast">{profileMessage}</div>
      )}

      <div className="profile-grid">
        <article className="profile-card overview-card">
          <div className="profile-row">
            <div className="profile-icon">BO</div>
            <div>
              <p className="small-label">Business name</p>
              <h3>{profile.businessName}</h3>
              <div className="pill soft">{profile.businessType}</div>
            </div>
          </div>
          <p className="panel-copy">{profile.description.slice(0, 200)}</p>
          <div className="profile-meta">
            <div>
              <span className="small-label">Email</span>
              <strong>{profile.email}</strong>
            </div>
            <div>
              <span className="small-label">Business location</span>
              <strong>{profile.location?.trim() || profile.city || 'No location set'}</strong>
            </div>
            <div>
              <span className="small-label">Gallery</span>
              <strong>{profile.images.filter(Boolean).length}/6</strong>
            </div>
          </div>
        </article>
        <article className="profile-card gallery-card">
          <div className="gallery-header">
            <div>
              <p className="small-label">Live visuals</p>
              <h4>Featured gallery</h4>
            </div>
            <button className="text-link" onClick={startManagingProfile}>
              Update images
            </button>
          </div>
          <div className="profile-gallery">
            {profile.images.filter(Boolean).length ? (
              profile.images
                .filter(Boolean)
                .slice(0, 3)
                .map((img) => <img key={img} src={img} alt="Business visual" />)
            ) : (
              <div className="empty-gallery">Add your first image</div>
            )}
          </div>
          <div className="location-chip">
            <span className="icon-circle small map-pin">M</span>
            <div>
              <p className="small-label">Google Maps link</p>
              <strong className="link-text">{profile.locationLink || 'Add a map link'}</strong>
            </div>
          </div>
        </article>
      </div>

      <div className="membership-grid">
        <div className="packages-column">
          <div className="membership-card status-card">
            <p className="small-label">Membership</p>
            <h3>Grow your Thrillo reach</h3>
            <p className="panel-copy">
              Boost placement with Silver or unlock premium support and analytics with Gold.
            </p>
          </div>
          {membershipLoading ? (
            <div className="membership-card status-card">
              <h4>Loading packages...</h4>
            </div>
          ) : (
            <>
              {packagesError ? <div className="toast error">{packagesError}</div> : null}
              <div className="package-grid">
                {packages.map((pkg) => (
                  <PackageCard key={pkg.packageType} pkg={pkg} onSelect={handleSelectPackage} />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="status-column">
          <MembershipStatus businessOwnerId={user?.id} onRefreshTrigger={statusRefreshKey} />
          <div className="membership-card note-card">
            <p className="small-label">Need help?</p>
            <p className="panel-copy">
              Questions about benefits or billing? Reach us via your account manager or hello@thrillo.com.
            </p>
          </div>
        </div>
      </div>

      {isManagingProfile && (
        <article className="manage-card">
          <div className="manage-header">
            <div>
              <p className="badge">Manage Your Profile</p>
              <h3>Images and location</h3>
              <p className="panel-copy">
                Upload up to 6 landscape shots and keep your map pin fresh.
              </p>
            </div>
            <div className="toast-stack">
              {profileError ? <div className="toast error">{profileError}</div> : null}
              {profileMessage ? <div className="toast success">{profileMessage}</div> : null}
            </div>
          </div>
          <div className="manage-grid">
            <div className="upload-panel">
              <div className="image-grid">
                {profile.images.map((img, index) => (
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`Image slot ${index + 1}`}
                    className={img ? 'image-slot filled' : 'image-slot'}
                    onClick={() => {
                      setActiveSlot(index)
                      if (fileInputRef.current) fileInputRef.current.click()
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setActiveSlot(index)
                        if (fileInputRef.current) fileInputRef.current.click()
                      }
                    }}
                  >
                    {img ? (
                      <img src={img} alt={`Business ${index + 1}`} />
                    ) : (
                      <div className="image-placeholder">
                        <span className="plus">+ Add Image</span>
                        <p>Landscape works best. Auto-crops on upload.</p>
                      </div>
                    )}
                    <div className="slot-hover">
                      <span>Replace</span>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          handleRemoveImage(index)
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="helper-text muted">Max 6 images. JPG/PNG supported.</p>
            </div>
            <div className="location-panel">
              <label className="location-label">
                Business type
                <select
                  value={profile.businessType}
                  onChange={(e) => setProfile((prev) => ({ ...prev, businessType: e.target.value }))}
                >
                  {ownerBusinessTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="location-label">
                Business location
                <input
                  type="text"
                  maxLength={200}
                  placeholder="Enter business location"
                  value={profile.location || ''}
                  onChange={(e) => setProfile((prev) => ({ ...prev, location: e.target.value }))}
                />
                <span className="helper-text">
                  {Math.max(0, 200 - (profile.location?.length || 0))} characters left
                </span>
              </label>
              <label className="location-label">
                Short business description
                <textarea
                  rows={3}
                  maxLength={200}
                  value={profile.description}
                  onChange={(e) =>
                    setProfile((prev) => ({ ...prev, description: e.target.value }))
                  }
                  placeholder="Max 200 characters"
                />
                <span className="helper-text">
                  {200 - profile.description.length} characters left
                </span>
              </label>
              <label className="location-label">
                Google Maps Location Link
                <div className="input-with-icon">
                  <span className="icon-circle small map-pin">M</span>
                  <input
                    type="url"
                    placeholder="https://maps.google.com/..."
                    value={profile.locationLink}
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, locationLink: e.target.value }))
                    }
                  />
                </div>
              </label>
              <div className="location-preview-row">
                <button className="cta-button ghost" type="button" onClick={toggleLocationPreview}>
                  Preview Location
                </button>
                {showLocationPreview && profile.locationLink.startsWith('https://') && (
                  <div className="map-preview">
                    <iframe
                      title="Map preview"
                      src={profile.locationLink}
                      loading="lazy"
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
              <div className="manage-actions">
                <button type="button" className="cta-button ghost" onClick={handleCancel}>
                  Cancel
                </button>
                <button
                  className="cta-button primary"
                  type="button"
                  onClick={handleSaveProfile}
                  disabled={profileSaving}
                >
                  {profileSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </article>
      )}
      <PurchaseModal
        open={Boolean(selectedPackage)}
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onConfirm={handlePurchaseMembership}
        loading={processingPurchase}
        message={toast}
        error={modalError}
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={(event) => {
          handleImageUpload(event.target.files, activeSlot)
          setActiveSlot(null)
          event.target.value = ''
        }}
      />
    </section>
  )
}

export default BusinessProfilePage
