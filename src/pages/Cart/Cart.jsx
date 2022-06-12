import React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem/CartItem'
import { Context } from '../../Context/Context'
import cs from './Cart.module.scss'

const Cart = () => {

   const { productPrice } = useContext(Context)
   const currentUser = useSelector(state => state.userSlice.currentUser)

   const sendRequest = () => {
      currentUser.cart.splice(0, currentUser.cart.length)

   }

   return (
      <div className={cs.root}>
         <div className='wrapper'>
            <div className={cs.cart}>
               <h1>Корзина</h1>
               <div className={cs.cart_wrapper}>
                  {
                     productPrice
                        ?
                        currentUser.cart.map(elem => <CartItem key={elem.img} id={elem.id} title={elem.title} price={elem.price} img={elem.img} />)
                        :
                        <div className={cs.cart_inner}>
                           <h2>
                              Корзина пуста(
                           </h2>
                        </div>
                  }
               </div>
               <div className={cs.line}></div>
               <div className={cs.cart_bot}>
                  <div className={cs.price}>Общая цена: {productPrice}</div>
                  <button onClick={sendRequest}>КУПИТЬ</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cart