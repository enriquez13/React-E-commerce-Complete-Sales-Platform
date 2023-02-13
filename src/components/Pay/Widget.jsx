import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Widget = ({total}) => {
  const [paymentReference, setPaymentReference] = useState('');

    const [openCheckout, setOpenCheckout] = useState(false);

    const handleCheckout = () => {
      //REFERENCIA ÚNICA
    const reference = uuidv4();
    setPaymentReference(reference);
      //
      setOpenCheckout(true);
      var checkout = new WidgetCheckout({
        currency: 'COP',
        amountInCents: 5000000,
        reference: paymentReference,
        publicKey: 'pub_test_wnCSRp1S2oerlMK4i0no1sEoPrLIvC05',
        redirectUrl: `https://my-react-app-enriquez13.vercel.app/event`, // Opcional
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

    
    }

    
    
  return (
    
    <button onClick={handleCheckout} className="rounded-lg bg-black text-white py-2 px-6 m-4">Pagar</button>
  )
}
