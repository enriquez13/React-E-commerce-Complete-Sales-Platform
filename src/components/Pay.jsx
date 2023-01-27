import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../CartProvider'


export const Pay = () => {
    const {cart, totalPrice} = useCartContext()

const [envio, setEnvio]=useState('1') 

let descuento = totalPrice() >= 140000 ? -totalPrice()*0.2 : 0
let valorenvio = (totalPrice()>=140000? 0 :(envio==="1" ? 5000:10000))

let total = envio ? totalPrice() + descuento + valorenvio : ""



function onChangeValue(event) {
        setEnvio(event.target.value)
      }

const[pagonormal, setPagonormal]= useState('')
function onChangePagonormal(evento){
setPagonormal(evento.target.value)
}

    return (
        <>
        <h2 className='text-center text-2xl my-5 mb-10'>ZOROBABEL</h2>
        <div className='w-full grid grid-cols-2'>
        <NavLink to='/cart'><h3  className='col-start-1 col-span-1 text-center '>1. Carrito</h3></NavLink>
        <h3 className='col-start-2 col-span-1 text-center'>2. Compra</h3>
        <hr className='flex col-start-1 col-span-1 mt-1 ml-7 border-[1px] border-gray-300'/>
        <hr className='flex col-start-2 col-span-1 mt-1 mr-7 border-gray-500 border-[1px]'/>
        </div>

    <div className='mt-10'>
            <h3 className=" w-full mb-5 text-center text-2xl text-black">Facturación y envío</h3>
                <form className='mx-7 text-black md:w-1/2 '>
                    <label className='' >
                        Nombre y apellidos:
                        <input type="text" name="nombre" className='w-full mt-1 mb-3 bg-gray-100'/>
                    </label>
                    <label className='pt-5'>
                    Cédula: 
                        <input type='number' name="Cédula: " className='w-full mt-1 mb-3 bg-gray-100'/>
                    </label>
                    <label className='pt-2'>
                    Teléfono: 
                        <input type='number' name="Teléfono: " className='w-full mt-1 mb-3 bg-gray-100' />
                    </label>
                    <label className='pt-2'>
                    Ciudad o municipio:
                        <input type='text' name="Dirección completa: " className='w-full mt-1 mb-3 bg-gray-100' />
                    </label>
                    <label className='pt-2'>
                    Dirección:
                        <input type='text' name="Dirección completa: " className=' w-full mt-1 mb-3 bg-gray-100' />
                    </label>
                    <div className='flex items-center justify-center'>
                        <input className=' mt-5 bg-black text-white px-10 py-2 ' type="submit" value="Fenalizar pedido" />
                        </div>
                </form>

            <div className='mx-7 mt-5 mb-10 py-5 border border-gray-300 px-5 grid grid-cols-7 '>
                <h4 className='font-semibold col-start-1 col-span-7 mb-5'>Tu pedido</h4>
                <h5 className=' col-start-1 col-span-5 font-medium mb-2'>Producto</h5>
                <h5 className='col-start-6 col-span-2 font-medium mb-2 text-right'>Sub total</h5>
                {cart.map((itemcart) =>(
                    <>
                <h5 key={itemcart.id+itemcart.color} className=' col-start-1 col-span-5'>
                    {itemcart.category}{" "}{itemcart.nombre}{" "}{itemcart.talla} {" "}{itemcart.color}
                </h5>
                <h5 key={itemcart.id+itemcart.talla} className=' col-start-6 col-span-2 text-right'>{itemcart.valor}</h5>

                <hr className='col-start-1 col-span-7 border-gray-300 my-2'/>

               
                </>
                ))}
                
                <h5 className=' col-start-1 col-span-5'>Descuento</h5>
                <h5 className=' col-start-6 col-span-2 text-right'>{descuento}</h5>
                <h5 className=' col-start-1 col-span-5'>{envio==="1"? "Envío clásico":"Envío contraentrega"}</h5>
                <h5 className=' col-start-6 col-span-2 text-right'>
                    {valorenvio}
                </h5>

                <hr className='col-start-1 col-span-7 border border-gray-600 my-2'/>

                <h5 className=' col-start-1 col-span-5 font-medium'>Total</h5>
                <h5 className=' col-start-6 col-span-2 font-medium text-right'>{total}</h5>
                <h4 className='col-start-1 col-span-5 mt-5 font-medium'>Método de envío</h4>
                <div className='col-start-1 col-span-7 text-md' onChange={onChangeValue}>
                        <label className='mr-2'> Envío clásico
                        <input className='mx-1' type="radio" value="1" name="gender" defaultChecked={true}/> 
                        </label>
                        <label>Contraentrega
                        <input className='mx-1' type="radio" value="2" name="gender" /> 
                        </label>
                </div>
                {envio==="1"?
                <>
                <h4 className='col-start-1 col-span-5 mt-5 font-medium'>Tipo de pago</h4>
                <div className='col-start-1 col-span-7 text-md' //onChange={//onChangeValue}
                > 
                        <label className='mr-2'> Transferencia
                        <input className='mx-1' type="radio" value="transferencia" name="gender" onChange={onChangePagonormal}/> 
                        </label>
                        {pagonormal==="transferencia" ?
                        <p className='bg-[#EDEDED] p-2 my-2'>Realiza tu pago directamente en nuestra cuenta bancaria Bancolombia, nequi o daviplata <br/><br/>
                            Alejandro Enríquez<br/>
                            CC 1085277421<br/><br/>
                            Bancolombia ahorros: 261<br/>
                            Nequi: 3146556488<br/>
                            daviplata: 3146556488<br/><br/>
                            Una vez hecho el pago envíanos el comprobante a nuestro whatsapp 3146556488 junto con el número de orden. 
                        </p>
                        :""}
                     
                        <label className='block'>PSE o tarjeta de crédito
                        <input className='mx-1' type="radio" value="tarjetas" name="gender" /> 
                        </label>
                </div>
                </>
                :""}
            </div>
        </div>
        </>
    )
}
