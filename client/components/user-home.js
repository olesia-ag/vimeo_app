import React from 'react'
import PropTypes from 'prop-types'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
    </div>
  )
}

export default UserHome

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
