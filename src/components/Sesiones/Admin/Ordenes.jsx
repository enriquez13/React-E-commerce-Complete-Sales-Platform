import React, { useEffect, useState }  from 'react'

const envio ={
  option1:"Envío normal",
  option2:"Contraentrega"
}
 

function Ordenes( {data} ) {
  // Organizar por fecha
  data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
 
    return (
        <> 
            <h1 className='text-center mb-9 text-2xl'>Ordenes</h1>
            <section className='md:flex mb-[3rem]'>
              <div className='my-1 md:w-1/4 py-2 pl-3 bg-gray-200 border-r-4 rounded-r-lg border-gray-300 '>Por preparar 1</div>
              <div className='my-1 md:w-1/4 py-2 pl-3 bg-gray-200 border-r-4 rounded-r-lg border-gray-300'>En preparación 0</div>
              <div className='my-1 md:w-1/4 py-2 pl-3 bg-gray-200 border-r-4 rounded-r-lg border-gray-300'>En tránsito 0</div>
              <div className='my-1 md:w-1/4 py-2 pl-3 bg-gray-200 border-r-4 rounded-r-lg border-gray-300 '> Entregado 0</div>
            </section>
            <div className='overflow-x-auto pb-5'>
            <table className="table-auto overflow-x-auto w-full text-center border text-[0.6rem] md:text-base">         
                                  <thead className=''>
                                  <tr className='rounded-lg bg-gray-200 '>
                                    <th className='border'>Fecha</th>
                                    <th className='border'># orden</th>
                                    <th className='border'>Nombre</th>
                                    <th className='border'>Teléfono</th>
                                    <th className='border'>Ciudad</th>
                                    <th className='border'>Dirección</th>
                                    <th className='border'>ID Producto</th>
                                    <th className='border'>Cantidad Producto Talla Color Precio</th>
                                    <th className='border'>Envio</th>
                                    <th className='border'>Estado</th>
                                    <th className='border'>Total</th>
                                  </tr>
                                </thead>
                                
                               
                                <tbody className='mt-2 bg-white'>
                                {data?.map((items, index)=>(
                                  
                                  <tr key={index}>
                                    <td className="px-3 py-3 border">{items?.fecha}</td>
                                    <td className="px-3 py-3 border"># </td>
                                    <td className="px-3 py-3 border">{items?.cliente?.nombre}</td>
                                    <td className="px-3 py-3 border">{items?.cliente?.telefono}</td>
                                    <td className="px-3 py-3 border">{items?.cliente?.ciudad}</td>
                                    <td className="px-3 py-3 border">{items?.cliente?.direccion }</td>
                                    <td className="px-3 py-3 border">{"ID"}</td>
                                    <td className="px-3 py-3 border"> {items?.producto?.map((product, index)=>(
                                      <>
                                    <h3 key={index+"pro"} className='py-2'>{product?.Cantidad+" "+product?.Nombre+ " T: " + 
                                    product.Talla+ " "+product.Color +" $"+ product?.Precio}
                                    </h3>
                                    </>
                                    ))}
                                    </td>
                                    <td className="px-3 py-3 border">{envio[items?.envio]}</td>
                                    <td className="px-3 py-3 border">preparar</td>
                                    <td className="px-3 py-3 border">{items?.total}</td>
                                  </tr>
                                   ))}
                               
                                  </tbody>                  
            </table>  
            </div>
           
           
        </>
    );
}
export default Ordenes