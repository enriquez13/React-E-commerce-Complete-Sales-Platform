import React, { useState } from 'react'
import CRUDProduct from './CRUDProduct';
//import { CRUDProducto } from './CRUDProducto'
//import {getFirestore, collection, getDocs} from 'firebase/firestore'
//import { CRUDProducto } from './CRUDProducto'


export const Prouductos = ({productos}) => {
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
                                    <th className='border'>ID Producto</th>
                                    <th className='border'>Nombre</th>
                                    <th className='border'>Talla</th>
                                    <th className='border'>Color</th>
                                    <th className='border'>Precio</th>
                                    <th className='border'>Stock</th>
                                  </tr>
                                </thead>
                                                        
                                <tbody className='mt-2 bg-white'>
                                {productos.map((product, index)=>(
                                   < >
                                   
                                   {product.sizes.map((producto, index)=>(
                                    <>
                                    {producto.colors.map((final, index)=>(
                                    <tr  className=''>
                                    <td className="px-3 py-3 border ">
                                      <img src={final.imagen} className="object-cover h-[4rem] w-[4rem]" />  </td>
                                    <td className="px-3 py-3 border"> {final.idepro}</td>
                                    <td className="px-3 py-3 border">{product.category}{" "}{product.nombre}</td>                                    
                                    <td className="px-3 py-3 border">{producto.size}</td>            
                                    <td className="px-3 py-3 border">{final.color}</td>
                                    <td className="px-3 py-3 border">{product.valor}</td>
                                    <td className="px-3 py-3 border">{final.stock}</td>
                                    </tr>
                                    ))}
                                    </>
                                   ))}
                                  
                                  </>
                                ))}
                                
                                  </tbody>                  
            </table>  
        </>
    );

       
        

}
