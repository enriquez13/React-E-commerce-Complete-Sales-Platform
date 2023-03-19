import React,{lazy, Suspense} from 'react'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { CartProvider } from './CartProvider'
//import ItemListContainer  from './components/back/ItemListContainer'
//import ItemDetailContainer from './components/back/ItemDetailsContainer'
//import {Pay} from './components/Pay'
//import {Cart} from './components/Cart'
//import Admin from '../src/components/Sesiones/Admin/Admin'
//import Sesion  from './components/Sesiones/Sesion'
//import Proceso from './components/Page/Proceso'
//import Envios  from './components/Page/Envios'
//import Politicas  from './components/Page/Politicas'
//import Contactanos  from './components/Page/Contactanos'
//import Paytwo from './components/Paytwo'
//import Formulario from './components/Pay/Formulario'

import  Home from './components/front/Home'
const ItemListContainer = lazy(()=> import('./components/back/ItemListContainer'))
const ItemDetailContainer = lazy(()=> import('./components/back/ItemDetailsContainer'))
const Admin =lazy(()=> import('../src/components/Sesiones/Admin/Admin'))
const Sesion  =lazy(()=> import('./components/Sesiones/Sesion'))
const Proceso =lazy(()=> import('./components/Page/Proceso'))
const Envios = lazy(()=> import( './components/Page/Envios'))
const Politicas = lazy(()=> import('./components/Page/Politicas'))
const Contactanos = lazy(()=> import('./components/Page/Contactanos'))
const Paytwo =lazy(()=> import('./components/Paytwo'))

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
        <Suspense fallback={<h1>Cargando...</h1>}>
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/pay' element={<Paytwo />} />
            <Route path='/sesion' element={<Sesion />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/contactanos' element={<Contactanos />} />
            <Route path='/proceso' element={<Proceso />} />
            <Route path='/politicas' element={<Politicas />} />
            <Route path='/envios' element={<Envios />} />
          </Routes>
          </Suspense>
        </CartProvider>
    </Router>
    </div>
  )
}
export default App
