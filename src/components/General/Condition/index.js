import React, { Fragment } from 'react'

/**
 * Declarative IF component
 */
const Condition = ({ when, children }) => {
  return (
    Boolean(when) && children ? <Fragment>{children}</Fragment> : null
  )
}

/** @component */
export default Condition
