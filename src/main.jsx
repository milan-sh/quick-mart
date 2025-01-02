import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import {Home, Product, Cart, Checkout} from "./pages/index.js"
import Layout from './components/Layout/Layout.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
