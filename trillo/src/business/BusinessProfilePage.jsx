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
  const handleCancel = () => {
    setIsManagingProfile(false)
    setProfileError('')
    setProfileMessage('')
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
                  <button
                    key={index}
                    type="button"
                    className={img ? 'image-slot filled' : 'image-slot'}
                    onClick={() => {
                      setActiveSlot(index)
                      if (fileInputRef.current) fileInputRef.current.click()
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
                  </button>
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

