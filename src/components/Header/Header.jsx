import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import { Context } from '../../Context/Context'
import { useSelector } from 'react-redux'

const Header = () => {

   const { isAuth } = useContext(Context)
   const currentUser = useSelector(state => state.userSlice.currentUser)


   return (
      <header className={classes.header}>
         <div className='wrapper'>
            <div className={classes.inner}>
               <div className={classes.left}>
                  <div className={classes.item} >Казахстан, г.Семей ул. Уалиханова 25</div>
                  <div className={classes.item}><a href="tel:+77767773996">8(776)7773996</a></div>
                  <div className={classes.item}><a href="mailto:erhan.addr@mail.ru">erhan.addr@mail.ru</a></div>
               </div>
               <div className={classes.right}>

                  <div className={classes.wrapper}>
                     {
                        isAuth
                           ?
                           <NavLink className={classes.profile} to={`profile/${currentUser.id}`}>{currentUser.name + ' ' + currentUser.surname}</NavLink>
                           :
                           <NavLink to='/regestration' className={classes.button_items}>Войти</NavLink>
                     }
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header