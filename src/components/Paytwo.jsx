import React, { useContext } from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../CartProvider';

const envio ={ //Convertir tipo de envío
  option1:"Envío normal",
  option2:"Contraentrega"
}
export const Paytwo = () => {
  const {cart, totalPrice, valorEnvio, total} = useCartContext()
  const [envio,setEnvio]=useState("")
  const [openCheckout, setOpenCheckout] = useState(false);

  //const [datos, setDatos] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
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
      amountInCents: total()*100,
      reference: reference,
      publicKey: 'pub_test_wnCSRp1S2oerlMK4i0no1sEoPrLIvC05',
      //redirectUrl: 'https://transaction-redirect.wompi.co/check', // Opcional
      //taxInCents: { // Opcional
      //  vat: 1900,
      //  consumption: 800,
      //},
      customerData: { // Opcional
        email:data.email,
        fullName: data.name,
        phoneNumber: data.telefono,
        phoneNumberPrefix: '+57',
        legalId: data.cedula,
        legalIdType: 'CC',
      },
      shippingAddress: { // Opcional
        addressLine1: data.direccion,
        city: data.ciudad,
        phoneNumber: data.telefono,
        region: "Departamento",
        country: "CO",
      }
    })
    
    checkout.open(function ( result ) {
      var transaction = result.transaction
      console.log("transaction", transaction)
      console.log('Transaction ID: ', transaction.id)
      console.log('Transaction object: ', transaction)
      console.log('Transaction object: ', data)
      console.log("Status : ", transaction.status)
      //Subir datos a firebase
      if(transaction.status==="APPROVED"){
      const db = getFirestore();
    let orden = {
        cliente:{ 
            email: data.email,
            nombre: data.name,
            apellido: data.apellido,
            cedula: data.cedula,
            telefono : data.telefono,
            ciudad : data.ciudad,
            direccion: data.direccion,
        },
            producto: cart.map(product=> ({Ide:product.ide, Id:product.id, Nombre: product.nombre, Talla: product.talla, Color: product.color, Precio: product.valor, Cantidad: product.quantity})),
            envio: data.option,
            fecha: new Date().toISOString(),
            valorenvio: valorEnvio(),
            total: total(),
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
      //contraentrega
      const db = getFirestore();
    let orden = {
        cliente:{ 
            email: data.email,
            nombre: data.name,
            apellido: data.apellido,
            cedula: data.cedula,
            telefono : data.telefono,
            ciudad : data.ciudad,
            direccion: data.direccion,
        },
            producto: cart.map(product=> ({Ide:product.ide, Id:product.id, Nombre: product.nombre, Talla: product.talla, Color: product.color, Precio: product.valor, Cantidad: product.quantity})),
            envio: data.option,
            valorenvio: valorEnvio(),
            fecha: new Date().toISOString(),
            total: total(),
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
      //Envío normal
      //setDatos(data)
      console.log("datos : ",data.name)
      handleCheckout(data);

    }
    
  };

  return (
    <>
    <NavLink to='/home'><h2 className='text-center text-2xl my-5 mb-10 font-semibold'>ZOROBABEL</h2></NavLink>
    <div className='w-full grid grid-cols-2'>
    <NavLink to='/home'><h3  className='col-start-1 col-span-1 text-center '>1. Carrito</h3></NavLink>
    <h3 className='col-start-2 col-span-1 text-center'>2. Compra</h3>
    <hr className='flex col-start-1 col-span-1 mt-1 ml-7 border-[1px] border-gray-300'/>
    <hr className='flex col-start-2 col-span-1 mt-1 mr-7 border-gray-500 border-[1px]'/>
    </div>
    <div className='my-10'>
    <h3 className=" w-full mb-5 text-center text-2xl text-black">Facturación y envío</h3>
    
    <form onSubmit={handleSubmit(onSubmit)} className='mx-7 text-black md:w-1/2'>
  
      {cart.map((items, index)=>(
        <>
      <div key={index} className=' grid grid-cols-6 gap-1 items-center pb-1'>
        <div className='col-span-1 h-[4rem] md:w-[5.5rem] md:h-[5.5rem]'><img src={items.img} className="object-cover h-full w-full "/></div>
        <div className='col-span-4 text-sm pl-1'>{items.category+" "+items.nombre+" "+items.talla+" "+items.color}</div>
        <div className='col-span-1 text-sm'>{index === 0 ? cart[index].valor : index === 1 ? cart[index].valor * 0.8 : cart[index].valor * 0.6}
       </div>
      </div>
      </>
      ))}
      <hr  className='mt-2'/>
          <div className=' grid grid-cols-6 gap-1 my-2'>
            <div className='col-span-5 font-semibold'> Total parcial</div>
            <div className='col-span-1'> {totalPrice()}</div>
<h3 className='col-span-6 text-center py-2'>Elija el tipo de envío:</h3>
            <div className='col-span-5'>
              <label htmlFor="option2" className=' pr-1 text-blue-700'>Envío normal</label>
              <input id="option2" type="radio" className='w-4 h-4 '
              value="option2" {...register('option', { required: true })} />
              <label htmlFor="option1" className='ml-4 pr-1 text-blue-700'>Contraentrega</label>
              <input id="option1" type="radio" className='w-4 h-4  ' value="option1" {...register('option', { required: true })} />
              {errors.option && errors.option.type === 'required' && <p className='text-red-400'>Seleccion una opción de envío</p>}
            </div>
            <div className='col-span-1'>{valorEnvio()}</div>
            <hr  className='mt-2 col-span-6'/>
            <div className='col-span-5 text-lg font-semibold'> Total</div>
            <div className='col-span-1 text-lg font-semibold'> {total()}</div>
          </div>
          <h3 className='text-center text-2xl my-7 '>Datos para envío</h3>

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" {...register('email', { required: true, minLength: 4, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/  })} 
      className='w-full mt-1 bg-gray-100'/>
      <div className='text-red-400 mb-3'>{errors.email && errors.email.type === 'required' && <p>Falta escribir el nombre</p>}
      {errors.email && errors.email.type === 'minLength' && <p>El nombre debe tener al menos 4 caracteres</p>}
      {errors.email && errors.email.type === 'pattern' && <p>El nombre no puede contener símbolos diferentes de @_.</p>}
      </div>
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
      <input id="telefono" type="number" {...register('telefono', { required: true, minLength: 7, pattern: /^[0-9\s]+$/  })} 
      className='w-full mt-1 bg-gray-100'/>
      <div className='text-red-400 mb-3'>{errors.telefono && errors.telefono.type === 'required' && <p>Falta escribir el teléfono</p>}
      {errors.telefono && errors.telefono.type === 'minLength' && <p>El teléfono debe tener al menos 7 números</p>}
      {errors.telefono && errors.telefono.type === 'pattern' && <p>El teléfono solo debe tener números</p>}
      </div>
      <label htmlFor="ciudad">Ciudad:</label>
      <input id="ciudad" type="text" {...register('ciudad', { required: true, minLength: 4, pattern: /^[a-zA-ZáéíóúñÁÉÍÓÚ\s#.\-]+$/,  })} 
      className='w-full mt-1 bg-gray-100'/>
      <div className='text-red-400 mb-3'>{errors.ciudad && errors.ciudad.type === 'required' && <p>Falta escribir la ciudad</p>}
      {errors.ciudad && errors.ciudad.type === 'minLength' && <p>La ciudad debe tener al menos 4 caracteres</p>}
      {errors.ciudad && errors.ciudad.type === 'pattern' && <p>La ciudad no puede contener símbolos</p>}
      </div>
      <label htmlFor="direccion">Dirección completa y barrio:</label>
      <input id="direccion" type="text" {...register('direccion', { required: true, minLength: 4, pattern: /^[a-zA-ZáéíóúñÁÉÍÓÚ0-9#.,/-\s]+$/  })} 
      className='w-full mt-1 bg-gray-100'/>
      <div className='text-red-400 mb-3'>{errors.direccion && errors.direccion.type === 'required' && <p>Falta escribir la dirección</p>}
      {errors.direccion && errors.direccion.type === 'minLength' && <p>La dirección debe tener al menos 4 caracteres</p>}
      {errors.direccion && errors.direccion.type === 'pattern' && <p>La dirección no puede contener símbolos los permitidos son (# - . , / )</p>}
      </div>
      <div className='flex items-center justify-center'>
      <button type="submit" className="rounded-lg mt-5 bg-black text-white px-10 py-2">
      Finalizar
      </button>
      </div>
    </form>
    {console.log("hora :",new Date().toLocaleString())}
    </div>
    </>
  );
};

