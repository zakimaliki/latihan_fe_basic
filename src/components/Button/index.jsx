import React, { Fragment } from 'react'
import propTypes from 'prop-types'

const Button = ({id,type,onClick}) => {
  return (
    <Fragment>
      <button onClick={onClick} id={id} type={type} className="input-group-text">add</button>
    </Fragment>
  )
}
Button.defaultProps ={
  children : "add"
}


Button.propTypes ={
  id : propTypes.string.isRequired,
  type : propTypes.string,
  children : propTypes.string.isRequired,
  onClick : propTypes.func
}

export default Button