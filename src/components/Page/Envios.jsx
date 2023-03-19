import React from 'react'
import NavBar from '../front/NavBar';
import Footer from '../front/Footer';

const Envios = () => {
  return (
    <>
    <NavBar />
    <div className="mt-[5rem] text-center">
    <h2 className="text-2xl font-bold">Contáctanos</h2>
  </div>
  <div className="mx-8 my-10">
    <p>
        En nuestra tienda en línea, nos esforzamos por brindar una experiencia de compra satisfactoria y confiable. Por ello, te ofrecemos un servicio de envío seguro y rápido para que puedas disfrutar tus compras lo más pronto posible.

        <br />
          <br />
          Los pedidos serán enviados a la dirección proporcionada durante el proceso de compra. Los envíos se realizan en un plazo de 1 a 3 días hábiles, a partir de la confirmación del pago.

          <br />
          <br />
          Ofrecemos envío gratuito en compras superiores a una cantidad determinada, que varía según el destino del envío. En caso de que tu compra no alcance este monto, se aplicará un cargo adicional por envío.

          <br />
          <br />
          Los envíos se realizan a través de empresas de mensajería confiables, y proporcionaremos un número de seguimiento para que puedas monitorear el estatus de tu envío en todo momento.

          <br />
          <br />
          Es importante mencionar que no nos hacemos responsables por retrasos o problemas de entrega causados por factores ajenos a nuestra empresa, como problemas climáticos o de logística de la empresa de mensajería. Sin embargo, estamos comprometidos en resolver cualquier problema que se presente y brindarte la mejor solución posible.

Si tienes alguna duda o consulta acerca de nuestro servicio de envío, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. Estamos a tu disposición para ayudarte en todo lo que necesites y para que disfrutes de una experiencia de compra en línea satisfactoria y sin preocupaciones.
    </p>

 </div>
      <Footer />
    </>
  );
};
export default Envios