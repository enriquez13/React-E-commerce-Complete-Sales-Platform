import React, { useState, useEffect } from 'react';
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useCartContext } from '../CartProvider'
import { v4 as uuidv4 } from 'uuid';

const reference = uuidv4(); //referencia de pago único
const WompiWidget = () => {
    const [opcionEnvio, setOpcionEnvio] = useState('envio'); //opción envío
    const precioEnvio = opcionEnvio === 'envio' ? 5000 : 10000; //precio del envío seleccionado
    
    const handleOptionChange = (event) => { 
      setOpcionEnvio(event.target.value);
    }; // guarda el tipo de envío seleccionado

    // constantes utilizadas en el formulario
    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("");
    const [cedula, setCedula] = useState("");
    const [telefono, setTelefono] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [direccion, setDireccion] = useState("");
    /////////////////////////////////////////////////
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("nombre:",nombre, "apellidos", apellidos, "cedula:", cedula, "telefono:", telefono, "ciudad:", ciudad, "direccion:",direccion) 
      //guarda los valores ingresados en los inputs 
    };

    //longitud mínima de caracteres para los input
    const validateInput = (input) => {
      return input.length >= 4;
    };

    //Validación de los input
    const isNombreValid = validateInput(nombre);
    const isApellidosValid = validateInput(apellidos);
    const isCiudadValid = validateInput(ciudad);
    
    


    const {cart, totalPrice} = useCartContext()
  const [checkout, setCheckout] = useState(null);
  // se crea un objeto con los datos mínimos necesarios para realizar el pago; sin embargo cambiará al ingresar datos al input 
  const [config, setConfig] = useState({
    currency: 'COP',
      amountInCents: 2490000,
      reference: reference,
      publicKey: 'pub_test_wnCSRp1S2oerlMK4i0no1sEoPrLIvC05',
      customerData: {
        // email: 'lola@gmail.com',
          fullName: 'nombre',
          phoneNumber: 'phoneNumber',
          phoneNumberPrefix: '+57',
          legalId: 'cedula', //cédula
          legalIdType: 'CC'
        },
        shippingAddress: {
          addressLine1: 'direccion',
          city: 'ciudad',
          phoneNumber: '311876200',
          region: 'region',
          country: 'CO'
        }
  })

  //Se agregan los datos cuando se le da click al botón de pago y se actualiza cuando tetecta cambios
  useEffect(() => {
    
    const configure = {
      currency: 'COP',
      amountInCents: 15000000,
      reference: reference,
      publicKey: 'pub_test_wnCSRp1S2oerlMK4i0no1sEoPrLIvC05',
      customerData: {
        fullName: nombre,
        phoneNumber: telefono !== '' ? telefono:'telefono',
        phoneNumberPrefix: '+57',
        legalId: cedula !== '' ? cedula:'cedula',
        legalIdType: 'CC'
      },
    
    };
    setConfig(configure);
    const checkoutInstance = new window.WidgetCheckout(configure);
    setCheckout(checkoutInstance);
  }, [nombre, telefono, cedula]);



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

            nombre: nombre,
            cedula: cedula,
            telefono : telefono,
            ciudad : ciudad,
            direccion: direccion,
        },
            producto: cart.map(product=> ({Id:product.id, Nombre: product.nombre, Talla: product.talla, Color: product.color, Precio: product.valor, Cantidad: product.quantity})),
            envio: opcionEnvio,
            precioEnvio: precioEnvio,
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
    <div>
{precioEnvio}{opcionEnvio}{nombre}{telefono}{direccion}{reference}
{console.log("config paytwo : ", config)}
<form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          pattern="^[a-zA-Z0-9]*$"
          title="Solo se permiten letras y números"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          className={!isNombreValid ? "invalid" : ""}
        />
        {!isNombreValid && (
          <span className="error">El nombre debe tener al menos 5 caracteres</span>
        )}
      </div>
      <div>
        <label htmlFor="apellidos">Apellidos:</label>
        <input
          type="text"
          id="apellidos"
          value={apellidos}
          onChange={(event) => setApellidos(event.target.value)}
          className={!isApellidosValid ? "invalid" : ""}
        />
        {!isApellidosValid && (
          <span className="error">Los apellidos deben tener al menos 5 caracteres</span>
        )}
      </div>
      <div>
        <label htmlFor="cedula">Cédula:</label>
        <input
          type="number"
          id="cedula"
          value={cedula}
          onChange={(event) => setCedula(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="number"
          id="telefono"
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ciudad">Ciudad o municipio:</label>
        <input
          type="text"
          id="ciudad"
          value={ciudad}
          onChange={(event) => setCiudad(event.target.value)}
          className={!isCiudadValid ? "invalid" : ""}
        />
        {!isCiudadValid && (
          <span className="error">La ciudad/municipio debe tener al menos 5 caracteres</span>
        )}
      </div>
      <div>
        <label htmlFor="direccion">Dirección:</label>
        <input
          type="text"
          id="direccion"
          value={direccion}
          onChange={(event) => setDireccion(event.target.value)}
        />
      </div>
      <button  type="submit" onClick={handleOpenCheckout} >Pagar</button>
    </form>

      
      
</div>
  );
};

export default WompiWidget;