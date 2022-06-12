import React from 'react'
import cs from './CartItem.module.scss'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../store/userSlice'
import { Context } from '../../Context/Context'
import { useContext } from 'react'

const CartItem = ({ title, price, img, id }) => {

   const dispath = useDispatch()
   const { setCartCount, cartCount, setProductPrice, productPrice } = useContext(Context)


   const deleteItem = () => {
      dispath(deleteProduct({ id }))
      setCartCount(cartCount - 1)
      setProductPrice(productPrice - price)
   }

   return (
      <div className={cs.root} >
         <div className={cs.item}>
            <div className={cs.item_img} style={{ backgroundImage: `url(${img})` }}></div>
            <div className={cs.item_title}>
               <p>{title}</p>
            </div>
            <div className={cs.item_price}>{price}</div>
            <button className={cs.item_button} onClick={deleteItem}><FaTrashAlt /></button>
         </div>
      </div>
   )
}

export default CartItem