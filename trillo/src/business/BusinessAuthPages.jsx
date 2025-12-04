export const BusinessSignupPage = ({
  businessCategoryOptions,
  businessTypes,
  businessScaleOptions,
}) => (
  <section className="page-screen business-screen">
    <div className="form-card">
      <div className="form-header">
        <h3>Business Owner</h3>
        <p>Create a modern presence for your Sri Lankan experience.</p>
      </div>
      <div className="input-group two-column">
        <label>
          Business Name
          <input placeholder="Lagoon Glow Spa" />
        </label>
        <label>
          Owner's Name
          <input placeholder="Ishara De Silva" />
        </label>
      </div>
      <div className="input-group two-column">
        <label>
          Business Email
          <input type="email" placeholder="hello@lagoon-glow.com" />
        </label>
        <label>
          Location
          <input placeholder="Bentota, Sri Lanka" />
        </label>
      </div>
      <label>
        Category
        <select>
          {businessCategoryOptions.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <label>
        Business Type
        <div className="pill-row">
          {businessTypes.map((type) => (
            <span key={type} className="pill">
              {type}
            </span>
          ))}
        </div>
      </label>
      <label>
        Business Description
        <textarea rows={3} placeholder="Share your tropical story..." />
      </label>
      <label>
        Services Offered
        <div className="chip-row">
          {businessTypes.map((service) => (
            <span key={service} className="chip">
              {service}
            </span>
          ))}
        </div>
      </label>
      <div className="input-group two-column">
        <label>
          Business Scale
          <select>
            {businessScaleOptions.map((scale) => (
              <option key={scale}>{scale}</option>
            ))}
          </select>
        </label>
        <label>
          Contact Number
          <input placeholder="+94 77 123 4567" />
        </label>
      </div>
      <div className="input-group two-column">
        <label>
          Password
          <input type="password" placeholder="Create a password" />
        </label>
        <label>
          Confirm Password
          <input type="password" placeholder="Re-enter your password" />
        </label>
      </div>
      <label>
        Upload Images
        <div className="upload-grid">
          {[1, 2, 3, 4, 5].map((slot) => (
            <div key={slot} className="upload-box">
              <span>+</span>
              <p>Upload</p>
            </div>
          ))}
        </div>
      </label>
      <button className="cta-button primary full">Create Business Account</button>
    </div>
  </section>
)

export const BusinessLoginPage = ({
  loginEmail,
  loginPassword,
  setLoginEmail,
  setLoginPassword,
  authError,
  authLoading,
  handleLogin,
  setAuthError,
  setSignupMessage,
}) => (
  <section className="page-screen login-screen">
    <div className="form-card">
      <div className="form-header">
        <h3>Business Login</h3>
        <p>Access your dashboard to update listings and respond to travellers.</p>
      </div>
      <label>
        Business Email
        <input
          type="email"
          placeholder="owner@trillo.com"
          value={loginEmail}
          onChange={(e) => {
            setLoginEmail(e.target.value)
            setAuthError('')
            setSignupMessage('')
          }}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="Enter your password"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value)
            setAuthError('')
            setSignupMessage('')
          }}
        />
      </label>
      <div className="login-actions">
        <label className="checkbox">
          <input type="checkbox" /> Keep me signed in
        </label>
        <button className="text-link">Forgot password-</button>
      </div>
      {authError && (
        <p className="helper-text" style={{ color: '#b00020' }}>
          {authError}
        </p>
      )}
      <button className="cta-button primary full" onClick={handleLogin} disabled={authLoading}>
        {authLoading ? 'Logging in...' : 'Log In'}
      </button>
      <p className="helper-text">
        New partner- <span>Create an account</span>
      </p>
    </div>
    <div className="login-illustration">
      <h4>Manage your presence</h4>
      <p>
        Track inquiries, publish new experiences, and review analytics for all of your Sri Lankan
        offerings from one hub.
      </p>
    </div>
  </section>
)

