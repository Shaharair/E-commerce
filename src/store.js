import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Components/slice/ProductSlice'

export default configureStore({
  reducer: {
    product:ProductSlice
  },
})