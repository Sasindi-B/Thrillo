import { useRef, useState } from 'react'
import BusinessProfilePage from './business/BusinessProfilePage'
import { BusinessLoginPage, BusinessSignupPage } from './business/BusinessAuthPages'
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

const hotspotBusinesses = [
  {
    id: 'mount-heaven',
    name: 'Mount Heaven',
    category: 'Wellness',
    location: 'Colombo',
    mapUrl: 'https://maps.google.com/?q=Colombo+Sri+Lanka',
    description:
      'Boutique wellness house with artisanal teas, spa rituals, and quiet work corners steps from the lagoon.',
    preview:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    ],
    availability: ['Jan 12 - 10:00 AM', 'Jan 13 - 4:00 PM', 'Jan 14 - 9:30 AM'],
    price: 'LKR 18,000',
  },
  {
    id: 'lagoon-glow',
    name: 'Lagoon Glow Spa & Retreat',
    category: 'Wellness',
    location: 'Bentota',
    mapUrl: 'https://maps.google.com/?q=Bentota+Sri+Lanka',
    description:
      'Holistic Sri Lankan wellness experiences blending Ayurveda, ocean-inspired therapies, and mindful movement.',
    preview:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1506439773649-6e0e29c6f30d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    ],
    availability: ['Jan 18 - 8:00 AM', 'Jan 19 - 6:00 PM', 'Jan 21 - 11:00 AM'],
    price: 'LKR 22,500',
  },
  {
    id: 'colombo-spice',
    name: 'Colombo Spice Cafe',
    category: 'Cafes',
    location: 'Colombo',
    mapUrl: 'https://maps.google.com/?q=Colombo+Sri+Lanka',
    description:
      'Signature Lankan spices with modern brews, rooftop sunsets, and live acoustic sets every weekend.',
    preview:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1544145945-f90425340c7b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    ],
    availability: ['Tonight - 7:00 PM', 'Tomorrow - 6:30 PM'],
    price: 'LKR 9,500',
  },
  {
    id: 'jungle-pulse',
    name: 'Jungle Pulse Adventures',
    category: 'Adventures',
    location: 'Kitulgala',
    mapUrl: 'https://maps.google.com/?q=Kitulgala+Sri+Lanka',
    description:
      'White-water rafting, canyoning, and rainforest trails led by certified safety-first guides.',
    preview:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    ],
    availability: ['Jan 15 - 8:00 AM', 'Jan 16 - 2:30 PM'],
    price: 'LKR 14,800',
  },
]

