import PropTypes from 'prop-types'

const PackageCard = ({ pkg, onSelect }) => {
  const variant = pkg.packageType?.toLowerCase?.() || ''
  const isGold = pkg.packageType === 'GOLD'

  return (
    <div className={`membership-card package-card ${variant}`}>
      <div className="package-head">
        <div>
          <p className="small-label">
            {pkg.packageType === 'FREE'
              ? 'Get started'
              : isGold
              ? 'Premium access'
              : 'Boosted access'}
          </p>
          <h3>{pkg.name}</h3>
          <p className="price-line">{pkg.price}</p>
        </div>
        <span className={`pill ${variant ? `${variant}-pill` : ''}`}>{pkg.packageType}</span>
      </div>
      <ul className="feature-list">
        {pkg.features?.map((feature) => (
          <li key={feature}>
            <span className="feature-icon">{isGold ? 'ƒ~.' : 'ƒoÝ'}</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`cta-button full ${variant ? `${variant}-cta` : ''}`} onClick={() => onSelect(pkg)}>
        {pkg.packageType === 'FREE'
          ? 'Start for Free'
          : isGold
          ? 'Unlock Gold'
          : 'Upgrade to Silver'}
      </button>
    </div>
  )
}

PackageCard.propTypes = {
  pkg: PropTypes.shape({
    packageType: PropTypes.oneOf(['FREE', 'SILVER', 'GOLD']).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default PackageCard
