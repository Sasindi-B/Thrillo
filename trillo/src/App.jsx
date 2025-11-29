import { useState } from 'react'
import './App.css'

// Place your logo file in `public/` and name it `thrillo-logo.jpg` (or update this path)
const logoSrc = '/thrillo-logo.jpg'

const ThrilloLogo = ({ size = 64, className = '' }) => {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`logo-fallback ${className}`}
        style={{
          width: size,
          height: size,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#002b4a',
          color: 'white',
          borderRadius: 8,
          fontWeight: 700,
        }}
      >
        T
      </div>
    )
  }

  return (
    <img
      src={logoSrc}
      alt="Thrillo logo"
      className={`logo-img ${className}`}
      style={{ width: size, height: size }}
      onError={() => setError(true)}
    />
  )
}

const categoryList = [
  'Wellness',
  'DJs & Nightlife',
  'Adventures',
  'Cafés',
  'Daycare',
  'Crafts & Arts',
  'Special Events',
  'Gift Items',
  'Souvenirs',
]

const businessTypes = [
  'Café',
  'Wellness',
  'Adventure',
  'Crafts & Arts',
  'Gift Items',
  'Souvenirs',
  'Daycare',
  'DJ Events',
  'Special Events',
  'Others',
]

const businessCategoryOptions = [
  'Cafe',
  'Wellness',
  'Spa',
  'Salloon',
  'Cake & Pastry',
  'Bakery',
  'Sports',
  'Gym',
  'Hikes',
  'Cookery',
  'Recreational Activities',
]

const businessScaleOptions = ['Small', 'Medium', 'Large']

const servicesOffered = [
  'Guided Tours',
  'Local Cuisine',
  'Surf Lessons',
  'Cultural Shows',
  'Private Transport',
  'Wellness Retreats',
]

const travellerInterests = [
  'Adventure',
  'Nature',
  'Food',
  'Culture',
  'Nightlife',
  'Relaxation',
  'Water Sports',
  'Wellness',
]

const trendingPlaces = [
  {
    title: 'Ella Cloud Peaks',
    location: 'Ella',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Mirissa Blue Bay',
    location: 'Mirissa',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Sigiriya Skies',
    location: 'Sigiriya',
    rating: 5.0,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
]

const topBusinesses = [
  {
    title: 'Serendipity Surf Club',
    type: 'Adventure',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Colombo Spice Café',
    type: 'Café',
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Lotus Wellness Spa',
    type: 'Wellness',
    rating: 4.95,
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
  },
]

const nearbyExperiences = [
  { title: 'Kandy Tea Walk', distance: '1.2 km', icon: '🧭' },
  { title: 'Sunset Catamaran', distance: '2.5 km', icon: '⛵' },
  { title: 'Colombo Night Beats', distance: '3.4 km', icon: '🎵' },
]

const categoryBusinesses = [
  {
    name: 'Lagoon Glow Spa',
    location: 'Bentota',
    rating: 4.8,
    category: 'Wellness',
    images: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1506439773649-6e0e29c6f30d?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=300&q=80',
    ],
  },
  {
    name: 'Jungle Pulse Adventures',
    location: 'Kitulgala',
    rating: 5,
    category: 'Adventures',
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80',
    ],
  },
  {
    name: 'Ocean Pulse DJs',
    location: 'Colombo',
    rating: 4.7,
    category: 'DJs & Nightlife',
    images: [
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=300&q=80',
    ],
  },
  {
    name: 'Crafted by Lagoon',
    location: 'Galle',
    rating: 4.9,
    category: 'Crafts & Arts',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&q=80',
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=300&q=80',
    ],
  },
]

const businessDetails = {
  name: 'Lagoon Glow Spa & Retreat',
  location: 'Bentota, Sri Lanka',
  description:
    'Holistic Sri Lankan wellness experiences blending Ayurveda, ocean-inspired therapies, and mindful movement sessions overlooking the turquoise lagoon.',
  services: [
    'Ayurveda Rituals',
    'Oceanfront Massages',
    'Mindful Yoga',
    'Organic Café',
  ],
  hours: 'Daily | 7:00 AM - 10:00 PM',
  email: 'hello@lagoon-glow.com',
  phone: '+94 77 123 4567',
  images: [
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506439773649-6e0e29c6f30d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=800&q=80',
  ],
}

const reviews = [
  {
    name: 'Maya',
    text: 'Incredible healing escape! The lagoon breeze and the guided rituals felt deeply personal.',
    rating: 5,
  },
  {
    name: 'Ishan',
    text: 'Loved the mindful surf warmups and the friendly hosts. Highly recommend for wellness seekers.',
    rating: 4.8,
  },
]

