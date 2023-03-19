import React, { useState } from 'react'
import { FiPlus, FiMinus } from "react-icons/fi"

export const DetailInformation = () => {

    const [mostrarDescripcion, setMostrarDescripcion] = useState(false)
    const [mostrarFormasDePago, setMostrarFormasDePago] = useState(true)
    const [mostrarEnvios, setMostrarEnvios] = useState(false)
    const [mostrarGuiaTallas, setMostrarGuiaTallas] = useState(false)
    const [mostrarPreguntas, setMostrarPreguntas] = useState(false)
  return (
    <>
          <div className='grid grid-cols-4 mt-10 mb-4 content-center '
              onClick={() => setMostrarDescripcion(!mostrarDescripcion)}>
              <p className='col-start-1 col-span-3'>Descripción del producto</p>
              <h3 className='col-start-4 col-span-4 grid justify-items-end text-2xl pr-2 text-gray-600 '>
                  <button className='bg-black bg-opacity-5 p-1 rounded-full'>
                      {mostrarDescripcion ? <FiMinus /> : <FiPlus />}
                  </button>
              </h3>
              <div className={`product-description ${mostrarDescripcion ? "show-element" : ""} col-start-1 col-span-4 mt-4`}>
                  {mostrarDescripcion && (
                      <p>
                          El camibuso tipo polo es un producto de alta calidad debido a que está
                          elaborado en piqué de alta calidad lo cual garantiza comodidad, suavidad en la tela, agradable
                          a la vista, es semi stretch para mayor comodidad, no destiñe y tampoco se deforma después del
                          lavado en condiciones normales. Nuestra horma es la convencional o ideal (no es reducida ni tampoco
                          horma grande).
                      </p>
                  )}
              </div>
          </div>
          <hr />
          <div className='grid grid-cols-4 my-4 content-center '
              onClick={() => setMostrarFormasDePago(!mostrarFormasDePago)}>


              <p className='col-start-1 col-span-3'>Formas de pago</p>
              <h3 className='col-start-4 col-span-4 grid justify-items-end text-2xl pr-2 text-gray-600'>
                  <button className='bg-black bg-opacity-5 p-1 rounded-full'>
                      {mostrarFormasDePago ? <FiMinus /> : <FiPlus />}</button>
              </h3>
              <div className={`product-description  ${mostrarFormasDePago ? "show-element" : ""} col-start-1 col-span-4 mt-4`}>
                  {mostrarFormasDePago && <h3>Ofrecemos <span className='font-semibold'>servicio contraentrega</span>, es decir, pagas cuando el producto llegue
                      hasta tu casa o dirección señalada, también contamos con envío normal, es decir con pago anticipado y se puede
                      completar por medio de <span className='font-semibold'>tarjetas de crédito y débido</span>,  
                        <span className='font-semibold'> transferencia Bancolombia</span>, 
                      <span className='font-semibold'> pago por nequi o daviplata</span> </h3>}
              </div>
          </div>
          <hr />

          <div className='grid grid-cols-4 my-4 content-center '
              onClick={() => setMostrarEnvios(!mostrarEnvios)}>
              <p className='col-start-1 col-span-3'>Cambios y devoluciones</p>
              <h3 className='col-start-4 col-span-4 grid justify-items-end text-2xl pr-2 text-gray-600'>
                  <button className='bg-black bg-opacity-5 p-1 rounded-full'>
                      {mostrarEnvios ? <FiMinus /> : <FiPlus />}</button>
              </h3>
              <div className={`product-description ${mostrarEnvios ? "show-element " : ""}col-start-1 col-span-4 mt-4`}>
                  {mostrarEnvios && <h3>
                    En caso de recibir tu producto y querer una devolución o cambio puedes contactarnos vía whatsapp, llamada telefónica, instagram o facebook en un plazo 
                    máximo de 30 días, este proceso es fácil y rápido, puedes hacer cambios o devoluciones por talla o gusto sin costo adicional. 
                    Nosotros recogemos tu prenda y te entregamos la nueva en caso de un cambio. Para más información recuerda revisar nuestras política de cambios y devoluciones.
                  </h3>}
              </div>
          </div>

          <hr />
          <div className='grid grid-cols-4 my-4 content-center '
              onClick={() => setMostrarGuiaTallas(!mostrarGuiaTallas)}>
              <p className='col-start-1 col-span-3'>Guía de tallas</p>
              <h3 className='col-start-4 col-span-4 grid justify-items-end text-2xl pr-2 text-gray-600 '>
                  <button className='bg-black bg-opacity-5 p-1 rounded-full'>{mostrarGuiaTallas ? <FiMinus /> : <FiPlus />}</button>
              </h3>
              <div className={`product-description ${mostrarGuiaTallas ? "show-element c " : ""} col-start-1 col-span-4 mt-4`}>
                  {mostrarGuiaTallas && (
                    <>
                    <div className=' mb-4 grid justify-center'>
                        <img className='max-h-[8rem]' alt='Imagen para tomar medidas de la prenda'
                        src="data:image/png;base64,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" />
                    </div>
                    
                      <table className="table-auto w-full text-center ">
                          <thead className='bg-gray-100'>
                              <tr className='h-3 border border-blue-500'>
                                  <th className='border'>Talla</th>
                                  <th className='border'>pecho</th>
                                  <th className='border'>largo</th>
                              </tr>
                          </thead>

                          <tbody>
                              <tr>
                                  <td>S</td>
                                  <td>51 cm</td>
                                  <td>70 cm</td>
                              </tr>

                              <tr>
                                  <td>M</td>
                                  <td>54 cm</td>
                                  <td>71 cm</td>
                              </tr>
                              <tr>
                                  <td>L</td>
                                  <td>57 cm</td>
                                  <td>72 cm</td>
                              </tr>
                              <tr>
                                  <td>XL</td>
                                  <td>60 cm</td>
                                  <td>73 cm</td>
                              </tr>
                          </tbody>

                      </table>
                      </>)}

              </div>
          </div>

          <hr />


          <div className='grid grid-cols-4 my-4 content-center '
              onClick={() => setMostrarPreguntas(!mostrarPreguntas)}>
              <p className='col-start-1 col-span-3'>Preguntas frecuentes</p>
              <h3 className='col-start-4 col-span-4 grid justify-items-end text-2xl pr-2 text-gray-600'>
                  <button className='bg-black bg-opacity-5 p-1 rounded-full'>{mostrarPreguntas ? <FiMinus /> : <FiPlus />}</button>
              </h3>
              <div className={`product-description ${mostrarPreguntas ? "show-element" : ""} col-start-1 col-span-4 mt-4`}>
                  {mostrarPreguntas && (<div>
                      <h3 className='font-medium mt-2'>¿Cuánto tarda en llegar mi pedido? </h3>
                      <h3 className="mb-4">
                      A ciudades como Bogotá, Medellín, Popayán, Cali, etc, tarda entre 2-5 días hábiles, en otros municipios prinicpales entre 3-7 días hábiles, 
                      si te encuentras en un lugar de difícil acceso entre 7-14 días hábiles. Los envíos se hacen por medio de las transportadoras que utilizamos 
                      Servientrega, Coordinadora, interrapidisimo y en algunos caso por Envía.
                      </h3>
                      <span className='font-medium '>¿El envío es gratis? </span>
                      <h3 className="mb-4">
                          ¡Sí! Tenemos envío GRATIS por compras superiores a $149.900 a la mayorías de ciudades
                          y varios municipios. Por un costo adicional puedes obtener envío exprés en algunas ciudades.
                      </h3>
                      <span className='font-medium '>¿Cuidado de la prenda? </span>
                      <h3 className="mb-4">
                          El cuidado debe ser el de la mayoría de prendas textiles de diferentes marcas, las recomendaicones son:
                          No retorcer para un secado más rápido, se debe secar naturalmente en sombra, planchar a baja temperatura, no utilizar 
                          detergentes que puedan manchar o desteñir y no usar secadora.
                      </h3>

                      <h3 className='font-medium'>¿Tienen garantía?</h3>
                      <h3 className="mb-4">
                          Todos nuestros productos tienen una garantía de hasta 60 días, recuerda revisar nuestra política de cambios y devoluciones.
                      </h3>

                      <h3 className='font-medium'>¿Cómo sé cuál es mi talla?</h3>
                      <h3 className='mb-4'>
                          En cada producto encuentras una guía de tallas, en caso de tener dudas recuerda contactarnos y te daremos una asesoría personalizada.
                      </h3>

                  </div>)}

              </div>
          </div>
          <hr/>





    </>
  )
}
