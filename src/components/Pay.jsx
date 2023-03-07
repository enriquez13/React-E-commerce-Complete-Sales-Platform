import {addDoc, collection, getFirestore} from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../CartProvider'
import { useForm } from "react-hook-form"
import {Widget} from './Pay/Widget'
import { useEffect } from 'react'


const descuento = 0.8
const precioLimite = 149900

export const Pay = () => {
    const [variablePadre, setVariablePadre] = useState(null);
    const [data, setData] = useState({});
    function recibirVariable(variableHijo) {
        setVariablePadre(variableHijo);
      }
    const {cart, totalPrice} = useCartContext()

const [envioss, setEnvioss]= useState('clasico')
const {register, handleSubmit, formState: {errors}} = useForm({ defaultValues: { envio: "clasico" } })

useEffect(() => {
    console.log(data);
  }, [data]);

const onSubmit = data => {
    setEnvioss(data.envio)

    
const db = getFirestore();
    const orden = {
        cliente:{ 
            nombre: data.nombre,
            cedula: data.cedula,
            telefono : data.telefono,
            ciudad : data.ciudad,
            direccion: data.direccion,
        },
            producto: cart.map(product=> ({Id:product.id, Nombre: product.nombre, Talla: product.talla, Color: product.color, Precio: product.valor, Cantidad: product.quantity})),
            envio: data.envio,
            fecha: new Date().toLocaleString(),
            total: totalPrice(),
            }
            const ordersCollection = collection(db, 'compras')
            addDoc(ordersCollection, orden)
    .then(()=>{
        alert("Felicidades, tu compra fue exitosa")
        //setIsPaying(false)
    })
    .catch(error=>{
        console.error(error)
    })

}







const[opcionenvio,setOpcionenvio]= useState('clasico')
const[metodopago, setMetodopago]= useState('')
let descuentos = totalPrice() >= 140000 ? -totalPrice()*0.2 : 0
let valorenvio = (totalPrice()>=140000? 0 :(opcionenvio==="clasico" ? 5000 : 10000))
let total = opcionenvio ? totalPrice() + descuentos + valorenvio : ""

function onChangeValue(e){
    e.preventDefault()
setOpcionenvio(e.target.value)
}
function onChangepago(ev){
    ev.preventDefault()
setMetodopago(ev.target.value)
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

    <div className='my-10'>
            <h3 className=" w-full mb-5 text-center text-2xl text-black">Facturación y envío</h3>
                <form  onSubmit={handleSubmit(onSubmit)} className='mx-7 text-black md:w-1/2'>
                    <label className='' >
                        Nombre y apellidos:
                        <input {...register("nombre", {
                            required: "Falta escribir el nombre",
                            minLength:{
                                value:4,
                                message: "Mínimo 4 letras"
                            }
                        })}
                        type="text"  className='w-full mt-1 mb-3 bg-gray-100'/>
                    </label>
                    <p className='text-red-400'>{errors.nombre?.message}</p>
                    <label className='pt-5'>
                    Cédula: 
                    <input {...register("cedula",{
                            required: "Falta escribir la cédula",
                            minLength:{
                                value:4,
                                message: "debe escribir la cédula completa"
                            }
                        })}
                        type='number'  className='w-full mt-1 mb-3 bg-gray-100' />
                    </label>
                    <label className='pt-2'>
                    Teléfono: 
                    <input {...register("telefono",{
                            required: "Falta escribir el teléfono",
                            minLength:{
                                value:4,
                                message: "digite su número de teléfono"
                            }
                        })}
                        type='number'  className='w-full mt-1 mb-3 bg-gray-100' />
                    </label>
                    <label className='pt-2'>
                    Ciudad o municipio:
                        <input {...register("ciudad",{
                            required: "Falta escribir la Ciudad o Municipio",
                            minLength:{
                                value:3,
                                message: "Escribir la ciudad o municipio"
                            }
                        })}
                        type='text'  className='w-full mt-1 mb-3 bg-gray-100' />
                    </label>
                    <label className='pt-2'>
                    Dirección:
                    <input {...register("direccion",{
                            required: "Falta escribir la dirección",
                            minLength:{
                                value:6,
                                message: "Digite la dirección completa"
                            }
                        })}
                        type='text'  className='w-full mt-1 mb-3 bg-gray-100' />
                    </label>

                <div className=' mt-5  py-5 border border-gray-300 px-5 grid grid-cols-7 '>
                <h4 className='font-semibold col-start-1 col-span-7 mb-5'>Tu pedido</h4>
                <h5 className=' col-start-1 col-span-5 font-medium mb-2'>Producto</h5>
                <h5 className='col-start-6 col-span-2 font-medium mb-2 text-right'>Sub total</h5>
                {cart.map((itemcart) =>(
                    <>
                <h5 key={itemcart.id+itemcart.color} className=' col-start-1 col-span-5'>
                 <span className='text-blue-500 font-bold'>{itemcart.quantity}{" "}</span>
                 { itemcart.category}{" "}{itemcart.nombre}{" talla "}{itemcart.talla} {" color "}{itemcart.color} 
                </h5>
                <div key={itemcart.id+itemcart.talla} className=' col-start-6 col-span-2 text-right text-blue-500'>
                <span className={`${totalPrice()>=precioLimite ? 'line-through text-amber-500' :"text-blue-500"} `}>{itemcart.valor}</span>
                                            { totalPrice() >= precioLimite ? <h4 className='text-blue-500'>{itemcart.valor*descuento}</h4> : " "}
                </div>

                <hr className='col-start-1 col-span-7 border-gray-300 my-2'/>

                </>
                ))}
                
                
                <h5 className=' col-start-1 col-span-5'>{opcionenvio==="clasico"? "Envío clásico":"Envío contraentrega"}</h5>
                <h5 className=' col-start-6 col-span-2 text-right'>
                    {valorenvio}
                </h5>

                <hr className='col-start-1 col-span-7 border border-gray-600 my-2'/>

                <h5 className=' col-start-1 col-span-5 font-medium'>Total</h5>
                
                <div className=' col-start-6 col-span-2 font-medium text-right'>
                <span className={`${totalPrice()>=precioLimite ? 'line-through text-amber-500' :"text-blue-500"} `}>{total}</span>
                            {totalPrice()>=precioLimite ?<h4 className='text-blue-500'>{total}</h4>:""}
                </div >
                
                <h4 className='col-start-1 col-span-5 mt-5 font-medium'>Método de envío</h4>
                

                <div className='col-start-1 col-span-7 text-md'  >
                        <label > Envío clásico
                        <input className='mx-2 mt-4' value='clasico'  
                        type="radio" {...register("envio")} onChange={onChangeValue}/>
                        </label>
                        <label className='pl-6'>Contraentrega
                        <input className='mx-2 mt-4 accent-blue-500' value='contraentrega'  
                        type="radio" {...register("envio")} onChange={onChangeValue}/>
                        </label>
                </div>
                {opcionenvio==="clasico" ?
                <>
                <h4 className='col-start-1 col-span-5 mt-5 font-medium'>Tipo de pago</h4>
                <div className='col-start-1 col-span-7 text-md' //onChange={onChangeValue}
                > 
                        
                        <label className='block'>PSE, T.Crédito, Nequi, Bancolombia
                        <input className='mx-2 mt-4' type="radio" value="tarjetas" name="gender" onClick={onChangepago}/> 
                        </label>
                        <label > Transferencia, Nequi o Daviplata
                        <input className='mx-2 mt-4' type="radio" value="transferencia" name="gender" onClick={onChangepago}  /> 
                        </label>
                        {metodopago==="transferencia" ?
                        <p className='bg-[#EDEDED] p-2 my-2'>Realiza tu pago directamente en nuestra cuenta bancaria Bancolombia, nequi o daviplata <br/><br/>
                            Alejandro Enríquez<br/>
                            CC 1085277421<br/><br/>
                            Bancolombia ahorros: 261<br/>
                            Nequi: 3146556488<br/>
                            daviplata: 3146556488<br/><br/>
                            Una vez hecho el pago envíanos el comprobante a nuestro whatsapp 3146556488 junto con el número de orden. 
                        </p>
                        :""}
                     
                        
                </div>
                </>
                :""}
            </div>
                    <div className='flex items-center justify-center'>
                        {opcionenvio==="contraentrega" ? (<input className='rounded-lg mt-5 bg-black text-white px-10 py-2 ' 
                        type="submit" value="Fenalizar y Pagar en casa" /> )
                        : (metodopago==="tarjetas" 
                        ? <>
                        <Widget enviarVariable={recibirVariable}/>
                       </>
                      
                      :"")}
                        
                    </div>
                </form>
              {console.log("Resultado:",variablePadre)}
        </div>

       
        </>
    )
}
