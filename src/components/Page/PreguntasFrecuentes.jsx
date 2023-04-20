import React from 'react'
import NavBar from '../front/NavBar'
import Footer from '../front/Footer'

const PreguntasFrecuentes = () => {
  return (
  <>
   <NavBar />
    <div className="mt-[5rem] md:mt-[8rem] text-center">
    <h2 className="text-2xl font-bold mx-8">Preguntas frecuentes</h2>
    </div>
        

    <div className="mx-8 my-10">
    <p>
    <span className='font-bold'>¿Cuánto tarda en llegar mi pedido?</span><br /><br />
    A ciudades como Bogotá, Medellín, Popayán, Cali, etc, tarda entre 2-5 días hábiles, en otros municipios prinicpales entre 3-7 días hábiles, si te encuentras en un lugar de difícil acceso entre 7-14 días hábiles. Los envíos se hacen por medio de las transportadoras que más utilizamos: Servientrega, Coordinadora, interrapidisimo y en algunos caso por Envía, 
    la transportadora se selecciona dependiendo el tiempo estimado de entrega y cobertura. Si tienes preferencia por alguna de las transportadoras, por favor háznoslo saber después de la compra.
    <br/><br/>
    <span className='font-bold'>¿El envío es gratis?</span><br/>
    <br />
    ¡Sí! Tenemos envío GRATIS por compras superiores a $149.900 a la mayorías de ciudades y varios municipios. Por un costo adicional puedes obtener envío exprés en algunas ciudades.
    <br /><br />
    <span className='font-bold'>¿Cuidado de la prenda?</span><br /><br />
    El cuidado debe ser el de la mayoría de prendas textiles de diferentes marcas, las recomendaicones son: No retorcer para un secado más rápido, se debe secar naturalmente en sombra, planchar a baja temperatura, no utilizar detergentes o líquidos que puedan manchar o desteñir y no se debe usar secadora.
    <br /><br />
    <span className='font-bold'>¿Tienen garantía?</span><br /><br />
    Todos nuestros productos tienen una garantía de hasta 30 días, recuerda revisar nuestra política de cambios y devoluciones.
    <br /><br />
    <span className='font-bold'>¿Cómo sé cuál es mi talla?</span><br /><br />
    En cada producto encuentras una guía de tallas, en caso de tener dudas recuerda contactarnos y te daremos una asesoría personalizada.
    </p>
    </div>
    <Footer />
    </>
  )
}
export default PreguntasFrecuentes