const travellerHotspots = [
  {
    title: 'Ella Cloud Peaks',
    location: 'Ella',
    category: 'Nature & Hikes',
    rating: 4.9,
    businesses: ['Ella Eco Lodge', 'Cloudline Hikes', 'Tea Valley Guides'],
  },
  {
    title: 'Mirissa Blue Bay',
    location: 'Mirissa',
    category: 'Beaches & Water',
    rating: 4.8,
    businesses: ['Serendipity Surf Club', 'Blue Bay Cafes', 'Sunset Catamaran'],
  },
  {
    title: 'Sigiriya Skies',
    location: 'Sigiriya',
    category: 'Heritage & Adventure',
    rating: 5.0,
    businesses: ['Sigiriya Rise Tours', 'Jungle Pulse Adventures', 'Rock View Stays'],
  },
  {
    title: 'Colombo Night Beats',
    location: 'Colombo',
    category: 'Nightlife & Food',
    rating: 4.7,
    businesses: ['Colombo Spice CafAc', 'Ocean Pulse DJs', 'Lotus Wellness Spa'],
  },
  {
    title: 'Galle Fort Paths',
    location: 'Galle',
    category: 'Culture & Crafts',
    rating: 4.6,
    businesses: ['Crafted by Lagoon', 'Galle Heritage Walks', 'Fort Markets'],
  },
]

const travelVibes = [
  'Adventure ready',
  'Slow travel',
  'Family friendly',
  'Luxury stays',
  'Budget + hostels',
]

const languageOptions = ['English']

const currencyOptions = ['LKR - Sri Lankan Rupee', 'USD - United States Dollar', 'EUR - Euro']

const timezoneOptions = ['GMT+5:30 | Colombo', 'GMT+0:00 | London', 'GMT+10:00 | Sydney']

