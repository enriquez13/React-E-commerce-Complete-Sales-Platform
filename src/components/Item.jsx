//import Imagen1 from '../assets/PS2.jpg'
import React from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../CartProvider'
import { useState } from 'react'
import { BsBagCheck } from "react-icons/bs";
import { Modal } from './back/Modal';

//import { cartContext } from '../CartProvider'

const Item = ({info})=>{
const [showModal, setShowModal] = useState(false);
const [goToCart, setGoToCart] = useState(false)
const {addProduct, cart, removeProduct} = useCartContext()

    const onAdd = (quantity, talla, color,ide) =>{
    setGoToCart(true)
    addProduct(info, quantity, talla, color, ide)
}
//const [colores, setColores] = useState([])

const [talla, setTalla] = useState('')
const [color, setColor] = useState('')
const [ide, setIde] = useState('')

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
                <img className="md:w-3/4 items-center p-1 rounded-t-lg object-cover w-full h-full md:transform md:duration-500 md:hover:scale-105" src={info.imagenes[0].img} alt="product image" />
                </div>
            </Link>

            <div className="px-3 md:pb-5">
            <Link to={`/detalle/${info.id}`}>
                    <h5 className="text-center text-md  font-bold">{info.category}</h5>
                    <h5 className="text-center text-md  font-bold">{info.nombre}</h5>
            </Link>
                <div className=" pb-2 ">
                    <span className="grid mb-2 text-center text-xs md:text-base text-gray-900 w-full">
                        ${info.valor}
                    </span>
                    
                    <div className='grid grid-cols-4 gap-1 mb-1 md:mx-[3rem]'>
                  
                        {info.sizes.map(item => (
                            <>
                                <div className=''>
                                    <button key={item.size}
                                        className={`${item.size == talla ? "bg-black text-gray-100 w-7 md:w-9 h-7 md:h-9 font-bold md:transform md:duration-200 md:hover:scale-110" 
                                        : "border-gray-200 w-5 h-5 md:w-7 md:h-7"} text-[0.8rem] mx-1 rounded-full border md:transform duration-500 hover:scale-110`}
                                        onClick={() => setTalla(item.size)}>
                                        {item.size}
                                    </button>
                                </div>

                            </>
                        )
                        )
                        }
                        </div>
                        <div className='grid grid-cols-4 md:grid-cols-6 gap-1 md:mx-[3rem] md:mt-5'>
                        {info.sizes.map(item => (
                            item.size === talla ? item.colors.map(col => (
                                <div className=''>
                                    <button onClick={() => {
                                        setColor(col.color)
                                        setIde(col.idepro)
                                    }} 
                                    key={col.color+item.size} className={`${col.color == color ? "border-black w-6 h-6 md:w-8 md:h-8 md:transform md:duration-1000 md:hover:scale-110" 
                                    : "w-5 h-5 md:w-7 md:h-7 md:transform duration-500 md:hover:scale-110"} ${col.bg}  
                                         mx-1 border rounded-full `}>

                                    </button>
                                </div>
                            )
                            ) : ""))}               
                    </div>
                                                               
                    {talla && color ? <button href="#" className="absolute right-2 bottom-[0px] md:bottom-[1rem] justify-end" 
                    onClick={agregar} type="button" disabled = {color === ""}>
                        <span className='flex items-center p-2 text-lg rounded-2xl bg-black text-white md:mr-[4rem] 
                        md:transform md:duration-200 md:hover:scale-125 '>
                            <BsBagCheck/>
                        </span>
                        
                    </button>
                    :""}
                  {showModal && (
        <Modal closeModal={closeModal} cart={cart} removeProduct={removeProduct}   />
      )}
   




                </div>
            </div>
        </div>
        
        </>
    )

    
}


export default Item