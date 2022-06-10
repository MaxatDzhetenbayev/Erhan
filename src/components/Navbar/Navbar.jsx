import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.scss'

const Navbar = () => {
   return (
      <nav className={classes.navbar}>
         <div className='wrapper'>
            <div className={classes.inner}>

               <div>
                  <NavLink to='/' className={classes.nav}>Каталог</NavLink>
                  <NavLink to='/Payment' className={classes.nav}>Оплата</NavLink>
                  <NavLink to='/contacts' className={classes.nav}>Контакты</NavLink>
               </div>

            </div>
         </div>
      </nav>
   )
}

export default Navbar