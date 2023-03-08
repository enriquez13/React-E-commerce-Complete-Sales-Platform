import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { NavLink } from 'react-router-dom';

const descuento = 0.4


export const Paytwo = () => {
  const [envio,setEnvio]=useState("")
  const [openCheckout, setOpenCheckout] = useState(false);
  //const [datos, setDatos] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      apellido: '',
      cedula: '',
      telefono: '',
      ciudad: '',
      direccion: '',
      option: '',
    },
    criteriaMode: 'all',
  });

  const handleCheckout = async (data) => {
    const reference = uuidv4(); //Referencia única

    setOpenCheckout(true);
    var checkout = new WidgetCheckout({
      currency: 'COP',
      amountInCents: 2490000,
      reference: reference,
      publicKey: 'pub_test_wnCSRp1S2oerlMK4i0no1sEoPrLIvC05',
      //redirectUrl: 'https://transaction-redirect.wompi.co/check', // Opcional
      taxInCents: { // Opcional
        vat: 1900,
        consumption: 800,
      },
      customerData: { // Opcional
        email:'lola@gmail.com',
        fullName: data.name,
        phoneNumber: data.telefono,
        phoneNumberPrefix: '+57',
        legalId: data.cedula,
        legalIdType: 'CC',
      },
      shippingAddress: { // Opcional
        addressLine1: data.direccion,
        city: data.ciudad,
        phoneNumber: '3019444444',
        region: "Cundinamarca",
        country: "CO",
      }
    })
    
    checkout.open(function ( result ) {
      var transaction = result.transaction
      console.log('Transaction ID: ', transaction.id)
      console.log('Transaction object: ', transaction)
      console.log('Transaction object: ', data)
      console.log("Status : ", transaction.status)
      //Subir datos a firebase
      if(transaction.status==="APPROVED"){
      const db = getFirestore();
    let orden = {
        cliente:{ 
            nombre: data.name,
            apellido: data.apellido,
            cedula: data.cedula,
            telefono : data.telefono,
            ciudad : data.ciudad,
            direccion: data.direccion,
        },
            //producto: cart.map(product=> ({Id:product.id, Nombre: product.nombre, Talla: product.talla, Color: product.color, Precio: product.valor, Cantidad: product.quantity})),
            envio: data.option,
            fecha: new Date().toLocaleString(),
            //total: totalPrice(),
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
  })
  }

  const onSubmit = async (data) => {
    setEnvio(data.option)
    if (data.option === 'option1') {

      {console.log("selección 1")}
      const db = getFirestore();
    let orden = {
        cliente:{ 
            nombre: data.name,
            apellido: data.apellido,
            cedula: data.cedula,
            telefono : data.telefono,
            ciudad : data.ciudad,
            direccion: data.direccion,
        },
            //producto: cart.map(product=> ({Id:product.id, Nombre: product.nombre, Talla: product.talla, Color: product.color, Precio: product.valor, Cantidad: product.quantity})),
            envio: data.option,
            fecha: new Date().toLocaleString(),
            //total: totalPrice(),
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
    } else if (data.option === 'option2') {
      //setDatos(data)
      console.log("datos : ",data.name)
      handleCheckout(data);

    }
    
  };

  return (
    <><NavLink to='/home'><h2 className='text-center text-2xl my-5 mb-10'>ZOROBABEL</h2></NavLink>
    <div className='w-full grid grid-cols-2'>
    <NavLink to='/cart'><h3  className='col-start-1 col-span-1 text-center '>1. Carrito</h3></NavLink>
    <h3 className='col-start-2 col-span-1 text-center'>2. Compra</h3>
    <hr className='flex col-start-1 col-span-1 mt-1 ml-7 border-[1px] border-gray-300'/>
    <hr className='flex col-start-2 col-span-1 mt-1 mr-7 border-gray-500 border-[1px]'/>
    </div>
    <div className='my-10'>
    <h3 className=" w-full mb-5 text-center text-2xl text-black">Facturación y envío</h3>
    <form onSubmit={handleSubmit(onSubmit)} className='mx-7 text-black md:w-1/2'>
      <label htmlFor="name">Nombres:</label>
      <input id="name" type="text" {...register('name', { required: true, minLength: 4, pattern: /^[a-zA-ZáéíóúñÁÉÍÓÚ\s]+$/  })} 
      className='w-full mt-1 bg-gray-100'/>
      <div className='text-red-400 mb-3'>{errors.name && errors.name.type === 'required' && <p>Falta escribir el nombre</p>}
      {errors.name && errors.name.type === 'minLength' && <p>El nombre debe tener al menos 4 caracteres</p>}
      {errors.name && errors.name.type === 'pattern' && <p>El nombre no puede contener símbolos</p>}
      </div>
      <label htmlFor="apellido">Apellidos:</label>
      <input id="apellido" type="text" {...register('apellido', { required: true, minLength: 4, pattern: /^[a-zA-ZáéíóúñÁÉÍÓÚ\s]+$/  })} 
      className='w-full mt-1  bg-gray-100'/>
      <div className='text-red-400 mb-3'>{errors.apellido && errors.apellido.type === 'required' && <p>Falta escribir el apellido</p>}
      {errors.apellido && errors.apellido.type === 'minLength' && <p>El apellido debe tener al menos 4 caracteres</p>}
      {errors.apellido && errors.apellido.type === 'pattern' && <p>El apellido no puede contener símbolos</p>}
      </div>
      <label htmlFor="cedula">Cédula:</label>
      <input id="cedula" type="text" {...register('cedula', { required: true, minLength: 4, pattern: /^[a-zA-ZáéíóúñÁÉÍÓÚ0-9#./\s]+$/  })} 
      className='w-full mt-1  bg-gray-100'/>
      <div className='text-red-400 mb-3'>{errors.cedula && errors.cedula.type === 'required' && <p>Falta escribir el número de cédula o pasaporte</p>}
      {errors.cedula && errors.cedula.type === 'minLength' && <p>La cédula debe tener al menos 4 caracteres</p>}
      {errors.cedula && errors.cedula.type === 'pattern' && <p>La cédula no puede contener símbolos</p>}
      </div>
      <label htmlFor="telefono">Teléfono:</label>
      <input id="telefono" type="number" {...register('telefono', { required: true, minLength: 4, pattern: /^[0-9#.\s]+$/  })} 
      className='w-full mt-1 bg-gray-100'/>
      <div className='text-red-400 mb-3'>{errors.telefono && errors.telefono.type === 'required' && <p>Falta escribir el teléfono</p>}
      {errors.telefono && errors.telefono.type === 'minLength' && <p>El teléfono debe tener al menos 7 números</p>}
      {errors.telefono && errors.telefono.type === 'pattern' && <p>El teléfono no puede contener símbolos</p>}
      </div>
      <label htmlFor="ciudad">Ciudad o municipio:</label>
      <input id="ciudad" type="text" {...register('ciudad', { required: true, minLength: 4, pattern: /^[a-zA-ZáéíóúñÁÉÍÓÚ\s]+$/  })} 
      className='w-full mt-1 bg-gray-100'/>
      <div className='text-red-400 mb-3'>{errors.ciudad && errors.ciudad.type === 'required' && <p>Falta escribir la ciudad o municipio</p>}
      {errors.ciudad && errors.ciudad.type === 'minLength' && <p>La ciudad o municipio deben tener al menos 4 caracteres</p>}
      {errors.ciudad && errors.ciudad.type === 'pattern' && <p>La ciudad o municipio no puede contener símbolos</p>}
      </div>
      <label htmlFor="direccion">Dirección:</label>
      <input id="direccion" type="text" {...register('direccion', { required: true, minLength: 4, pattern: /^[a-zA-ZáéíóúñÁÉÍÓÚ0-9#./\s]+$/  })} 
      className='w-full mt-1 bg-gray-100'/>
      <div className='text-red-400 mb-3'>{errors.ciudad && errors.direccion.type === 'required' && <p>Falta escribir la dirección</p>}
      {errors.direccion && errors.direccion.type === 'minLength' && <p>La Dirección debe tener al menos 4 caracteres</p>}
      {errors.direccion && errors.direccion.type === 'pattern' && <p>La Dirección no puede contener símbolos</p>}
      </div>

      <div>
        <label htmlFor="option1" className='pr-1'>Contraentrega:</label>
        <input id="option1" type="radio" value="option1" {...register('option', { required: true })} />
        <label htmlFor="option2" className='ml-4 pr-1'>Envío normal:</label>
        <input id="option2" type="radio" value="option2" {...register('option', { required: true })} />
        {errors.option && errors.option.type === 'required' && <p className='text-red-400'>Seleccion una opción de envío</p>}
      </div>
      <div className='flex items-center justify-center'>
      <button type="submit" className="rounded-lg mt-5 bg-black text-white px-10 py-2">
      Finalizar
      </button>
      </div>
    </form>
    </div>
    </>
  );
};

