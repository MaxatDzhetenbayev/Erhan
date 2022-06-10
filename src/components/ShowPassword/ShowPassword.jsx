import React from 'react'
import cs from './ShowPassword.module.scss'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const ShowPassword = ({ showPassword, handleClick }) => {
   return (
      <button className={cs.show} onClick={handleClick}>
         {
            showPassword
               ?
               <AiOutlineEye />
               :
               <AiOutlineEyeInvisible />
         }
      </button>
   )
}

export default ShowPassword