import React from 'react'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/front/Home'
import { ItemListContainer } from './components/back/ItemListContainer'
import ItemDetailContainer from './components/back/ItemDetailsContainer'
import { CartProvider } from './CartProvider'
import {Pay} from './components/Pay'
import {Cart} from './components/Cart'
import {Admin} from '../src/components/Sesiones/Admin/Admin'
import { Sesion } from './components/Sesiones/Sesion'
import { useLocation } from 'react-router-dom';
import Event from './components/Event'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  return (
    <div className='bg-[#FFFEFB] text-black '>
    <Router>
      <ScrollToTop />
        <CartProvider>
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pay' element={<Pay />} />
            <Route path='/sesion' element={<Sesion />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/event' element={<Event />} />
          </Routes>
        </CartProvider>
    </Router>
    </div>
  )
}
export default App
