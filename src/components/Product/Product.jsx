import React from 'react'
import cs from './Product.module.scss'

const Product = ({ item }) => {

   return (
      <div className={cs.root}>

         <div className={cs.product}>
            <div className={cs.image} style={{ backgroundImage: `url(${item.img})` }}></div>
            <div>
               <p>{item.title}</p>
            </div>
            <div className={cs.button}>
               <button > Добавить в корзину</button>
            </div>
         </div>

      </div >
   )
}

export default Product