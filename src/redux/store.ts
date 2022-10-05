import { configureStore } from '@reduxjs/toolkit'
import pinSlice from './slices/pinSlice'

export default configureStore({
  reducer: {
    pinSlice,
  },
})