import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classes from './Spares.module.scss'
import { setCurrentProduct } from '../../store/productSlice'


const Spares = ({ catalogList }) => {

   const navigate = useNavigate()
   const dispatch = useDispatch()
   const product = useSelector(state => state.productSlice.product)


   return (
      <div className={classes.wrapper}>
         {catalogList.map((list) => <div onClick={() => {
            product.forEach(el => {
               if (list.id == el.id) {
                  navigate(`/product/${list.id}`)
                  dispatch(setCurrentProduct(el))
               }
            });

         }} className={classes.item} key={list.id} style={{ backgroundImage: `url(${list.img})` }}><h3>{list.title}</h3></div>)}
      </div>
   )
}

export default Spares