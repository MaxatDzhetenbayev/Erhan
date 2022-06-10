import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import productSlice from './productSlice'

export default configureStore({
   reducer: {
      userSlice,
      productSlice
   },
})