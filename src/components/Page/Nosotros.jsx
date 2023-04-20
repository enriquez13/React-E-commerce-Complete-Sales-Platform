import React from 'react'
import NavBar from '../front/NavBar'
import Footer from '../front/Footer'

export const Nosotros = () => {
    return (
        <>
         <NavBar />
          <div className="mt-[5rem] md:mt-[8rem] text-center">
          <h2 className="text-2xl font-bold mx-8">Sobre nosotros</h2>
          </div>
              
      
          <div className="mx-8 my-10">
          <p>
          ¡Bienvenidos a nuestra empresa dedicada al diseño y elaboración de prendas masculinas! Somos una empresa 
          fundada por un ingeniero físico y una diseñadora de modas, quienes se dieron cuenta de la necesidad en el 
          mercado de prendas con diseños únicos y originales, con alta calidad y a precios razonables.
          <br/><br/>
          Nos enorgullece ofrecer productos con una alta calidad y diseño innovador, buscando siempre satisfacer las 
          necesidades de nuestros clientes. Nos enfocamos en crear prendas que sean cómodas, duraderas y a la vez elegantes, 
          y nuestro compromiso es ofrecer prendas de alta calidad a precios accesibles para todo el mundo.
          <br/><br/>
            Nuestra empresa no solo se preocupa por ofrecer productos de alta calidad, sino que también nos enfocamos 
            en ayudar a personas con pocos recursos, especialmente a madres cabeza de hogar, brindándoles oportunidades 
            de trabajo en nuestra empresa. Creemos que al hacer esto, estamos contribuyendo de manera positiva al 
            desarrollo de nuestra sociedad.
            <br/><br/>
            Nos esforzamos cada día para ofrecer lo mejor a nuestros clientes, y estamos comprometidos con la excelencia 
            en todo lo que hacemos. ¡Gracias por elegirnos y permitirnos formar parte de su estilo de vida!
          </p>
          </div>
          <Footer />
          </>
        )
      }
      export default Nosotros;
