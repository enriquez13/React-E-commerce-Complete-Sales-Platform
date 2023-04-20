import React from 'react';
import NavBar from '../front/NavBar';
import Footer from '../front/Footer';

const Contactanos = () => {
  return (
    <>
      <NavBar />
      <div className="mt-[5rem] md:mt-[9rem] text-center">
        <h2 className="text-2xl font-bold">Contáctanos</h2>
      </div>
      <div className="mx-8 my-10">
        <p className="text-lg leading-7">
          En nuestra tienda en línea, nos esforzamos por brindarte la mejor experiencia de compra posible. 
          Es por ello que nuestro equipo de atención al cliente está siempre a tu disposición para responder tus dudas, 
          preguntas y consultas.
          <br />
          <br />
          Si necesitas ponerte en contacto con nosotros, puedes hacerlo a través de correo electrónico a 
          <a href="mailto:zorobabelcol@gmail.com" className='text-blue-500'> zorobabelcol@gmail.com</a> o a nuestro teléfono o whatsapp 
          <a href="https://wa.me/573127296362" className='text-green-500 hover:underline'> +573127296362</a>. 
          Nuestra respuesta es muy rápida y estaremos encantados de ayudarte en lo que necesites,
           desde preguntas sobre nuestros productos y servicios, hasta asesoría en tu proceso de compra o soporte 
           post-venta.
          <br />
          <br />
          También puedes encontrarnos en nuestras redes sociales, Facebooj, instagram o whatsapp donde publicamos contenido interesante y promociones exclusivas para nuestros seguidores. Síguenos en Instagram, Facebook o Twitter para estar al tanto de nuestras novedades y eventos.
          <br />
          <br />
          En nuestra tienda en línea, creemos en la importancia de ofrecer un servicio al cliente excepcional y de alta calidad. Estamos comprometidos en responder a todas tus dudas y consultas en el menor tiempo posible, para que puedas disfrutar de una experiencia de compra sin preocupaciones.
        </p>
      </div>
      <Footer />
    </>
  );
};
export default Contactanos