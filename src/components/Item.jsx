//import Imagen1 from '../assets/PS2.jpg'
import React from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../CartProvider'
import { useState } from 'react'
import { BsBagPlus } from "react-icons/bs";

//import { cartContext } from '../CartProvider'

const Item = ({info})=>{
    
    const [goToCart, setGoToCart] = useState(false)
const {addProduct} = useCartContext()

    const onAdd = (quantity, talla, color) =>{
    setGoToCart(true)
    addProduct(info, quantity, talla, color)
}
const [colores, setColores] = useState([])

const [talla, setTalla] = useState('')
const [color, setColor] = useState('')


    return (

        <div className="relative rounded-lg">
            <Link to={`/detalle/${info.id}`}>
                <div className='flex justify-center w-full h-[300px]'>
                <img className="md:w-3/4 items-center p-1 rounded-t-lg object-cover w-full h-full" src={info.imagen} alt="product image" />
                </div>
            </Link>

            <div className="px-3">
                
                    <h5 className="text-center text-md  font-bold">{info.category}</h5>
                    <h5 className="text-center text-md  font-bold">{info.nombre}</h5>
                
                <div className=" pb-2 ">
                    <span className="grid mb-2 text-center text-xs md:text-xl text-gray-900 w-full">
                        ${info.valor}
                    </span>
                    
                    <div className='grid grid-cols-4 gap-1 mb-1'>
                  
                        {info.sizes.map(item => (
                            <>
                                <div>
                                    <button key={item.size}
                                        className={`${item.size == talla ? "bg-black text-gray-100 w-7 h-7 font-bold" : "border-gray-200 w-5 h-5"} text-[0.8rem] mx-1 rounded-full border `}
                                        onClick={() => setTalla(item.size)}>
                                        {item.size}
                                    </button>
                                </div>

                            </>
                        )
                        )
                        }
                        </div>
                        <div className='grid grid-cols-4 gap-1'>
                        {info.sizes.map(item => (
                            item.size === talla ? item.colors.map(col => (
                                <div className=''>
                                    <button onClick={() => {
                                        setColor(col.color)
                                    }} 
                                    key={col.color+item.size} className={`${col.color == color ? "border-black w-6 h-6" : "w-5 h-5"} ${col.bg}  
                                         mx-1 border rounded-full `}>

                                    </button>
                                </div>
                            )
                            ) : ""))}               
                    </div>
                                                                          
                    {talla && color ? <button href="#" className="absolute right-2 bottom-[-5px] justify-end" 
                    onClick={()=> onAdd(1, talla, color)}>
                        <span className='flex items-center p-2 text-2xl  text-black '>
                            <BsBagPlus/>
                        </span>
                        
                    </button>
                    :""}
                </div>
            </div>
        </div>
    )
}
export default Item