import React from 'react'
import { useState } from 'react'
import {useCartContext} from '../CartProvider'
//import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom'
import { FiPlus, FiMinus } from "react-icons/fi"

const imgs =[
    {id:0, img:"https://geekflare.com/wp-content/uploads/2021/09/520401-pure-black-background-wallpaper.jpg"},
]
export const ItemDetail = ({data}) => {
    
    
const [goToCart, setGoToCart] = useState(false)
const {addProduct} = useCartContext()

const onAdd = (quantity, talla, color,ide) =>{
    setGoToCart(true)
    addProduct(data, quantity, talla, color, ide)
}

const[verificar, SetVerificar] = useState(true) 
const myTimeout =  verificar===true? setTimeout( ()=>{
    setSliderData(data.imagenes[0])
    SetVerificar(false)} , 1000):""
    
    const [sliderData, setSliderData] = useState([])
   
    const handleClick = (index)=>{
        const slider= data.imagenes[index]
        setSliderData(slider)
      //clearTimeout(myTimeout)
    }
    //console.log(data.imagenes)
    const [talla, setTalla] = useState('')
    const [color, setColor] = useState('')
    const [ide, setIde] = useState('')

function agregar(){
    onAdd(1, talla, color, ide) 
    setTalla("")
    setColor("")
}

const [mostrarDescripcion, setMostrarDescripcion] = useState(true)
const [mostrarEnvios, setMostrarEnvios] = useState(false)
const [mostrarGuiaTallas, setMostrarGuiaTallas] = useState(false)
const [mostrarPreguntas, setMostrarPreguntas] = useState(false)

       
    return (
    <>

    <div className="text-black grid md:grid-cols-2 md:my-[3rem] px-0 ">
                <div className='md:grid md:place-content-center mx-0 px-0 '>
                    <div style={{backgroundImage: `url(${sliderData?.img})`}}  className='z-10 w-full object-cover h-[450px] md:max-h-[450px] md:max-w-[450px] 
                    hover:scale-100 duration-500 transition-all' >
                    </div>
                    <div className=" grid grid-cols-4 w-full px-0 md-px-0 gap-2">

                        {data.imagenes?.map((foto, i) =>
                        <>
                            <img key={foto.id} src={foto.img} className={`${sliderData.id == i 
                                ? "border-b-4 border-black transform duration-300 md:hover:scale-100" 
                                : ""} object-cover max-h-[100px] w-full md:max-h-[120px] py-1`} 
                                onClick={() => handleClick(i)} /></>
                        )
                        
                        }

                    </div>
                </div>
                <div className='md:px-20'>
        <h2 className="text-left font-bold pl-3 mt-2 md:mt-0 md:pl-0 md:text-left text-2xl md:text-4xl  ">{data.category}{" "}{data.nombre}</h2> 

            <h3 className="pl-3 md:pl-0 text-sm md:text-base mt-2 mb-5  md:mt-5">${data.valor}</h3>
            <h3 className='hidden md:block my-4'>Elige la talla:</h3>
            <div className='grid grid-cols-6 gap-1 place-items-left pl-2 md:pl-0'>
                    
                        {data.sizes?.map((c) => (
                            <div>
                        <button key={c.size} onClick={() => setTalla(c.size)}
                        className={`${c.size == talla ? "border bg-black text-gray-100 w-10 h-10 font-bold"
                        : "text-[1rem] mx-1 w-9 h-9 border border-gray-200 "} transform duration-700 scale-110 md:hover:scale-110 md:hover:border-gray-500 rounded-full `}>{c.size}</button>
                    </div>
                    ))}
                    
                    </div>
                    {talla?<h3 className='hidden md:block my-4'>Elige el color:</h3>:""}

                    <div className='grid grid-cols-6 gap-1 place-items-left pt-5 md:pt-0 pl-2 md:pl-0 '> 
                    {data.sizes?.map(item => (
                            item.size === talla ? item.colors.map(col => (
                                <div className=''>
                                    <button onClick={() => {
                                                               
                                        setColor(col.color)
                                        setIde(col.idepro)  
                                    }} key={col.color} className={`${col.color == color ? "border-2 border-black w-10 h-10 " 
                                    : "border border-gray-300 w-9 h-9 "} ${col.bg}  
                                         mx-1 md:mx-0 border rounded-full transform duration-300 hover:scale-110`}>

                                    </button>
                                </div>
                            )
                            ) : ""))}
                            </div>
                                                    
        <div className="w-auto px-5 md:px-0">
            
            {
            //    goToCart
             //   ? <Link to='/cart'>Terminar compra</Link>
             //   : <ItemCount initial={1} stock={12} onAdd={onAdd}/>
            }
            
            {talla && color ?<div className="">
                <div className='mx-8 md:mx-[6rem] md:mt-[2rem]'>
                <button  className="flex items-center justify-center w-full h-11 mt-5 
                border border-black rounded-xl hover:bg-neutral-100 md:transform md:duration-200 md:hover:scale-105 "
                disabled={color === ""}  
                onClick={agregar}>Agregar al carrito</button>
                </div>
                <div className='mx-8 md:mx-[6rem]'>
                <Link to='/pay'>
                    <button className="flex items-center justify-center w-full  h-11 mt-3
                    text-white bg-black rounded-xl font-bold md:transform md:duration-200 md:hover:scale-105 hover:bg-neutral-900 hover:text-neutral-200">Comprar
                    </button>
                </Link>
                </div>
            </div>:""}

            <div className='grid grid-cols-4 my-4 content-center ' 
            onClick={()=>setMostrarDescripcion(!mostrarDescripcion)}>
            <p className='col-start-1 col-span-3'>Descripción</p>
            <h3 className='col-start-4 col-span-4 grid justify-items-end text-2xl pr-2 text-gray-600'>
            {mostrarDescripcion===true? <FiMinus/> : <FiPlus />}
            </h3>
            <div className={mostrarDescripcion ? "show-element col-start-1 col-span-4 mt-4 " : ""}>
                {mostrarDescripcion && <p>El camibuso tipo polo es un producto de alta calidad debido a que está 
            elaborado en piqué de alta calidad lo cual garantiza comodidad, suavidad en la tela, agradable 
            a la vista,  es semi stretch para mayor comodidad, no destiñe y tampoco se deforma después del 
            lavado en condiciones normales. Nuestra horma es la convencional o ideal (no es reducida ni tampoco 
            horma grande). </p>}
            </div>
            </div>     


            
           


            <hr/>

            <div className='grid grid-cols-4 my-4 content-center ' 
            onClick={()=>setMostrarEnvios(!mostrarEnvios)}>
            <p className='col-start-1 col-span-3'>Envíos y devoluciones</p>
            <h3 className='col-start-4 col-span-4 grid justify-items-end text-2xl pr-2 text-gray-600'>
            {mostrarEnvios===true ? <FiMinus/> : <FiPlus />}
            </h3>
            <div className={mostrarEnvios ? "show-element col-start-1 col-span-4 mt-4 " : ""}>
                {mostrarEnvios && <h3>Tenemos envíos a toda Colombia, utilizamos transportadoras como 
                    Servientrega, Coordinadora, interrapidisimo y envía, el envío a ciudades como Popayán, Cali, Bogotá, Medellín, Bogotá
                    tarda entre 2-3 días hábiles, a otros lugares tarda entre 3-6 días hábiles</h3>}
            </div>
            </div>       
            
            <hr/>

                        <div className='grid grid-cols-4 my-4 content-center '
                            onClick={() => setMostrarGuiaTallas(!mostrarGuiaTallas)}>
                            <p className='col-start-1 col-span-3'>Guía de tallas</p>
                            <h3 className='col-start-4 col-span-4 grid justify-items-end text-2xl pr-2 text-gray-600 '>
                                {mostrarGuiaTallas===true ? <FiMinus/> : <FiPlus />}
                            </h3>
                            <div className={mostrarGuiaTallas ? "show-element col-start-1 col-span-4 mt-4 " : ""}>
                                {mostrarGuiaTallas && 
                                <table class="table-auto  w-full text-center border">
                                <thead className='bg-gray-100'>
                                  <tr>
                                    <th>Talla</th>
                                    <th>pecho</th>
                                    <th>largo</th>
                                  </tr>
                                </thead>
                               
                                <tbody>
                                  <tr>
                                    <td>S</td>
                                    <td>51 cm</td>
                                    <td>70 cm</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>M</td>
                                    <td>54 cm</td>
                                    <td>71 cm</td>
                                  </tr>
                                  <tr>
                                    <td>L</td>
                                    <td>57 cm</td>
                                    <td>72 cm</td>
                                  </tr>
                                  <tr>
                                    <td>XL</td>
                                    <td>60 cm</td>
                                    <td>73 cm</td>
                                  </tr>
                                </tbody>
                                
                              </table>                              
                                }

                            </div>
                        </div>       
            
            <hr/>


           
            
            <div className='grid grid-cols-4 my-4 content-center ' 
            onClick={()=>setMostrarPreguntas(!mostrarPreguntas)}>
            <p className='col-start-1 col-span-3'>Preguntas frecuentes</p>
            <h3 className='col-start-4 col-span-4 grid justify-items-end text-2xl pr-2 text-gray-600'>
            {mostrarPreguntas===true ? <FiMinus/> : <FiPlus />}
            </h3>
            <div className={mostrarPreguntas ? "show-element col-start-1 col-span-4 mt-4 " : ""}>
                {mostrarPreguntas && <div>
                                     <h3 className='font-medium mt-2'>¿Cuánto tarda en llegar mi pedido? </h3>
                                     <h3 className="mb-4">
                                        En Bogotá de 1 a 5 días hábiles, en ciudades principales de 5 a 7 días hábiles y en otros
                                        lugares hasta 10 días hábiles.
                                        </h3>
                                    <span className='font-medium '>¿El envío es gratis? </span>
                                    <h3 className="mb-4">
                                        ¡Sí! Tenemos envío GRATIS por compras superiores a $140.000 a la mayorías de ciudades
                                        y varios municipios. Por un costo adicional puedes obtener envío exprés en algunas ciudades.
                                    </h3>
<h3 className='font-medium mt-4'>¿Y si no me queda o no me gustó?</h3>
<h3 className='mb-4'>
Puedes hacer cambios o devoluciones por talla o gusto sin costo adicional. Nosotros recogemos tu prenda 
y te entregamos la nueva en caso de un cambio. Para solicitar un cambio o devolución debes utilizar 
nuestro portal de cambios y devoluciones acá. Recuerda revisar nuestra política de cambios y devoluciones.
</h3>

<h3 className='font-medium'>¿Tienen garantía?</h3>
<h3 className="mb-4">
Todos nuestros productos tienen una garantía de hasta 365 días, recuerda revisar nuestra política de cambios y devoluciones.
</h3>

<h3 className='font-medium'>¿Cómo sé cuál es mi talla?</h3>
<h3 className='mb-4'>
En cada producto encuentras un calculador de talla que te recomienda basado en tu estatura, peso y preferencia de fit. También tienes una referencia con la estatura y talla del modelo. También puedes contactarnos y te daremos una asesoría personalizada sobre tu talla.
</h3>

<h3 className='font-medium'>¿Qué opciones de envío hay si quiero mi pedido pronto?</h3>
<h3 className="mb-4">
En Bogotá tenemos varias opciones para que tengas tu pedido hoy mismo, las puedes elegir en la pantalla de pago.
Recoger en nuestra bodega en Bogotá
Envío hoy mismo si pides antes de la 1pm ($12.000)
Envío siguiente día hábil ($6.000)
</h3>
<h3 className='font-medium'>¿Qué opciones de pago manejan?</h3>
<h3 className="mb-4">
Puedes pagar con transferencia a Bancolombia, Nequi, Daviplata, pagos con tarjeta crédito, débito, pago contraentrega. 

</h3>
</div>}
            </div>
            </div>
            <hr/>
        </div>
    </div>
    </div>
    <h2 className="w-full text-2xl md:text-4xl my-2 md:mt-12 text-center">Agregar más productos</h2>
    

    <div className=" h-32 grid grid-cols-2 md:grid-cols-3 md:gap-12 px-3 md:px-10">
       Aquí van Imagenes        
    </div>
   

    </>
  )
}

export default ItemDetail

