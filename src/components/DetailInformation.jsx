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
                  {mostrarFormasDePago && <h3>Ofrecemos servicio contraentrega, es decir, pagas el total cuando te llegue
                      el producto hasta tu casa o dirección señalada, también contamos con pago directo
                      por medio de transferencia Bancolombia, pago por nequi o daviplata</h3>}
              </div>
          </div>
          <hr />

          <div className='grid grid-cols-4 my-4 content-center '
              onClick={() => setMostrarEnvios(!mostrarEnvios)}>
              <p className='col-start-1 col-span-3'>Envíos y devoluciones</p>
              <h3 className='col-start-4 col-span-4 grid justify-items-end text-2xl pr-2 text-gray-600'>
                  <button className='bg-black bg-opacity-5 p-1 rounded-full'>
                      {mostrarEnvios ? <FiMinus /> : <FiPlus />}</button>
              </h3>
              <div className={`product-description ${mostrarEnvios ? "show-element " : ""}col-start-1 col-span-4 mt-4`}>
                  {mostrarEnvios && <h3>Tenemos envíos a toda Colombia, utilizamos transportadoras como
                      Servientrega, Coordinadora, interrapidisimo y envía, el envío a ciudades como Popayán, Cali, Bogotá, Medellín, Bogotá
                      tarda entre 2-4 días hábiles, a otros lugares tarda entre 3-6 días hábiles</h3>}
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
                  {mostrarGuiaTallas &&
                      <table className="table-auto  w-full text-center border">
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
                  }

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
                          En Bogotá de 1 a 5 días hábiles, en ciudades principales de 5 a 7 días hábiles y en otros
                          lugares hasta 10 días hábiles.
                      </h3>
                      <span className='font-medium '>¿El envío es gratis? </span>
                      <h3 className="mb-4">
                          ¡Sí! Tenemos envío GRATIS por compras superiores a $149.900 a la mayorías de ciudades
                          y varios municipios. Por un costo adicional puedes obtener envío exprés en algunas ciudades.
                      </h3>
                      <span className='font-medium '>¿Cuidado de la prenda? </span>
                      <h3 className="mb-4">
                          El cuidado debe ser el de la mayoría de prendas textiles de diferentes marcas, las recomendaicones son:
                          No retorcer para un secado más rápido, se debe secar naturalmente en sombra, planchar a baja temperatura, no utilizar secadora.
                      </h3>
                      <h3 className='font-medium mt-4'>¿Y si no me queda o no me gustó?</h3>
                      <h3 className='mb-4'>
                          Puedes hacer cambios o devoluciones por talla o gusto sin costo adicional. Nosotros recogemos tu prenda
                          y te entregamos la nueva en caso de un cambio. Para solicitar un cambio o devolución debes utilizar
                          nuestro portal de cambios y devoluciones acá. Recuerda revisar nuestra política de cambios y devoluciones.
                      </h3>

                      <h3 className='font-medium'>¿Tienen garantía?</h3>
                      <h3 className="mb-4">
                          Todos nuestros productos tienen una garantía de hasta 365 días, recuerda revisar nuestra política de cambios y devoluciones.
                      </h3>

                      <h3 className='font-medium'>¿Cómo sé cuál es mi talla?</h3>
                      <h3 className='mb-4'>
                          En cada producto encuentras un calculador de talla que te recomienda basado en tu estatura, peso y preferencia de fit. También tienes una referencia con la estatura y talla del modelo. También puedes contactarnos y te daremos una asesoría personalizada sobre tu talla.
                      </h3>

                      <h3 className='font-medium'>¿Qué opciones de envío hay si quiero mi pedido pronto?</h3>
                      <h3 className="mb-4">
                          Podemos enviar terminal a terminal o servicio de envío rápido
                      </h3>
                      <h3 className='font-medium'>¿Qué opciones de pago manejan?</h3>
                      <h3 className="mb-4">
                          Puedes pagar con transferencia a Bancolombia, Nequi, Daviplata, pagos con tarjeta crédito, débito, pago contraentrega.

                      </h3>
                  </div>)}

              </div>
          </div>
          <hr/>





    </>
  )
}
