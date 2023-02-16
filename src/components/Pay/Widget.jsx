import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Widget = ({total, handlePayment}) => {
  
  const [isPaying, setIsPaying] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);
  const reference = uuidv4();
 

    const handleCheckout = async () => {
      //REFERENCIA ÚNICA
      console.log(reference);

{console.log("pago : ",reference, "valor :", total*100)}
    
    //
    ;

    // Realiza el pago de Wompi aquí

      setOpenCheckout(true);
      var checkout = new WidgetCheckout({
        currency: 'COP',
        amountInCents: total*100,
        reference: reference,
        publicKey: 'pub_test_wnCSRp1S2oerlMK4i0no1sEoPrLIvC05',
        //redirectUrl: `https://my-react-app-enriquez13.vercel.app/event`, // Opcional
        customerData: { // Opcional
          email:'alejandro@gmail.com',
          fullName: 'Alejandro Enríquez',
          phoneNumber: '3140000000',
          phoneNumberPrefix: '+57',
          legalId: '123456789',
          legalIdType: 'CC'
        },
        shippingAddress: { // Opcional
          addressLine1: "Calle 123 # 4-5",
          city: "Bogota",
          phoneNumber: '3019444444',
          region: "Cundinamarca",
          country: "CO"
        }
    
   
      });
      checkout.open(function ( result ) {
        var transaction = result.transaction
        console.log('Transaction ID: ', transaction.id)
        console.log('Transaction object: ', transaction)

      });
      setIsPaying(true)
    }

    
    
  return (
    
    <button type="submit" onClick={handleCheckout} className="rounded-lg mt-5 bg-black text-white px-10 py-2">Pagar</button>
  )
}