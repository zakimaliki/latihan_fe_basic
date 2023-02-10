import React from 'react'

const InputBaru = ({data,handleChange}) => {
  return (
    <>
        <input type="text" value={data} onChange={handleChange}/>
    </>
    )
}

export default InputBaru