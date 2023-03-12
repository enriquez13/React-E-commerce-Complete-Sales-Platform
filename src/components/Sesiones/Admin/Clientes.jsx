import React from 'react'

export const Clientes = ({data}) => {
  return (
    
    <>
   <h1 className='text-center mb-9 text-2xl'>Clientes</h1>
    
    <table className="table-auto  w-full text-center border text-[0.6rem] md:text-base">         
                          <thead className=''>
                          <tr className='rounded-lg bg-gray-200 '>
                            <th className='border'>Fecha</th>
                            <th className='border'>Nombre</th>
                            <th className='border'>Teléfono</th>
                            <th className='border'>Ciudad</th>
                            <th className='border'>Dirección</th>
                          </tr>
                        </thead>
                        
                       
                        <tbody className='mt-2 bg-white'>
                        {data?.map((items, index)=>(
                          
                          <tr key={index}>
                            <td className="px-3 py-3 border">{items?.fecha}</td>             
                            <td className="px-3 py-3 border">{items?.cliente?.nombre}</td>
                            <td className="px-3 py-3 border">{items?.cliente?.telefono}</td>
                            <td className="px-3 py-3 border">{items?.cliente?.ciudad}</td>
                            <td className="px-3 py-3 border">{items.cliente?.direccion }</td>
                          </tr>
                           ))}
                       
                          </tbody>                  
    </table>  
   
</>
  )
}
