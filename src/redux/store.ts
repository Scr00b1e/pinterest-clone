import { configureStore } from '@reduxjs/toolkit'
import pinSlice from './slices/pinSlice'

export const store = configureStore({
  reducer: {
    pinSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;