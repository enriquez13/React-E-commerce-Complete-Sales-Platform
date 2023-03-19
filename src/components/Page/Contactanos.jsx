import React from 'react';
import NavBar from '../front/NavBar';
import Footer from '../front/Footer';

const Contactanos = () => {
  return (
    <>
      <NavBar />
      <div className="mt-[5rem] text-center">
        <h2 className="text-2xl font-bold">Contáctanos</h2>
      </div>
      <div className="mx-8 my-10">
        <p className="text-lg leading-7">
          En nuestra tienda en línea, nos esforzamos por brindarte la mejor experiencia de compra posible. Es por ello que nuestro equipo de atención al cliente está siempre a tu disposición para responder tus dudas, preguntas y consultas.
          <br />
          <br />
          Si necesitas ponerte en contacto con nosotros, por favor utiliza el formulario de contacto en nuestro sitio web o envíanos un correo electrónico a nuestra dirección de correo electrónico. Estaremos encantados de ayudarte en lo que necesites, desde preguntas sobre nuestros productos y servicios, hasta asesoría en tu proceso de compra o soporte post-venta.
          <br />
          <br />
          También puedes encontrarnos en nuestras redes sociales, donde publicamos contenido interesante y promociones exclusivas para nuestros seguidores. Síguenos en Instagram, Facebook o Twitter para estar al tanto de nuestras novedades y eventos.
          <br />
          <br />
          En nuestra tienda en línea, creemos en la importancia de ofrecer un servicio al cliente excepcional y de alta calidad. Estamos comprometidos en responder a todas tus dudas y consultas en el menor tiempo posible, para que puedas disfrutar de una experiencia de compra sin preocupaciones.
          <br />
          <br />
          No dudes en ponerte en contacto con nuestro equipo de atención al cliente si necesitas cualquier tipo de ayuda o asistencia. Estamos aquí para brindarte el mejor servicio y atención personalizada en todo momento.
        </p>
      </div>
      <Footer />
    </>
  );
};
export default Contactanos