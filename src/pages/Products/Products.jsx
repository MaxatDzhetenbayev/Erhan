import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../../components/Product/Product'
import cs from './Products.module.scss'

const Products = () => {


   const products = useSelector(state => state.productSlice.currentProduct)

   return (
      <div className={cs.root}>
         <div className='wrapper'>
            {
               products
                  ?
                  <div>
                     <h1 className={cs.title}>{products.title}</h1>
                     <div className={cs.products}>
                        {
                           products.items.map(product => <Product key={product.id} item={product} />)
                        }
                     </div>
                  </div>
                  :
                  <div className={cs.notProduct}>
                     <h1> Нет товаров</h1>
                  </div>
            }

         </div>
      </div>
   )
}

export default Products