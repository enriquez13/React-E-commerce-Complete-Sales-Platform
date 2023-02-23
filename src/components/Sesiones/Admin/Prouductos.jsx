import React, { useState } from 'react'
import CRUDProduct from './CRUDProduct';
//import { CRUDProducto } from './CRUDProducto'
//import {getFirestore, collection, getDocs} from 'firebase/firestore'
//import { CRUDProducto } from './CRUDProducto'


export const Prouductos = ({data}) => {
const[crear, setCrear]=useState(false)
    return(
        <>
        <div className='ml-5 mt-3 text-2xl text-center'>Productos</div>
        <div className='flex items-center justify-center'>
        <button className='rounded-lg mt-5 bg-black text-white px-10 py-2 mr-1 my-6' value="crear"
        onClick={()=>setCrear(true)}>Crear productos</button>
       
        </div>
        {crear===true ? <CRUDProduct />: ""}

            <table className="table-auto  w-full text-center border text-sm">
                              
                                  <thead className=''>
                                  <tr className='rounded-lg bg-gray-200 '>
                                  <th className='border'>Imagen</th>
                                    <th className='border'>Nombre</th>
                                    <th className='border'>ID Producto</th>
                                    <th className='border'>Precio</th>
                                    <th className='border'>Stock</th>
                                  </tr>
                                </thead>
                                      //{console.log(data)}                       
                                <tbody className='mt-2 bg-white'>
                                
                                  <tr >
                                    <td className="px-3 py-3 border">img</td>
                                    <td className="px-3 py-3 border">#</td>
                                    <td className="px-3 py-3 border"> nombre</td>
                                    <td className="px-3 py-3 border">precio</td>
                                    <td className="px-3 py-3 border">stock</td>
                                  </tr>
                               
                               
                                  </tbody>                  
            </table>  
        </>
    );

       
        

}
