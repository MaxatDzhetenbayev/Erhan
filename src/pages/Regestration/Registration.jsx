import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import cs from './Regestration.module.scss'

const Regestration = () => {
   return (
      <div className={cs.root}>
         <div className='wrapper'>
            <div className={cs.wrapper}>
               <h1>Войти</h1>
               <SignIn />
               <h1>Регестрация</h1>
               <SignUp />
            </div>
         </div>
      </div>
   )
}

export default Regestration