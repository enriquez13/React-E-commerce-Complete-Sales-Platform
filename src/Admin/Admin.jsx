import React ,{useEffect, useState} from 'react'
import {getFirestore, doc, collection, getDoc} from 'firebase/firestore'
import Ordenes from './Ordenes';
import { Prouductos } from './Prouductos';

//function handleAction(event) {
  //console.log('Child did:', event.target.value);
//}

export const Admin = () => {
  const [data, setData] = useState({})
  useEffect(()=> {
    const querydb = getFirestore()
    const queryDoc = doc(querydb, 'compras', 'F1sMyMnRYPR8l67pW6nu')
    getDoc(queryDoc)
    .then(res => setData({id : res.id , ...res.data()}))
},[])
const [ordenes, setOrdenes] = useState('')
function handlechange(e){
  setOrdenes(e.target.value)
}

  return (
    <div className='md:flex md:h-screen w-full  bg-gray-100'>
        <div className=' mx-2 my-2 bg-black rounded-md md:w-1/6 text-white pt-[4rem]'>
        <button className='w-full px-2 pt-3  bg-black ' value='ordenes' onClick={handlechange}>
            Ordenes
        </button>
        <button className='w-full px-2 pt-5 ' value='productos' onClick={handlechange}>
            Clientes
        </button>
        <button className='w-full px-2 pt-5 ' value='productos' onClick={handlechange}>
            Productos
        </button>
        </div>


        <div className='w-full h-screen md:w-5/6 px-10 pt-[4rem] '>
          {ordenes==='ordenes'?<Ordenes data={data}/>:<Prouductos />}
          

        </div>
        
    </div>
  )
}
