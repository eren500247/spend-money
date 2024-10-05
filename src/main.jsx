import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import allSlice from './store/allSlice.js'
import { Provider } from 'react-redux'
import cartSlice from './store/cartSlice.js'

const store = configureStore({
  reducer : {
    allSlice : allSlice,
    cartSlice : cartSlice
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
