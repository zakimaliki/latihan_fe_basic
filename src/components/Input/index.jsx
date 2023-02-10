import React, { Fragment } from 'react'
import propTypes from 'prop-types'

const Input = ({type,value,name,id,placeholder,onChange}) => {
  return (
    <Fragment>
        <input type={type} value={value} name={name} id={id} placeholder={placeholder} onChange={onChange} className="form-control"/>
    </Fragment>
  )
}

Input.defaultProps = {
    placeholder : "Product"
}

Input.propTypes = {
    type : propTypes.string,
    value : propTypes.string.isRequired,
    name : propTypes.string,
    id : propTypes.string,
    placeholder : propTypes.string,
    onChange : propTypes.func
}

export default Input