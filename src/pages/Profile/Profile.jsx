import React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Context'
import cs from './Profile.module.scss'

const Profile = () => {

   const user = useSelector(state => state.userSlice.currentUser)

   const navigate = useNavigate()
   const { setIsAuth } = useContext(Context)
   const exitAuth = () => {
      setIsAuth(false)
      navigate('/')
   }

   return (
      <div className={cs.root}>
         <div className='wrapper'>
            <div className={cs.profile}>
               <h1>Профиль</h1>
               <div className={cs.line}></div>
               <div className={cs.items}>
                  <div className={cs.item}>Логин: {user.login}</div>
                  <div className={cs.item}>Имя: {user.name}</div>
                  <div className={cs.item}>Фамилия: {user.surname}</div>
               </div>
               <button className={cs.button} onClick={exitAuth}>Выйти с аккаунта</button>
               <div className={cs.line}></div>
            </div>
         </div>
      </div>
   )
}

export default Profile