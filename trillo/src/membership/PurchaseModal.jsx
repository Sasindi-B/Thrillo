import PropTypes from 'prop-types'
import { useEffect } from 'react'

const PurchaseModal = ({ open, pkg, onClose, onConfirm, loading, message, error }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose()
    }
    if (open) {
      window.addEventListener('keydown', handleEsc)
    }
    return () => window.removeEventListener('keydown', handleEsc)
  }, [open, onClose])

  if (!open || !pkg) return null

  const isGold = pkg.packageType === 'GOLD'

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`purchase-modal ${open ? 'open' : ''}`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          <div>
            <p className="small-label">Confirm purchase</p>
            <h3>{pkg.name}</h3>
            <p className="price-line">{pkg.price}</p>
          </div>
          <span className={`pill ${isGold ? 'gold-pill' : 'silver-pill'}`}>{pkg.packageType}</span>
        </div>
        <div className="modal-body">
          <p>You're about to unlock:</p>
          <ul className="feature-list compact">
            {pkg.features?.map((feature) => (
              <li key={feature}>
                <span className="feature-icon">{isGold ? '★' : '✦'}</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {message && <div className="toast success">{message}</div>}
          {error && <div className="toast error">{error}</div>}
        </div>
        <div className="modal-actions">
          <button className="cta-button ghost" onClick={onClose} disabled={loading}>
            Cancel
          </button>
          <button className={`cta-button ${isGold ? 'gold-cta' : 'silver-cta'}`} onClick={onConfirm} disabled={loading}>
            {loading ? 'Processing...' : 'Confirm purchase'}
          </button>
        </div>
      </div>
    </div>
  )
}

PurchaseModal.propTypes = {
  open: PropTypes.bool.isRequired,
  pkg: PropTypes.shape({
    packageType: PropTypes.oneOf(['SILVER', 'GOLD']).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
  }),
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  message: PropTypes.string,
  error: PropTypes.string,
}

export default PurchaseModal