const travellerContact = {
  name: 'Maya Perera',
  email: 'maya@example.com',
  phone: '+94 77 123 4567',
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

const ownerBusinessTypes = [
  'Wellness',
  'Cafes',
  'Adventures',
  'DJs',
  'Arts',
  'Special Events',
  'Gift Items',
  'Daycares',
  'Others',
]

function App() {
  const API_BASE = import.meta.env.VITE_API_BASE || '/api'
  const [activePage, setActivePage] = useState('home')
  const [hoveredTrending, setHoveredTrending] = useState(null)
  const [role, setRole] = useState('traveller')
  const [authMode, setAuthMode] = useState('login')
  const [isTravellerLoggedIn, setIsTravellerLoggedIn] = useState(false)
  const [travelLocation, setTravelLocation] = useState('')
  const [hotspotSearch, setHotspotSearch] = useState('')
  const [hotspotCategory, setHotspotCategory] = useState('All')
  const [selectedBusiness, setSelectedBusiness] = useState(hotspotBusinesses[0])
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
  const [profile, setProfile] = useState({
    businessName: 'Mount Heaven',
    businessType: 'Wellness',
    description:
      'Boutique wellness house with artisanal teas, spa rituals, and quiet work corners steps from the lagoon.',
    email: 'mountheaven@gmail.com',
    location: 'Colombo, Sri Lanka',
    city: 'Colombo',
    locationLink: 'https://maps.google.com/?q=Colombo+Sri+Lanka',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
      '',
      '',
      '',
    ],
  })
  const [isManagingProfile, setIsManagingProfile] = useState(false)
  const [profileMessage, setProfileMessage] = useState('')
  const [profileError, setProfileError] = useState('')
  const [activeSlot, setActiveSlot] = useState(null)
  const [showLocationPreview, setShowLocationPreview] = useState(false)
  const [profileSaving, setProfileSaving] = useState(false)
  const fileInputRef = useRef(null)
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
  const [bookingForm, setBookingForm] = useState({
    startDate: '',
    endDate: '',
    people: 2,
    notes: '',
  })
  const [bookingStatus, setBookingStatus] = useState('')
  const [notifications, setNotifications] = useState({
    traveller: [],
    owner: [],
  })
  const [activeNotificationTab, setActiveNotificationTab] = useState('traveller')

  const bottomNavItems = [
    { label: 'Settings', icon: '⚙️', page: 'settings' },
    { label: 'Home', icon: '🏠', page: 'home' },
    { label: 'Profile', icon: '👤', page: 'profile' },
  ]

  const filteredHotspots = travellerHotspots.filter((spot) => {
    if (!travelLocation.trim()) return true
    return spot.location.toLowerCase().includes(travelLocation.trim().toLowerCase())
  })

  const filteredBusinesses = hotspotBusinesses.filter((biz) => {
    const matchesCategory = hotspotCategory === 'All' || biz.category === hotspotCategory
    const matchesSearch =
      !hotspotSearch.trim() ||
      biz.name.toLowerCase().includes(hotspotSearch.trim().toLowerCase()) ||
      biz.location.toLowerCase().includes(hotspotSearch.trim().toLowerCase())
    return matchesCategory && matchesSearch
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
      const response = await fetch(`${API_BASE}/auth/login`, {
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
        setIsManagingProfile(false)
        setProfileMessage('')
        setProfileError('')
        setActivePage('profile')
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
    const endpoint = isTraveller ? `${API_BASE}/travellers/signup` : `${API_BASE}/business-owners/signup`
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

  const openBusinessDetails = (biz) => {
    setSelectedBusiness(biz)
    setActivePage('business-details')
  }

  const resetBookingForm = () => {
    setBookingForm({
      startDate: '',
      endDate: '',
      people: 2,
      notes: '',
    })
    setBookingStatus('')
  }

  const handleBookingSubmit = () => {
    if (!selectedBusiness) return
    if (!bookingForm.startDate || !bookingForm.endDate) {
      setBookingStatus('Please select a date range')
      return
    }

    const bookingId = `bk-${Date.now()}`
    const dates = `${bookingForm.startDate} to ${bookingForm.endDate}`

    setNotifications((prev) => ({
      traveller: [
        {
          id: bookingId,
          title: 'Booking request sent',
          body: `${selectedBusiness.name} · ${dates}`,
          status: 'Pending',
          timestamp: 'Just now',
          people: bookingForm.people,
        },
        ...prev.traveller,
      ],
      owner: [
        {
          id: bookingId,
          title: 'New booking request',
          body: `${travellerContact.name} · ${dates}`,
          status: 'Pending',
          timestamp: 'Just now',
          people: bookingForm.people,
          contact: `${travellerContact.email} · ${travellerContact.phone}`,
          businessName: selectedBusiness.name,
        },
        ...prev.owner,
      ],
    }))

    setBookingStatus('submitted')
    setActiveNotificationTab('traveller')
    setActivePage('booking-confirmation')
  }

  const handleOwnerDecision = (bookingId, decision) => {
    setNotifications((prev) => {
      const nextOwner = prev.owner.map((n) =>
        n.id === bookingId ? { ...n, status: decision === 'accept' ? 'Accepted' : 'Declined' } : n
      )
      const nextTraveller = [...prev.traveller]
      if (decision === 'accept') {
        nextTraveller.unshift({
          id: `${bookingId}-accepted`,
          title: 'Booking accepted',
          body: 'Proceed to payment to confirm your spot.',
          status: 'Accepted',
          timestamp: 'Just now',
        })
        setBookingStatus('accepted')
      } else {
        nextTraveller.unshift({
          id: `${bookingId}-declined`,
          title: 'Booking declined',
          body: 'The business owner declined this request.',
          status: 'Declined',
          timestamp: 'Just now',
        })
      }
      return { traveller: nextTraveller, owner: nextOwner }
    })
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

  const handleImageUpload = (fileList, slot = null) => {
    if (!fileList?.length) return
    const files = Array.from(fileList)

    setProfile((prev) => {
      const currentImages = [...prev.images]
      const existingCount = currentImages.filter(Boolean).length
      const replacingExisting = slot !== null && currentImages[slot]
      const nextCount = replacingExisting ? existingCount - 1 + files.length : existingCount + files.length

      if (nextCount > 6) {
        setProfileError('You can upload up to 6 images.')
        setProfileMessage('')
        return prev
      }

      if (slot !== null && files[0]) {
        currentImages[slot] = URL.createObjectURL(files[0])
      } else {
        let pointer = 0
        for (let i = 0; i < currentImages.length && pointer < files.length; i += 1) {
          if (!currentImages[i]) {
            currentImages[i] = URL.createObjectURL(files[pointer])
            pointer += 1
          }
        }

        while (pointer < files.length && currentImages.length < 6) {
          currentImages.push(URL.createObjectURL(files[pointer]))
          pointer += 1
        }
      }

      setProfileError('')
      setProfileMessage('')
      return { ...prev, images: currentImages.slice(0, 6) }
    })
  }

  const handleRemoveImage = (index) => {
    setProfile((prev) => {
      const updated = [...prev.images]
      updated[index] = ''
      return { ...prev, images: updated }
    })
    setProfileError('')
  }

  const startManagingProfile = () => {
    setIsManagingProfile(true)
    setProfileMessage('')
    setProfileError('')
  }

  const handleSaveProfile = async () => {
    const trimmedLocation = (profile.location || '').trim()
    const trimmedDescription = (profile.description || '').trim()
    const trimmedLink = (profile.locationLink || '').trim()

    if (trimmedLocation.length > 200) {
      setProfileError('Location must be 200 characters or less.')
      setProfileMessage('')
      return
    }

    if (trimmedDescription.length > 200) {
      setProfileError('Description must be 200 characters or less.')
      setProfileMessage('')
      return
    }

    if (trimmedLink && !trimmedLink.startsWith('https://')) {
      setProfileError('Location link must start with https://')
      setProfileMessage('')
      return
    }

    const payload = {
      businessName: profile.businessName,
      businessType: profile.businessType,
      description: trimmedDescription,
      googleMapsUrl: trimmedLink || '',
      location: trimmedLocation,
      imageUrls: profile.images.filter(Boolean),
    }

    setProfileSaving(true)
    setProfileError('')
    setProfileMessage('')

    try {
      const response = await fetch(`${API_BASE}/business-owners/me/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const body = await response.json().catch(() => null)

      if (!response.ok) {
        const message = body?.errors?.[0] || body?.message || 'Failed to update profile.'
        throw new Error(message)
      }

      const updatedProfile = body?.profile || {}
      setProfile((prev) => {
        const nextLocation = updatedProfile.location ?? trimmedLocation
        const nextDescription = updatedProfile.description ?? trimmedDescription ?? prev.description
        const nextLocationLink = updatedProfile.googleMapsUrl ?? trimmedLink
        const incomingImages = updatedProfile.imageUrls ?? prev.images
        const paddedImages = [...incomingImages]
        while (paddedImages.length < 6) paddedImages.push('')

        return {
          ...prev,
          ...updatedProfile,
          description: nextDescription,
          location: nextLocation,
          locationLink: nextLocationLink,
          images: paddedImages.slice(0, 6),
        }
      })
      setProfileMessage('Profile updated successfully')
      setIsManagingProfile(false)
    } catch (error) {
      setProfileError(error.message || 'Failed to update profile.')
      setProfileMessage('')
    } finally {
      setProfileSaving(false)
    }
  }

  const toggleLocationPreview = () => {
    if (!profile.locationLink.startsWith('https://')) {
      setProfileError('Location link must start with https://')
      setProfileMessage('')
      return
    }
    setProfileError('')
    setShowLocationPreview((prev) => !prev)
  }

  const renderPage = (pageId) => {
    switch (pageId) {
      case 'business-signup':
        return (
          <BusinessSignupPage
            businessCategoryOptions={businessCategoryOptions}
            businessTypes={businessTypes}
            businessScaleOptions={businessScaleOptions}
          />
        )
      case 'business-login':
        return (
          <BusinessLoginPage
            loginEmail={loginEmail}
            loginPassword={loginPassword}
            setLoginEmail={setLoginEmail}
            setLoginPassword={setLoginPassword}
            authError={authError}
            authLoading={authLoading}
            handleLogin={handleLogin}
            setAuthError={setAuthError}
            setSignupMessage={setSignupMessage}
          />
        )
      case 'traveller-signup':
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
                <button className="text-link">Forgot password-</button>
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
                First time here- <span>Create a traveller profile</span>
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
          <section className="page-screen hotspots-screen">
            <div className="location-header">
              <div>
                <p className="badge">Traveller</p>
                <h3>Hotspots</h3>
                <p className="panel-copy">Search, filter, and open any business to view details.</p>
              </div>
              <button className="cta-button ghost" onClick={() => setActivePage('home')}>
                Back to home
              </button>
            </div>

            <div className="hotspot-controls">
              <div className="search-bar">
                <span className="icon-circle small">🔍</span>
                <input
                  placeholder="Search businesses or locations"
                  value={hotspotSearch}
                  onChange={(e) => setHotspotSearch(e.target.value)}
                />
              </div>
              <div className="chip-row">
                {['All', ...new Set(hotspotBusinesses.map((b) => b.category))].map((cat) => (
                  <button
                    key={cat}
                    className={hotspotCategory === cat ? 'chip active-chip' : 'chip muted-chip'}
                    onClick={() => setHotspotCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="hotspot-grid cards">
              {filteredBusinesses.map((biz) => (
                <article
                  key={biz.id}
                  className="hotspot-card gradient-border"
                  onClick={() => openBusinessDetails(biz)}
                >
                  <div className="hotspot-thumb">
                    <img src={biz.preview || biz.images[0]} alt={biz.name} />
                  </div>
                  <div className="hotspot-body">
                    <div className="hotspot-top">
                      <p className="small-label">{biz.category}</p>
                      <span className="pill mini">{biz.location}</span>
                    </div>
                    <h4>{biz.name}</h4>
                    <p className="muted two-line">{biz.description}</p>
                    <div className="hotspot-footer">
                      <span className="pill mini secondary">{biz.availability[0] || 'Available'}</span>
                      <span className="pill mini ghost">{biz.images.length}/6</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )
      case 'business-details':
        if (!selectedBusiness) return null
        return (
          <section className="page-screen details-screen expanded">
            <div className="details-hero">
              <div>
                <p className="badge">Business</p>
                <h3>{selectedBusiness.name}</h3>
                <div className="details-meta">
                  <span className="pill mini">{selectedBusiness.category}</span>
                  <a
                    className="pill mini link-chip"
                    href={selectedBusiness.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    📍 {selectedBusiness.location}
                  </a>
                </div>
                <p className="panel-copy">{selectedBusiness.description}</p>
              </div>
              <button className="cta-button primary" onClick={() => setActivePage('booking')}>
                Book This Place
              </button>
            </div>

            <div className="gallery-grid">
              {selectedBusiness.images.map((img, idx) => (
                <div key={img} className="gallery-cell">
                  <img src={img} alt={`${selectedBusiness.name} ${idx + 1}`} />
                </div>
              ))}
            </div>

            <div className="availability-card">
              <div>
                <p className="small-label">Availability</p>
                <h4>Open slots</h4>
              </div>
              <div className="availability-list">
                {selectedBusiness.availability.map((slot) => (
                  <span key={slot} className="pill mini">
                    {slot}
                  </span>
                ))}
              </div>
            </div>

            <div className="details-actions sticky-actions">
              <button className="cta-button ghost" onClick={() => setActivePage('traveller-hotspots')}>
                Back to Hotspots
              </button>
              <div className="cta-row">
                <button className="cta-button secondary" onClick={() => setActivePage('notifications')}>
                  View notifications
                </button>
                <button className="cta-button primary" onClick={() => setActivePage('booking')}>
                  Book This Place
                </button>
              </div>
            </div>
          </section>
        )
      case 'booking':
        return (
          <section className="page-screen booking-screen">
            <div className="booking-header">
              <div>
                <p className="badge">Booking</p>
                <h3>Reserve {selectedBusiness?.name || 'a place'}</h3>
                <p className="panel-copy">
                  Select dates, group size, and add any notes. Contact details auto-filled.
                </p>
              </div>
              <button className="cta-button ghost" onClick={() => setActivePage('business-details')}>
                Back to details
              </button>
            </div>

            <div className="booking-grid">
              <div className="booking-form-card">
                <div className="input-group two-column">
                  <label>
                    Start date
                    <input
                      type="date"
                      value={bookingForm.startDate}
                      onChange={(e) => setBookingForm((prev) => ({ ...prev, startDate: e.target.value }))}
                    />
                  </label>
                  <label>
                    End date
                    <input
                      type="date"
                      value={bookingForm.endDate}
                      onChange={(e) => setBookingForm((prev) => ({ ...prev, endDate: e.target.value }))}
                    />
                  </label>
                </div>
                <div className="input-group two-column">
                  <label>
                    Number of people
                    <input
                      type="number"
                      min="1"
                      max="12"
                      value={bookingForm.people}
                      onChange={(e) =>
                        setBookingForm((prev) => ({ ...prev, people: Number(e.target.value || 1) }))
                      }
                    />
                  </label>
                  <label>
                    Notes (optional)
                    <input
                      placeholder="Occasion, preferences, etc."
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm((prev) => ({ ...prev, notes: e.target.value }))}
                    />
                  </label>
                </div>
                <div className="input-group two-column">
                  <label>
                    Traveller name
                    <input value={travellerContact.name} readOnly />
                  </label>
                  <label>
                    Traveller contact
                    <input value={`${travellerContact.email} / ${travellerContact.phone}`} readOnly />
                  </label>
                </div>

                {bookingStatus && bookingStatus !== 'submitted' && (
                  <p className="booking-status muted">{bookingStatus}</p>
                )}

                <div className="cta-row">
                  <button className="cta-button ghost" onClick={resetBookingForm}>
                    Clear
                  </button>
                  <button className="cta-button primary" onClick={handleBookingSubmit}>
                    Confirm Booking
                  </button>
                </div>
              </div>

              <div className="booking-summary">
                <div className="summary-card">
                  <p className="small-label">You are booking</p>
                  <h4>{selectedBusiness?.name}</h4>
                  <p className="muted">{selectedBusiness?.location}</p>
                  <div className="pill mini ghost">{selectedBusiness?.category}</div>
                  <div className="divider" />
                  <p className="muted">Expected amount</p>
                  <h3>{selectedBusiness?.price}</h3>
                </div>
              </div>
            </div>
          </section>
        )
      case 'booking-confirmation':
        return (
          <section className="page-screen confirmation-screen">
            <p className="badge">Booking</p>
            <h3>Your booking request has been sent to the business owner.</h3>
            <p className="panel-copy">
              We will notify you when the owner accepts. You can monitor updates in the notification
              center.
            </p>
            <div className="cta-row">
              <button className="cta-button secondary" onClick={() => setActivePage('notifications')}>
                View notifications
              </button>
              <button className="cta-button primary" onClick={() => setActivePage('traveller-hotspots')}>
                Back to hotspots
              </button>
            </div>
          </section>
        )
      case 'notifications':
        return (
          <section className="page-screen notifications-screen">
            <div className="notification-header">
              <div>
                <p className="badge">Notifications</p>
                <h3>Inbox</h3>
              </div>
              <div className="chip-row">
                <button
                  className={activeNotificationTab === 'traveller' ? 'chip active-chip' : 'chip muted-chip'}
                  onClick={() => setActiveNotificationTab('traveller')}
                >
                  Traveller Notifications
                </button>
                <button
                  className={activeNotificationTab === 'owner' ? 'chip active-chip' : 'chip muted-chip'}
                  onClick={() => setActiveNotificationTab('owner')}
                >
                  Business Owner Notifications
                </button>
              </div>
            </div>

            <div className="notification-list">
              {(notifications[activeNotificationTab] || []).map((item) => (
                <article key={item.id} className="notification-card">
                  <div>
                    <div className="notification-top">
                      <strong>{item.title}</strong>
                      <span className={`pill mini ${item.status?.toLowerCase()}`}>{item.status}</span>
                    </div>
                    <p className="muted">{item.body}</p>
                    {item.people && (
                      <p className="muted small">People: {item.people}</p>
                    )}
                    {item.contact && <p className="muted small">Contact: {item.contact}</p>}
                    {item.businessName && <p className="muted small">Business: {item.businessName}</p>}
                  </div>
                  {activeNotificationTab === 'owner' && item.status === 'Pending' && (
                    <div className="cta-row">
                      <button className="cta-button ghost" onClick={() => handleOwnerDecision(item.id, 'decline')}>
                        Decline
                      </button>
                      <button className="cta-button primary" onClick={() => handleOwnerDecision(item.id, 'accept')}>
                        Accept
                      </button>
                    </div>
                  )}
                </article>
              ))}
              {(notifications[activeNotificationTab] || []).length === 0 && (
                <p className="muted">No notifications yet.</p>
              )}
            </div>

            <div className="cta-row">
              <button className="cta-button ghost" onClick={() => setActivePage('traveller-hotspots')}>
                Back to hotspots
              </button>
              <button className="cta-button primary" onClick={() => setActivePage('payment')}>
                Go to payment
              </button>
            </div>
          </section>
        )
      case 'payment':
        return (
          <section className="page-screen payment-screen">
            <p className="badge">Payment</p>
            <h3>Pay to confirm your booking</h3>
            <p className="panel-copy">
              Once the owner accepts, complete payment to secure your spot.
            </p>
            <div className="payment-card">
              <div>
                <p className="small-label">Business</p>
                <h4>{selectedBusiness?.name}</h4>
                <p className="muted">{selectedBusiness?.location}</p>
              </div>
              <div className="payment-amount">
                <p className="muted">Amount</p>
                <h3>{selectedBusiness?.price}</h3>
              </div>
            </div>
            <div className="cta-row">
              <button className="cta-button ghost" onClick={() => setActivePage('notifications')}>
                Back
              </button>
              <button className="cta-button primary" onClick={() => setActivePage('traveller-hotspots')}>
                Pay Now (demo)
              </button>
            </div>
          </section>
        )
      case 'profile':
        return (
          <BusinessProfilePage
            profile={profile}
            setProfile={setProfile}
            profileMessage={profileMessage}
            profileError={profileError}
            isManagingProfile={isManagingProfile}
            startManagingProfile={startManagingProfile}
            handleSaveProfile={handleSaveProfile}
            handleImageUpload={handleImageUpload}
            handleRemoveImage={handleRemoveImage}
            toggleLocationPreview={toggleLocationPreview}
            showLocationPreview={showLocationPreview}
            fileInputRef={fileInputRef}
            activeSlot={activeSlot}
            setActiveSlot={setActiveSlot}
            setIsManagingProfile={setIsManagingProfile}
            setProfileError={setProfileError}
            setProfileMessage={setProfileMessage}
            profileSaving={profileSaving}
            ownerBusinessTypes={ownerBusinessTypes}
            setActivePage={setActivePage}
          />
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