function App() {
  const API_BASE = import.meta.env.VITE_API_BASE || '/api'
  const [activePage, setActivePage] = useState('home')
  const [hoveredTrending, setHoveredTrending] = useState(null)
  const [role, setRole] = useState('traveller')
  const [authMode, setAuthMode] = useState('login')
  const [isTravellerLoggedIn, setIsTravellerLoggedIn] = useState(false)
  const [travelLocation, setTravelLocation] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [authLoading, setAuthLoading] = useState(false)
  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupLocation, setSignupLocation] = useState('')
  const [signupInterests, setSignupInterests] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupConfirm, setSignupConfirm] = useState('')
  const [signupMessage, setSignupMessage] = useState('')
  const [settingsSaving, setSettingsSaving] = useState(false)
  const [settings, setSettings] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushAlerts: true,
    dataSharing: true,
    autoSaveTrips: true,
    profileVisibility: 'travellers',
    language: languageOptions[0],
    currency: currencyOptions[0],
    timezone: timezoneOptions[0],
    travelVibe: travelVibes[0],
    digest: 'weekly',
  })
  const [settingsMessage, setSettingsMessage] = useState('')

  const bottomNavItems = [
    { label: 'Settings', icon: '⚙️', page: 'settings' },
    { label: 'Home', icon: '🏠', page: 'home' },
    { label: 'Profile', icon: '👤', page: 'profile' },
  ]

  const filteredHotspots = travellerHotspots.filter((spot) => {
    if (!travelLocation.trim()) return true
    return spot.location.toLowerCase().includes(travelLocation.trim().toLowerCase())
  })

  const handleLogin = async () => {
    if (authMode !== 'login') return

    if (!loginEmail.trim() || !loginPassword) {
      setAuthError('Email and password are required.')
      return
    }

    setAuthError('')
    setSignupMessage('')
    setAuthLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginEmail.trim(),
          password: loginPassword,
          role,
        }),
      })

      const body = await response.json().catch(() => null)

      if (!response.ok) {
        const message = body?.message || 'Login failed. Please try again.'
        throw new Error(message)
      }

      if (role === 'traveller') {
        setIsTravellerLoggedIn(true)
        setActivePage('traveller-hotspots')
      } else {
        setIsTravellerLoggedIn(false)
        setActivePage('business-login')
      }
    } catch (error) {
      setAuthError(error.message || 'Login failed. Please try again.')
    } finally {
      setAuthLoading(false)
    }
  }

  const handleSignup = async (targetRole = role) => {
    const normalizedRole = targetRole === 'business' ? 'business' : 'traveller'

    if (!signupName.trim() || !signupEmail.trim() || !signupPassword || !signupConfirm) {
      setAuthError('Name, email, and password are required.')
      return
    }

    if (signupPassword !== signupConfirm) {
      setAuthError('Passwords do not match.')
      return
    }

    setAuthError('')
    setSignupMessage('')
    setAuthLoading(true)

    const isTraveller = normalizedRole === 'traveller'
    const endpoint = isTraveller ? '/api/travellers/signup' : '/api/business-owners/signup'
    const payload = isTraveller
      ? {
          fullName: signupName.trim(),
          email: signupEmail.trim(),
          password: signupPassword,
          confirmPassword: signupConfirm,
          city: signupLocation.trim(),
          interests: signupInterests.trim(),
        }
      : {
          businessName: signupName.trim(),
          email: signupEmail.trim(),
          password: signupPassword,
          confirmPassword: signupConfirm,
          location: signupLocation.trim(),
          category: signupInterests.trim(),
        }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const body = await response.json().catch(() => null)

      if (!response.ok) {
        const message = body?.message || 'Sign up failed. Please try again.'
        throw new Error(message)
      }

      setSignupMessage(
        isTraveller ? 'Sign up successful! Please log in.' : 'Business account created! Please log in.'
      )
      setSignupName('')
      setSignupEmail('')
      setSignupLocation('')
      setSignupInterests('')
      setSignupPassword('')
      setSignupConfirm('')
      setRole(normalizedRole)
      setAuthMode('login')
      setActivePage(isTraveller ? 'traveller-login' : 'business-login')
      setIsTravellerLoggedIn(false)
    } catch (error) {
      setAuthError(error.message || 'Sign up failed. Please try again.')
    } finally {
      setAuthLoading(false)
    }
  }
  const openHotspotPage = () => {
    if (isTravellerLoggedIn) {
      setActivePage('traveller-hotspots')
    }
  }

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSaveSettings = async () => {
    setSettingsSaving(true)
    setSettingsMessage('')
    const isBusiness = role === 'business'
    const endpoint = isBusiness
      ? `${API_BASE}/business-owners/me/settings`
      : `${API_BASE}/travellers/me/settings`

    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      })

      const body = await response.json().catch(() => null)

      if (!response.ok) {
        const message = body?.message || 'Failed to save settings.'
        throw new Error(message)
      }

      setSettingsMessage('Preferences saved to your account.')
    } catch (error) {
      setSettingsMessage(error.message || 'Failed to save settings.')
    } finally {
      setSettingsSaving(false)
    }
  }

  const renderPage = (pageId) => {
    switch (pageId) {
      case 'business-signup':
        return (
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
                  {servicesOffered.map((service) => (
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
                      <span>＋</span>
                      <p>Upload</p>
                    </div>
                  ))}
                </div>
              </label>
              <button className="cta-button primary full">Create Business Account</button>
            </div>
          </section>
        )
      case 'business-login':
        return (
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
                <button className="text-link">Forgot password?</button>
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
                New partner? <span>Create an account</span>
              </p>
            </div>
            <div className="login-illustration">
              <h4>Manage your presence</h4>
              <p>
                Track inquiries, publish new experiences, and review analytics for all of your
                Sri Lankan offerings from one hub.
              </p>
            </div>
          </section>
        )
      case 'traveller-signup':
        return (
          <section className="page-screen traveller-screen">
            <div className="travel-illustration">🏝️</div>
            <div className="form-card light">
              <div className="form-header">
                <h3>Traveller Sign Up</h3>
                <p>Tailor your Sri Lankan itinerary with curated picks.</p>
              </div>
              <label>
                Full Name
                <input
                  placeholder="Aanya Perera"
                  value={signupName}
                  onChange={(e) => {
                    setSignupName(e.target.value)
                    setAuthError('')
                    setSignupMessage('')
                  }}
                />
              </label>
              <label>
                Email
                <input
                  placeholder="aanya@trillo.com"
                  value={signupEmail}
                  onChange={(e) => {
                    setSignupEmail(e.target.value)
                    setAuthError('')
                    setSignupMessage('')
                  }}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  placeholder="Create a password"
                  value={signupPassword}
                  onChange={(e) => {
                    setSignupPassword(e.target.value)
                    setAuthError('')
                    setSignupMessage('')
                  }}
                />
              </label>
              <label>
                Interests
                <div className="chip-row">
                  {travellerInterests.map((interest) => (
                    <span key={interest} className="chip">
                      {interest}
                    </span>
                  ))}
                </div>
              </label>
              {authError && (
                <p className="helper-text" style={{ color: '#b00020' }}>
                  {authError}
                </p>
              )}
              {signupMessage && (
                <p className="helper-text" style={{ color: '#0b7d33' }}>
                  {signupMessage}
                </p>
              )}
              <button
                className="cta-button blue full"
                onClick={() => handleSignup('traveller')}
                disabled={authLoading}
              >
                {authLoading ? 'Creating...' : 'Sign Up'}
              </button>
            </div>
          </section>
        )
      case 'traveller-login':
        return (
          <section className="page-screen login-screen">
            <div className="form-card light">
              <div className="form-header">
                <h3>Traveller Login</h3>
                <p>Pick up your travel moodboards and messages instantly.</p>
              </div>
              <label>
                Email
                <input
                  type="email"
                  placeholder="you@trillo.com"
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
                  <input type="checkbox" /> Remember me
                </label>
                <button className="text-link">Forgot password?</button>
              </div>
              {authError && (
                <p className="helper-text" style={{ color: '#b00020' }}>
                  {authError}
                </p>
              )}
              <button className="cta-button blue full" onClick={handleLogin} disabled={authLoading}>
                {authLoading ? 'Logging in...' : 'Log In'}
              </button>
              <p className="helper-text">
                First time here? <span>Create a traveller profile</span>
              </p>
            </div>
            <div className="login-illustration">
              <h4>Plan with confidence</h4>
              <p>
                Save itineraries, chat with hosts, and curate the perfect Sri Lankan escape with
                Trillo’s guided recommendations.
              </p>
            </div>
          </section>
        )
      case 'home':
        return (
          <section className="page-screen home-screen">
            <div className="top-bar">
              <div className="icon-circle">🔔</div>
              <ThrilloLogo size={72} className="logo-mark" />
              <div className="icon-circle">⚙️</div>
            </div>
            <div className="card-section">
              <h4>Our Services</h4>
              <div className="category-rail">
                {servicesOffered.map((service, index) => (
                  <span key={service} className={index === 0 ? 'pill active' : 'pill'}>
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="hero-banner"
              style={{
                backgroundImage:
                  'linear-gradient(140deg, rgba(0, 23, 51, 0.32), rgba(0, 119, 200, 0.28)), url(https://media.cntravellerme.com/photos/66e42e99f6574c75a326fdd9/16:9/w_2560%2Cc_limit/505221662)',
              }}
            >
              <div>
                <p className="badge">Season 2025</p>
                <h3>Explore Sri Lanka</h3>
                <p>Coastlines, hill country, and vibrant city nights.</p>
              </div>
              <button className="cta-button ghost">Plan Trip</button>
            </div>
            <div className="auth-hub">
              <div className="auth-header">
                <div>
                  <p className="badge">Unified Access</p>
                  <h4>Choose your role</h4>
                  <p className="panel-copy">
                    Switch between traveller and business to sign in or create an account.
                  </p>
                </div>
                <div className="role-switch">
                  {['traveller', 'business'].map((option) => (
                  <button
                    key={option}
                    className={role === option ? 'role-chip active' : 'role-chip'}
                    onClick={() => {
                      setRole(option)
                      setAuthError('')
                      setSignupMessage('')
                    }}
                  >
                      <span className="role-dot" />
                      {option === 'traveller' ? 'Traveller' : 'Business Owner'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="auth-toggle">
                {['login', 'signup'].map((mode) => (
                  <button
                    key={mode}
                    className={authMode === mode ? 'toggle-button active' : 'toggle-button'}
                    onClick={() => {
                      setAuthMode(mode)
                      setAuthError('')
                      setSignupMessage('')
                    }}
                  >
                    {mode === 'login' ? 'Log In' : 'Sign Up'}
                  </button>
                ))}
              </div>
              <div className="auth-grid single">
                {authMode === 'login' ? (
                  <div className="auth-card">
                    <p className="small-label">
                      {role === 'traveller' ? 'Traveller Login' : 'Business Login'}
                    </p>
                    <h4>Welcome back</h4>
                    <p className="panel-copy">
                      {role === 'traveller'
                        ? 'Plan, save, and message hosts for your escapes.'
                        : 'Showcase your experiences and respond to travellers.'}
                    </p>
                    <label>
                      Email
                      <input
                        type="email"
                        placeholder={role === 'traveller' ? 'you@trillo.com' : 'owner@trillo.com'}
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
                        <input type="checkbox" /> Remember me
                      </label>
                      <button className="text-link">Forgot password?</button>
                    </div>
                    {authError && (
                      <p className="helper-text" style={{ color: '#b00020' }}>
                        {authError}
                      </p>
                    )}
                    <button
                      className="cta-button primary full"
                      onClick={handleLogin}
                      disabled={authLoading}
                    >
                      {authLoading ? 'Logging in...' : 'Log In'}
                    </button>
                  </div>
                ) : (
                  <div className="auth-card light">
                    <p className="small-label">
                      {role === 'traveller' ? 'Traveller Sign Up' : 'Business Sign Up'}
                    </p>
                    <h4>Create a new account</h4>
                    <p className="panel-copy">Set up your profile and sync it across web and mobile.</p>
                    <label>
                      {role === 'traveller' ? 'Full Name' : 'Business Name'}
                      <input
                        placeholder={role === 'traveller' ? 'Aanya Perera' : 'Lagoon Glow Spa'}
                        value={signupName}
                        onChange={(e) => {
                          setSignupName(e.target.value)
                          setAuthError('')
                          setSignupMessage('')
                        }}
                      />
                    </label>
                    <label>
                      Email
                      <input
                        placeholder={role === 'traveller' ? 'you@trillo.com' : 'hello@lagoon-glow.com'}
                        value={signupEmail}
                        onChange={(e) => {
                          setSignupEmail(e.target.value)
                          setAuthError('')
                          setSignupMessage('')
                        }}
                      />
                    </label>
                    <label>
                      {role === 'traveller' ? 'Your City' : 'Business Location'}
                      <input
                        placeholder={role === 'traveller' ? 'Colombo, Sri Lanka' : 'Bentota, Sri Lanka'}
                        value={signupLocation}
                        onChange={(e) => {
                          setSignupLocation(e.target.value)
                          setAuthError('')
                          setSignupMessage('')
                        }}
                      />
                    </label>
                    <label>
                      {role === 'traveller' ? 'Interests' : 'Business Category'}
                      <input
                        placeholder={role === 'traveller' ? 'Surf, Wildlife, Food' : 'Spa, Cafe, Adventure'}
                        value={signupInterests}
                        onChange={(e) => {
                          setSignupInterests(e.target.value)
                          setAuthError('')
                          setSignupMessage('')
                        }}
                      />
                    </label>
                    <div className="input-group two-column">
                      <label>
                        Password
                        <input
                          type="password"
                          placeholder="Create a password"
                          value={signupPassword}
                          onChange={(e) => {
                            setSignupPassword(e.target.value)
                            setAuthError('')
                            setSignupMessage('')
                          }}
                        />
                      </label>
                      <label>
                        Confirm
                        <input
                          type="password"
                          placeholder="Re-enter password"
                          value={signupConfirm}
                          onChange={(e) => {
                            setSignupConfirm(e.target.value)
                            setAuthError('')
                            setSignupMessage('')
                          }}
                        />
                      </label>
                    </div>
                    {authError && (
                      <p className="helper-text" style={{ color: '#b00020' }}>
                        {authError}
                      </p>
                    )}
                    {signupMessage && (
                      <p className="helper-text" style={{ color: '#0b7d33' }}>
                        {signupMessage}
                      </p>
                    )}
                    <div className="stacked-actions">
                      <button
                        className="cta-button blue full"
                        onClick={() => handleSignup()}
                        disabled={authLoading}
                      >
                        {authLoading
                          ? 'Creating...'
                          : role === 'traveller'
                            ? 'Create Account'
                            : 'Create Business Account'}
                      </button>
                      <p className="helper-text">
                        Already registered? <span>Log in instead</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="card-section location-panel">
              <div className="location-header">
                <div>
                  <p className="badge">Traveller</p>
                  <h4>Hotspot explorer</h4>
                  <p className="panel-copy">
                    Open a dedicated page to add your travel location and see nearby businesses.
                  </p>
                </div>
                <span className={isTravellerLoggedIn ? 'status-pill live' : 'status-pill'}>
                  {isTravellerLoggedIn ? 'Traveller logged in' : 'Login required'}
                </span>
              </div>
              <button
                className="cta-button primary"
                onClick={openHotspotPage}
                disabled={!isTravellerLoggedIn}
              >
                {isTravellerLoggedIn ? 'Open hotspot explorer' : 'Login as traveller to continue'}
              </button>
            </div>
            <div className="card-section">
              <h4>Trending Places</h4>
              <div className="horizontal-cards">
                {trendingPlaces.map((place) => {
                  const isElla = place.title === 'Ella Cloud Peaks'
                  return (
                    <article
                      key={place.title}
                      className="image-card"
                      onMouseEnter={() => isElla && setHoveredTrending(place.title)}
                      onMouseLeave={() => isElla && setHoveredTrending(null)}
                      style={{ position: 'relative' }}
                    >
                      <img src={place.img} alt={place.title} />
                      <div className="card-content">
                        <strong>{place.title}</strong>
                        <p>{place.location}</p>
                        <span>⭐ {place.rating}</span>
                      </div>

                      {isElla && hoveredTrending === place.title && (
                        <div
                          role="dialog"
                          aria-label="Ella Cloud Peaks details"
                          style={{
                            position: 'absolute',
                            left: 12,
                            right: 12,
                            bottom: '110%',
                            transform: 'translateY(-6px)',
                            background: '#fff',
                            padding: '12px',
                            borderRadius: 12,
                            boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                            zIndex: 40,
                            width: 260,
                          }}
                        >
                          <strong style={{ display: 'block', marginBottom: 6 }}>{place.title}</strong>
                          <p style={{ margin: 0, color: 'rgba(11,28,44,0.7)', fontSize: 13 }}>
                            A dramatic mountain ridge offering panoramic sunrise views, scenic tea
                            trails and short trekking routes near Ella town — ideal for cloud walks
                            and photo moments.
                          </p>
                        </div>
                      )}
                    </article>
                  )
                })}
              </div>
            </div>
            <div className="card-section">
              <h4>Top Rated Businesses</h4>
              <div className="horizontal-cards compact">
                {topBusinesses.map((biz) => (
                  <article key={biz.title} className="mini-card">
                    <img src={biz.img} alt={biz.title} />
                    <div>
                      <strong>{biz.title}</strong>
                      <p>{biz.type}</p>
                    </div>
                    <span>⭐ {biz.rating}</span>
                  </article>
                ))}
              </div>
            </div>
            <div className="card-section">
              <h4>Nearby Experiences</h4>
              <ul className="experience-list">
                {nearbyExperiences.map((exp) => (
                  <li key={exp.title}>
                    <span className="icon-circle small">{exp.icon}</span>
                    <div>
                      <strong>{exp.title}</strong>
                      <p>{exp.distance} away</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <nav className="bottom-nav">
              {bottomNavItems.map((nav) => (
                <button
                  key={nav.label}
                  className={activePage === nav.page ? 'nav-item active' : 'nav-item'}
                  onClick={() => setActivePage(nav.page)}
                >
                  <span className="nav-icon">{nav.icon}</span>
                  {nav.label}
                </button>
              ))}
            </nav>
          </section>
        )
      case 'traveller-hotspots':
        return (
          <section className="page-screen home-screen">
            <div className="location-header">
              <div>
                <p className="badge">Traveller</p>
                <h3>Hotspots near your next stop</h3>
                <p className="panel-copy">
                  Add a city or area to see curated hotspots and nearby businesses.
                </p>
              </div>
              <button className="cta-button ghost" onClick={() => setActivePage('home')}>
                Back to home
              </button>
            </div>
            <div className="location-form">
              <label>
                Travel location
                <input
                  placeholder="e.g., Ella, Mirissa, Galle"
                  value={travelLocation}
                  onChange={(e) => setTravelLocation(e.target.value)}
                  disabled={!isTravellerLoggedIn}
                />
              </label>
              <div className="location-helper">
                {isTravellerLoggedIn
                  ? 'We match nearby businesses registered on Trillo.'
                  : 'Log in as a traveller on the home page to start exploring hotspots.'}
              </div>
            </div>
            <div className="hotspot-grid">
              {isTravellerLoggedIn ? (
                filteredHotspots.map((spot) => (
                  <article key={spot.title} className="hotspot-card">
                    <div>
                      <strong>{spot.title}</strong>
                      <p className="muted">
                        {spot.location} - {spot.category}
                      </p>
                    </div>
                    <div className="hotspot-meta">
                      <span className="pill mini">* {spot.rating}</span>
                      <div className="chip-row">
                        {spot.businesses.map((biz) => (
                          <span key={biz} className="chip small">
                            {biz}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <p className="muted">Sign in as traveller to view tailored hotspots.</p>
              )}
            </div>
          </section>
        )
      case 'settings':
        return (
          <section className="page-screen settings-screen">
            <div className="settings-hero">
              <div>
                <p className="badge">Settings</p>
                <h3>Control your Thrillo experience</h3>
                <p className="panel-copy">
                  Tune alerts, privacy, and trip defaults from one calm board.
                </p>
              </div>
              <div className="settings-actions">
                <button className="cta-button ghost" onClick={() => setActivePage('home')}>
                  Back to home
                </button>
                <button className="cta-button primary" onClick={handleSaveSettings} disabled={settingsSaving}>
                  {settingsSaving ? 'Saving...' : 'Save changes'}
                </button>
              </div>
            </div>

            {settingsMessage && (
              <div className="settings-alert">
                <span className="pill mini success">Saved</span>
                <p>{settingsMessage}</p>
              </div>
            )}

            <div className="settings-grid">
              <div className="settings-stack">
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div>
                      <p className="small-label">Notifications</p>
                      <h4>Stay in the loop</h4>
                    </div>
                    <span className="pill mini success">Live</span>
                  </div>
                  <div className="setting-row">
                    <div>
                      <strong>Email alerts</strong>
                      <p className="panel-copy">Booking updates, receipts, and itinerary nudges.</p>
                    </div>
                    <label className={settings.emailAlerts ? 'toggle on' : 'toggle'}>
                      <input
                        type="checkbox"
                        checked={settings.emailAlerts}
                        onChange={() => toggleSetting('emailAlerts')}
                      />
                      <span className="toggle-handle" />
                    </label>
                  </div>
                  <div className="setting-row">
                    <div>
                      <strong>SMS alerts</strong>
                      <p className="panel-copy">Time-sensitive reminders for check-ins and hosts.</p>
                    </div>
                    <label className={settings.smsAlerts ? 'toggle on' : 'toggle'}>
                      <input
                        type="checkbox"
                        checked={settings.smsAlerts}
                        onChange={() => toggleSetting('smsAlerts')}
                      />
                      <span className="toggle-handle" />
                    </label>
                  </div>
                  <div className="setting-row">
                    <div>
                      <strong>Push notifications</strong>
                      <p className="panel-copy">Instant alerts on new messages and offers.</p>
                    </div>
                    <label className={settings.pushAlerts ? 'toggle on' : 'toggle'}>
                      <input
                        type="checkbox"
                        checked={settings.pushAlerts}
                        onChange={() => toggleSetting('pushAlerts')}
                      />
                      <span className="toggle-handle" />
                    </label>
                  </div>
                  <div className="setting-row">
                    <div>
                      <strong>Digest cadence</strong>
                      <p className="panel-copy">How often we send curated collections.</p>
                    </div>
                    <select
                      value={settings.digest}
                      onChange={(e) => updateSetting('digest', e.target.value)}
                      className="setting-select"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>

                <div className="settings-card">
                  <div className="settings-card-header">
                    <div>
                      <p className="small-label">Travel defaults</p>
                      <h4>Personalize your feed</h4>
                    </div>
                    <span className="pill mini">Syncs to mobile</span>
                  </div>
                  <div className="settings-fields">
                    <label className="setting-field">
                      Language
                      <select
                        value={settings.language}
                        onChange={(e) => updateSetting('language', e.target.value)}
                      >
                        {languageOptions.map((language) => (
                          <option key={language}>{language}</option>
                        ))}
                      </select>
                    </label>
                    <label className="setting-field">
                      Currency
                      <select
                        value={settings.currency}
                        onChange={(e) => updateSetting('currency', e.target.value)}
                      >
                        {currencyOptions.map((currency) => (
                          <option key={currency}>{currency}</option>
                        ))}
                      </select>
                    </label>
                    <label className="setting-field">
                      Timezone
                      <select
                        value={settings.timezone}
                        onChange={(e) => updateSetting('timezone', e.target.value)}
                      >
                        {timezoneOptions.map((zone) => (
                          <option key={zone}>{zone}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="setting-row column">
                    <div>
                      <strong>Travel vibe</strong>
                      <p className="panel-copy">We tailor recommendations around this mood.</p>
                    </div>
                    <div className="chip-row">
                      {travelVibes.map((vibe) => (
                        <button
                          key={vibe}
                          className={
                            settings.travelVibe === vibe ? 'chip active-chip' : 'chip muted-chip'
                          }
                          onClick={() => updateSetting('travelVibe', vibe)}
                        >
                          {vibe}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="settings-stack secondary">
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div>
                      <p className="small-label">Privacy</p>
                      <h4>Control visibility</h4>
                    </div>
                    <span className="pill mini">Profile</span>
                  </div>
                  <div className="setting-row">
                    <div>
                      <strong>Profile visibility</strong>
                      <p className="panel-copy">Who can see your saved trips and wishlists.</p>
                    </div>
                    <select
                      value={settings.profileVisibility}
                      onChange={(e) => updateSetting('profileVisibility', e.target.value)}
                      className="setting-select"
                    >
                      <option value="travellers">Travellers only</option>
                      <option value="hosts">Hosts you message</option>
                      <option value="private">Just me</option>
                    </select>
                  </div>
                  <div className="setting-row">
                    <div>
                      <strong>Data sharing</strong>
                      <p className="panel-copy">Share anonymized usage to improve Thrillo.</p>
                    </div>
                    <label className={settings.dataSharing ? 'toggle on' : 'toggle'}>
                      <input
                        type="checkbox"
                        checked={settings.dataSharing}
                        onChange={() => toggleSetting('dataSharing')}
                      />
                      <span className="toggle-handle" />
                    </label>
                  </div>
                  <div className="setting-row">
                    <div>
                      <strong>Auto-save trips</strong>
                      <p className="panel-copy">Keep drafts synced while offline.</p>
                    </div>
                    <label className={settings.autoSaveTrips ? 'toggle on' : 'toggle'}>
                      <input
                        type="checkbox"
                        checked={settings.autoSaveTrips}
                        onChange={() => toggleSetting('autoSaveTrips')}
                      />
                      <span className="toggle-handle" />
                    </label>
                  </div>
                </div>

                <div className="settings-card">
                  <div className="settings-card-header">
                    <div>
                      <p className="small-label">Shortcuts</p>
                      <h4>Account actions</h4>
                    </div>
                  </div>
                  <div className="settings-actions-column">
                    <button className="cta-button secondary full">Download my data</button>
                    <button className="cta-button ghost full">Sign out of all devices</button>
                    <button
                      className="cta-button primary full"
                      onClick={() => setActivePage('traveller-hotspots')}
                    >
                      Jump to hotspots
                    </button>
                  </div>
                  <p className="panel-copy small">
                    All changes are stored locally for this demo experience.
                  </p>
                </div>
              </div>
            </div>

            <nav className="bottom-nav">
              {bottomNavItems.map((nav) => (
                <button
                  key={nav.label}
                  className={activePage === nav.page ? 'nav-item active' : 'nav-item'}
                  onClick={() => setActivePage(nav.page)}
                >
                  <span className="nav-icon">{nav.icon}</span>
                  {nav.label}
                </button>
              ))}
            </nav>
          </section>
        )
      case 'category':
        return (
          <section className="page-screen category-screen">
            <div className="section-header">
              <p className="badge">Category</p>
              <h3>Wellness Escapes</h3>
              <p>Handpicked businesses registered on Trillo.</p>
            </div>
            <div className="business-grid">
              {categoryBusinesses.map((biz) => (
                <article key={biz.name} className="business-card">
                  <div className="gallery">
                    {biz.images.slice(0, 3).map((img, index) => (
                      <img key={img} src={img} alt={`${biz.name} ${index + 1}`} />
                    ))}
                    <span className="gallery-more">+3</span>
                  </div>
                  <div className="business-info">
                    <strong>{biz.name}</strong>
                    <p>{biz.location}</p>
                    <div className="meta">
                      <span>⭐ {biz.rating}</span>
                      <span className="pill">{biz.category}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

        )
      case 'details':
        return (
          <section className="page-screen details-screen">
            <div className="carousel">
              {businessDetails.images.map((img, index) => (
                <img key={img} src={img} alt={`Gallery ${index + 1}`} />
              ))}
            </div>
            <div className="details-content">
              <div className="title-row">
                <div>
                  <h3>{businessDetails.name}</h3>
                  <p>{businessDetails.location}</p>
                </div>
                <button className="icon-circle">♡</button>
              </div>
              <p className="body-text">{businessDetails.description}</p>
              <div className="info-block">
                <strong>Services</strong>
                <div className="chip-row">
                  {businessDetails.services.map((service) => (
                    <span key={service} className="chip">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="info-block">
                <strong>Opening Hours</strong>
                <p>{businessDetails.hours}</p>
              </div>
              <div className="info-block contact">
                <strong>Contact</strong>
                <p>{businessDetails.email}</p>
                <p>{businessDetails.phone}</p>
              </div>
              <div className="info-block">
                <strong>Reviews</strong>
                {reviews.map((review) => (
                  <div key={review.name} className="review-card">
                    <div>
                      <strong>{review.name}</strong>
                      <p>{review.text}</p>
                    </div>
                    <span>⭐ {review.rating}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="details-actions">
              <button className="cta-button primary">Message Business</button>
              <button className="cta-button ghost">Add to Favorites</button>
            </div>
          </section>
        )
      case 'landing':
      default:
        return (
          <section className="page-screen landing-screen">
            <div className="floating-illustrations">
              <span>🌴</span>
              <span>🌊</span>
              <span>⛰️</span>
            </div>
            <div className="landing-content">
              <p className="badge">Sri Lankan Odyssey</p>
              <ThrilloLogo size={120} className="landing-logo" />
              <p className="tagline">Discover Sri Lanka Like Never Before</p>
              <div className="cta-group">
                <button className="cta-button primary">Sign Up as Traveller</button>
                <button className="cta-button secondary">
                  Sign Up as Business Owner
                </button>
              </div>
              <div className="landing-footer">
                <p>Soft gradient waves + palm illustrations build the hero mood.</p>
              </div>
            </div>
          </section>
        )
    }
  }

  return (
    <div className="app-shell">
      <header className="app-hero">
        <div className="hero-text">
          <ThrilloLogo size={140} className="hero-logo" />
          <p>Discover Sri Lanka like never before.</p>
        </div>
      </header>

      <main className="app-main">
        <div className="app-body">
          <div className="page-stage">{renderPage(activePage)}</div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="footer-brand">
          <ThrilloLogo size={64} className="footer-logo" />
          <div>
            <strong>Thrillo</strong>
            <p className="panel-copy">Sri Lankan stays, experiences, and hosts.</p>
          </div>
        </div>
        <div className="footer-links">
          <button className="footer-link" onClick={() => setActivePage('settings')}>
            Settings
          </button>
          <button className="footer-link" onClick={() => setActivePage('home')}>
            Home
          </button>
          <button className="footer-link" onClick={() => setActivePage('traveller-hotspots')}>
            Hotspots
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App

