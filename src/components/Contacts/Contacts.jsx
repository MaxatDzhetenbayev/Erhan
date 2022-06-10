import React from 'react'
import classes from './Contacts.module.scss'

const Contacts = () => {
   return (
      <div className={classes.contacts}>
         <h2>Контакты</h2>
         <div className={classes.wrapper}>
            <div className={classes.contacts_item}>
               <div className={classes.contacts_info}>
                  <h4>Адрес</h4>
                  <p>ВКО, г.Семей, ул Уалиханова 25</p>
               </div>
               <div className={classes.contacts_info}>
                  <h4 >Телефоны</h4>
                  <p>8(776) 777 39 96</p>
               </div>
            </div>
            <div className={classes.contacts_item}>
               <div className={classes.contacts_info} >
                  <h4>Режим работы</h4>
                  <p>Пн. - Пт.: 10:00-19:00 <br /> Сб.: 10:00-14:00 <br /> Вс.:</p>
               </div>
               <div className={classes.contacts_info}>
                  <h4>E-MAIL</h4>
                  <p>erhan.abbr@mail.ru</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contacts