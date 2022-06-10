import React from 'react'
import cs from './Input.module.scss'

const Input = ({ value, onchange, placeholder, type }) => {

   return (
      <input type={type} className={cs.input} onChange={e => onchange(e.target.value)} value={value} placeholder={placeholder} />
   )
}

export default Input