import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import storeReducer  from '../slices/storeslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    store: storeReducer,
  },
})