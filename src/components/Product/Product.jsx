import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import cs from './Product.module.scss'
import { Context } from '../../Context/Context'
import { addUserProduct } from '../../store/userSlice'

const Product = ({ item }) => {

   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { isAuth, setCartCount, cartCount, setProductPrice, productPrice } = useContext(Context)

   const addProduct = ({ id, title, img, price }) => {
      if (isAuth) {
         dispatch(addUserProduct({ id, title, img, price }))
         setCartCount(cartCount + 1)
         setProductPrice(productPrice + Number(price))
      } else {
         alert('Вы не зарегестрированы')
         navigate('/regestration')
      }
   }




   return (
      <div className={cs.root}>

         <div className={cs.product}>
            <div className={cs.image} style={{ backgroundImage: `url(${item.img})` }}></div>
            <div>
               <p>{item.title}</p>
            </div>
            <div className={cs.button}>
               <button onClick={() => addProduct({ id: item.id, title: item.title, img: item.img, price: item.price })} > Добавить в корзину</button>
            </div>
         </div>

      </div >
   )
}

export default Product