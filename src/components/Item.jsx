//import Imagen1 from '../assets/PS2.jpg'
import React from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../CartProvider'
import { useState } from 'react'
import {ListaColores} from './ListaColores'
//import { BsBagCheck } from "react-icons/bs";
//import { Modal } from './Modal/Modal';

//import { cartContext } from '../CartProvider'

const Item = ({info})=>{

//COLORES

const [showModal, setShowModal] = useState(false);
const [goToCart, setGoToCart] = useState(false)
const {addProduct, cart, removeProduct, totalPrice, totalProducts} = useCartContext()

    const onAdd = (quantity, talla, color,ide) =>{
    setGoToCart(true)
    addProduct(info, quantity, talla, color, ide)
}
//const [colores, setColores] = useState([])

//const [talla, setTalla] = useState('')
//const [color, setColor] = useState('')
//const [ide, setIde] = useState('')

function agregar() {
    setShowModal(true)
    onAdd(1, talla, color, ide) 
    setTalla("")
    setColor("")
}

const closeModal = () => {
    setShowModal(false);
  };
    return (
        <>
        <div className="relative rounded-lg">
           
            <Link to={`/detalle/${info.id}`}>
                <div className='flex justify-center w-full h-[300px]'>
                <div className='relative md:w-3/4 '>
                    <img className=" items-center p-1 rounded-t-lg object-cover w-full h-full md:transform md:duration-500 md:hover:scale-105" 
                    src={info ? info.imagenes : null} alt="product image" />
                </div>
                {info.nuevo && <div className='absolute bg-amber-200 rounded-tl-lg rounded-br-lg 
                p-1 left-2 sm:left-[4rem] top-2 text-xs font-semibold'><span>NEW</span></div>}
                </div>
            </Link>

            <div className="px-3 md:pb-5">
            <Link to={`/detalle/${info.id}`}>
                    <h3 className="text-center text-xs font-bold">{info.nombre}</h3>
            </Link>
            
                <div className=" pb-2 ">
                    <h3 className="grid mb-2 text-center text-xs md:text-base text-gray-900 w-full">
                        ${info.valor}
                    </h3>
                    <Link to={`/detalle/${info.id}`}>
                        <div className='grid grid-cols-8 md:grid-cols-8 gap-1 md:mx-[3rem] md:mt-5'>
                        { 
                           info.sizes[0].colors.slice(0, 6).map((col,index) => (
                            
                               <>
                                
                                    <button key={col.idepro} className={`w-4 h-4 md:w-7 md:h-7 md:transform duration-500 
                                    md:hover:scale-110 mx-1 border rounded-full ${ListaColores[col.color]} !important `}  
                                    />
                                    
                                </>
                           
                            )
                            ) } {info.sizes[0].colors.length>5 
                            ?<button className='rounded-full w-4 h-4 md:w-7 md:h-7 md:transform duration-500 md:hover:scale-110"}  
                            mx-1  text-xs md:text-sm'> +{info.sizes[0].colors.length-6}</button>:""}               
                    </div></Link>
                                                               
                    {//talla && color ? <button href="#" className="absolute right-2 bottom-[0px] md:bottom-[1rem] justify-end" 
                    //onClick={agregar} type="button" disabled = {//color === ""}>
                     //   <span className='flex items-center p-2 text-lg rounded-2xl bg-black text-white md:mr-[4rem] 
                     //   md:transform md:duration-200 md:hover:scale-125 '>
                      //      <BsBagCheck/>
                      //  </span>
                        
                    //<button>
                    //:""
                }
                  {//showModal && (
        //<Modal closeModal={closeModal} cart={cart} removeProduct={removeProduct}  totalPrice={totalPrice} totalProducts={totalProducts}/>
      //)
    }

                </div>
            </div>
        </div>
       
        </>
    )

    
}


export default Item