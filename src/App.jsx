//import Productos from './components/Productos'
//import Footer from './components/front/Footer'
import React from 'react'
//import  NavBar  from './components/front/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/front/Home'
import { ItemListContainer } from './components/back/ItemListContainer'
import ItemDetailContainer from './components/back/ItemDetailsContainer'
import { CartProvider } from './CartProvider'
import { Cart } from './components/cart'
import { Pay } from './components/Pay'


function App() {
  return (
<div className='bg-[#FFFEFB] text-black '>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pay' element={<Pay />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </div>
    )
}
export default App
