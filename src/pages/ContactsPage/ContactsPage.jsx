import React from 'react'
import classes from './ContactsPage.module.scss'

const ContactsPage = () => {
   return (
      <div className='wrapper'>
         <div className={classes.contacts}>
            <h1> Адреса Магазинов</h1>
            <div className={classes.inner}>
               <div className={classes.city}>Казахстан</div>
               <div className={classes.addres}>
                  <div className={classes.addres_text}>
                     <h4>Семей Валиханова 25 Центральный офис</h4>
                     <p>Вко, г.Семей, ул.Уалиханова 25</p>
                  </div>
                  <div className={classes.addres_text}>
                     <h4>Казахстан курьерская доставка или ТК</h4>
                     <p>ВКО, Город Казахстана, центр склад г. Семей, Валиханова 25</p>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

export { ContactsPage }