import React from 'react'
import classes from './Payment.module.scss'


const Payment = () => {
   return (
      <div className={classes.payment}>
         <div className='wrapper'>
            <h1>Оплата заказа</h1>
            <div className={classes.payment_info}>
               <p >
                  Для работы с заказами в сисстеме интернет магазина  используются внутренние Персональные счета клиентов. Все средства, полученные от клиента, попадают на Персональный счет клиента в интернет магазине Avtosklad.kz и могут быть использованы для работы с заказами.
                  <br /> <br />На текущий момент мы можем предложить Вам способы оплаты:
                  <b>Онлайн оплата через Казкоммерцбанк</b>
               </p>

               <div className={classes.payment_choise}>
                  <div className={classes.payment_card}>
                     <img src="image/payment/visa.png" alt="visa" />
                  </div>
                  <div className={classes.payment_card}>
                     <img src="image/payment/mastercard.png" alt="mastercard" />
                  </div>
               </div>

               <div className={classes.payment_inner}>
                  <div className={classes.payment_cash}>
                     <h4>Безналичная оплата</h4>
                     <p>Перечисление на расчетный счет ТОО "AVTOSKLAD.KZ"</p>
                  </div>

                  <div className={classes.payment_cash}>
                     <h4>Hаличная оплата</h4>
                     <p>Взнос наличными в одном из отделений AVTOSKLAD.KZ </p>
                  </div>
               </div>

               <div className={classes.payment_secure}>
                  <h2>Безопастность онлайн платежей</h2>
                  <p>Предоставляемая Вами персональная информация (имя, адрес, телефон, e-mail, номер кредитной карты) является конфиденциальной и не подлежит разглашению. Данные Вашей кредитной карты передаются только в зашифрованном виде непосредственно в процессинговый центр банка и не сохраняются на нашем Web-сервере.</p>
                  <p>При передаче информации используется специальные технологии безопасности карточных онлайн-платежей, обработка данных ведется на безопасном высокотехнологичном сервере процессинговой компании.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export { Payment }