import React  from 'react'


function Ordenes({ data }) {
    return (
        <>
            <h1 className='text-center mb-9 text-2xl'>Ordenes</h1>
            
            <table className="table-auto  w-full text-center border">
                                <thead className='bg-gray-50'>
                                  <tr>
                                    <th className='border'>Fecha</th>
                                    <th className='border'># orden</th>
                                    <th className='border'>Nombre</th>
                                    <th className='border'>Teléfono</th>
                                    <th className='border'>Dirección</th>
                                    <th className='border'>ID Producto</th>
                                    <th className='border'>Cantidad</th>
                                    <th className='border'>Producto</th>
                                    <th className='border'>Talla</th>
                                    <th className='border'>Color</th>
                                    <th className='border'>Precio</th>
                                    <th className='border'>Envio</th>
                                    <th className='border'>Total</th>
                                  </tr>
                                </thead>
                               
                                <tbody>
                                {data.producto?.map((items, index)=>(
                                  <tr key={index}>
                                    <td className="px-3 py-3 border">{data.cliente?.nombre}</td>
                                    <td className="px-3 py-3 border">{console.log(data.fecha?.seconds)}</td>
                                    <td className="px-3 py-3 border">#</td>
                                    <td className="px-3 py-3 border">{data.cliente?.telefono}</td>
                                    <td className="px-3 py-3 border">{data.cliente?.ciudad}</td>
                                    <td className="px-3 py-3 border">{items.Id}</td>
                                    <td className="px-3 py-3 border">{items.Cantidad}</td>
                                    <td className="px-3 py-3 border">{items.Nombre}</td>
                                    <td className="px-3 py-3 border">{items.Talla}</td>
                                    <td className="px-3 py-3 border">{items.Color}</td>
                                    <td className="px-3 py-3 border">{items.Precio}</td>
                                    <td className="px-3 py-3 border">{data.envio}</td>
                                    <td className="px-3 py-3 border">{data.total}</td>
                                  </tr>
                                   ))}
                                  
                                </tbody>
                         
                              </table>  
        </>
    );
}
export default Ordenes