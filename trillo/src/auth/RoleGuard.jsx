import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { getUserFromToken } from '../utils/auth'

const RoleGuard = ({ allowedRoles, redirectTo = '/', user, children }) => {
  const resolvedUser = user || getUserFromToken()

  if (!resolvedUser || !allowedRoles.includes(resolvedUser.role)) {
    return <Navigate to={redirectTo} replace />
  }

  return children
}

RoleGuard.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  redirectTo: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    role: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
}

export default RoleGuard

