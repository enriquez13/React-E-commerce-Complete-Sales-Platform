import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useCartContext } from './../../CartProvider'
import { v4 as uuidv4 } from 'uuid';



const Formulario = () => {
  const [formData, setFormData] = useState({});
  const reference = uuidv4(); //referencia de pago único
  const {cart, totalPrice} = useCartContext()
  const[data, setData] =useState({})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data : ", data);
    setData(data)
    setFormData(data);
  };
  const [checkout, setCheckout] = useState(null);
  // se crea un objeto con los datos mínimos necesarios para realizar el pago; sin embargo cambiará al ingresar datos al input 
  const [config, setConfig] = useState({
    currency: 'COP',
      amountInCents: 2490000,
      reference: reference,
      publicKey: 'pub_test_wnCSRp1S2oerlMK4i0no1sEoPrLIvC05',
  })
//Se agregan los datos cuando se le da click al botón de pago y se actualiza cuando tetecta cambios
useEffect(() => {
    
  const configure = {
    currency: 'COP',
    amountInCents: 15000000,
    reference: reference,
    publicKey: 'pub_test_wnCSRp1S2oerlMK4i0no1sEoPrLIvC05',
    customerData: {
      fullName: data.nombre,
      phoneNumber: 'data.telefono' !== '' ? 'data.telefono':'telefono',
      phoneNumberPrefix: '+57',
      legalId: 'data.cedula' !== '' ? 'data.cedula':'cedula',
      legalIdType: 'CC'
    },
  };
  setConfig(configure);
  
  const checkoutInstance = new window.WidgetCheckout(config);
  setCheckout(checkoutInstance);
}, [data]);

const onCheckoutCompleted = (result) => {
  const transaction = result.transaction;
  console.log('Transaction ID: ', transaction.id);
  console.log('Transaction object: ', transaction);
  const db = getFirestore();
    const orden = {
        cliente:{ 
            transactionId: transaction.id,
            customerData: config.customerData,
            transaction: transaction,

            nombre: data.nombre,
            cedula: data.cedula,
            telefono : data.telefono,
            ciudad : data.ciudad,
            direccion: data.direccion,
        },
            producto: cart.map(product=> ({Id:product.id, Nombre: product.nombre, Talla: product.talla, Color: product.color, Precio: product.valor, Cantidad: product.quantity})),
            envio: "opcionEnvio",
            precioEnvio: "precioEnvio",
            fecha: new Date().toLocaleString(),
            total: totalPrice(),
            }
            const ordersCollection = collection(db, 'compras')
            addDoc(ordersCollection, orden)
    .then(()=>{
        alert("Felicidades, tu compra fue exitosa")
    })
    .catch(error=>{
        console.error(error)
        alert("No se pudo completar la trabsacción, vuelve a intentar")
    })
  };
  const handleOpenCheckout = () => {
    checkout.open(onCheckoutCompleted);
  };
  
  
  return (
    <>{console.log("data.nombre : ", data)}
    {console.log("config : ",config)}
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          {...register("nombre", {
            required: true,
            pattern: /^[a-zA-Z0-9\s]+$/,
            minLength: 4,
          })}
        />
        {errors.nombre && errors.nombre.type === "required" && (
          <p>Ingrese su nombre</p>
        )}
        {errors.nombre && errors.nombre.type === "pattern" && (
          <p>Ingrese solo letras y números</p>
        )}
        {errors.nombre && errors.nombre.type === "minLength" && (
          <p>Ingrese al menos 4 caracteres</p>
        )}
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          {...register("telefono", {
            required: true,
            pattern: /^[0-9]+$/,
            minLength: 4,
          })}
        />
        {errors.telefono && errors.telefono.type === "required" && (
          <p>Ingrese su teléfono</p>
        )}
        {errors.telefono && errors.telefono.type === "pattern" && (
          <p>Ingrese solo números</p>
        )}
        {errors.telefono && errors.telefono.type === "minLength" && (
          <p>Ingrese al menos 4 números</p>
        )}
      </div>
      <div>
        <label htmlFor="cedula">Cédula:</label>
        <input
          type="text"
          id="cedula"
          {...register("cedula", {
            required: true,
            pattern: /^[0-9]+$/,
            minLength: 4,
          })}
        />
        {errors.cedula && errors.cedula.type === "required" && (
          <p>Ingrese su cédula</p>
        )}
        {errors.cedula && errors.cedula.type === "pattern" && (
          <p>Ingrese solo números</p>
        )}
        {errors.cedula && errors.cedula.type === "minLength" && (
          <p>Ingrese al menos 4 números</p>
        )}
      </div>
      <div>
        <label htmlFor="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          {...register("direccion", {
            required: true,
            pattern: /^[a-zA-Z0-9\s]+$/,
            minLength: 4,
          })}
        />
        {errors.direccion && errors.direccion.type === "required" && (
          <p>Ingrese su dirección</p>
        )}
        {errors.direccion && errors.direccion.type === "pattern" && (
          <p>Ingrese solo letras y números</p>
        )}
        {errors.direccion && errors.direccion.type === "minLength" && (
          <p>Ingrese al menos 4 caracteres</p>
        )}
      </div>
      <div>
        <label htmlFor="direccion">Ciudad:</label>
        <input
          type="text"
          id="ciudad"
          {...register("ciudad", {
            required: true,
            pattern: /^[a-zA-Z0-9\s]+$/,
            minLength: 4,
          })}
        />
        {errors.ciudad && errors.ciudad.type === "required" && (
          <p>Ingrese su ciudad</p>
        )}
        {errors.ciudad && errors.ciudad.type === "pattern" && (
          <p>Ingrese solo letras y números</p>
        )}
        {errors.ciudad && errors.ciudad.type === "minLength" && (
          <p>Ingrese al menos 4 caracteres</p>
        )}
      </div>
      <button  type="submit"  >Pagar</button>
      <button  type="submit" onClick={handleOpenCheckout} >Pagar</button>
      <button type="button" onClick={() => console.log("formData", formData)}>
  Mostrar datos capturados
</button>
      </form>
      </>
  )}
  export default Formulario