import React  from 'react'


function Ordenes({ data }) {
 
    return (
        <>
            <h1 className='text-center mb-9 text-2xl'>Ordenes</h1>
            <section className='flex  mb-[3rem]'>
              <div className='w-1/4 py-2 pl-3 bg-gray-200 border border-bg-gray-300 '>Por preparar 1</div>
              <div className='w-1/4 py-2 pl-3 bg-gray-200 border border-bg-gray-300 mx-1'>En preparación 0</div>
              <div className='w-1/4 py-2 pl-3 bg-gray-200 border border-bg-gray-300 mr-1'>En tránsito 0</div>
              <div className='w-1/4 py-2 pl-3 bg-gray-200 border border-bg-gray-300 '> Entregado 0</div>
            </section>
            
            <table className="table-auto  w-full text-center border text-sm">
                              
                                  <thead className=''>
                                  <tr className='rounded-lg bg-gray-200 '>
                                    <th className='border'>Fecha</th>
                                    <th className='border'># orden</th>
                                    <th className='border'>Nombre</th>
                                    <th className='border'>Teléfono</th>
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
                                    <td className="px-3 py-3 border">{items?.cliente?.ciudad+ " " + items.cliente?.direccion }</td>
                                    <td className="px-3 py-3 border">#{console.log(items)}</td>
                                    <td className="px-3 py-3 border"> {items?.producto?.map((product, index)=>(
                                      <>
                                    <h3 key={index+"pro"} className='py-2'>{product?.Cantidad+" "+product?.Nombre+ " T: " + 
                                    product.Talla+ " "+product.Color +" $"+ product?.Precio}
                                    </h3>
                                    </>
                                    ))}
                                    </td>
                                    <td className="px-3 py-3 border">{items?.envio}</td>
                                    <td className="px-3 py-3 border">preparar</td>
                                    <td className="px-3 py-3 border">{items?.total}</td>
                                  </tr>
                                   ))}
                               
                                  </tbody>                  
            </table>  
        </>
    );
}
export default Ordenes