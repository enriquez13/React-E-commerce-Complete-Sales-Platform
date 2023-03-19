import React ,{useEffect, useState} from 'react'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import Ordenes from './Ordenes';
import { Prouductos } from './Prouductos';
import firebaseApp from '../../../firebase/config'
import { getAuth, signOut } from 'firebase/auth'
import { NavLink } from 'react-router-dom';
import { Clientes } from './Clientes';

const  auth = getAuth(firebaseApp)

const Admin = () => {
  const [data, setData] = useState({})
  const [productos, setProductos] = useState({})
  
  useEffect(()=> {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'compras')
    getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id:product.id, ...product.data()}))))
},[])
useEffect(()=> {
  const querydb = getFirestore()
  const queryCollection = collection(querydb, 'productos')
  getDocs(queryCollection)
          .then(res => setProductos(res.docs.map(product => ({id:product.id, ...product.data()}))))
},[])

const [contenido, setContenido] = useState(null);

function handlechangeOrdenes(){
  setContenido(<Ordenes data={data}/>)
}
function handlechangeProductos(){
  setContenido(<Prouductos productos={productos}/>)
}
function handlechangeClientes(){
  setContenido(<Clientes data={data}/>)
}

  return (
    
    <div className='md:flex h-screen w-full p-1'>

        <aside className='bg-black  w-full h-[50vh] md:h-screen rounded-md md:w-1/6 text-white '>
        <NavLink to='/'><button  className="w-full pt-14 text-blue-400 rounded-lg pb-2 px-4">Ir a la tienda</button></NavLink> 
        <button onClick={()=> signOut(auth)} className="w-full  text-blue-400 rounded-lg py-2 px-4">Cerrar sesión</button>
        <button className='w-full px-2 pt-6  bg-black ' value='ordenes' onClick={handlechangeOrdenes}>
            Ordenes
        </button>
        <button className='w-full px-2 pt-5 ' onClick={handlechangeClientes}>
            Clientes
        </button>
        <button className='w-full px-2 pt-5 ' onClick={handlechangeProductos}>
            Productos
        </button>
        </aside>


        <div className='w-full md:w-5/6 px-10 pt-[4rem] '>
          {contenido}
        </div>
        
    </div>
  )
}
export default Admin