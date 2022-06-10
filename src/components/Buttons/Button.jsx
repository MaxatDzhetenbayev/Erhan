import React from 'react'
import cs from './Button.module.scss'

const Button = ({ value, handleClick }) => {
   return (
      <button className={cs.button} onClick={handleClick}>{value}</button>
   )
}

export default Button