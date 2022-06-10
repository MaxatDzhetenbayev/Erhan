import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Footer.module.scss'

const Footer = () => {
   return (
      <footer className={classes.footer}>
         <div className='wrapper'>
            <div className={classes.inner}>
               <div className={classes.item}>
                  <h2 className={classes.title}>Магазин АвтоЗапчастей</h2>
                  <div className={classes.info}>
                     <ul>
                        <li> <div className={classes.item} >Казахстан, г.Семей ул. Уалиханова 25</div></li>
                        <li> <div className={classes.item}><a href="tel:+77767773996">8(776)7773996</a></div></li>
                        <li> <div className={classes.item}><a href="mailto:erhan.addr@mail.ru">erhan.addr@mail.ru</a></div></li>
                     </ul>



                  </div>
               </div>
               <div className={classes.item}>
                  <h2 className={classes.title}>Информация</h2>
                  <div className={classes.info}>
                     <ul>
                        <li><NavLink to='/'>Каталог</NavLink></li>
                        <li><NavLink to='/payment'>Оплата</NavLink></li>
                        <li><NavLink to='/contacts'>Контакты</NavLink></li>
                     </ul>
                  </div>

               </div>

            </div>
         </div>
      </footer>
   )
}

export default Footer