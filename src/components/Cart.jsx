import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCartContext } from '../CartProvider'
import ItemCart from './ItemCart'
import { IoIosArrowBack } from "react-icons/io"

export const Cart = () => {
    function handleClick() {
        window.history.back();
      }

    const {cart, totalPrice} = useCartContext()
    let descuento = totalPrice() >= 140000 ? -totalPrice()*0.2 : 0
    let total = totalPrice() ? totalPrice() + descuento : ""
    if(cart.length === 0){
        
        return (
            <>
                <div className='h-screen '>
                    <h5 className='py-5 text-230px text-center text-black'>No hay elementos en el carrito de compras</h5>
                    <div className='fixed bottom-0 w-full border rounded-xl grid items-center justify-items-center '>
                        <div className='w-4/6 md:w-1/4 md:my-5'>
                            <Link to='/products'>
                                <button className='w-full h-[2.75rem] my-5 
                        md:mb-[0rem] 
                        md:transform md:duration-200 md:hover:scale-110
                        border border-black rounded-xl text-white  bg-black'>Buscar productos</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return ( 
        <>
        <div className='relative min-h-screen  md:grid md:grid-cols-2'>
            <div className='relative md:col-start-1 md:col-span-2'>
                    <p className='absolute left-4 top-5 text-2xl text-gray-400 '
                    onClick={handleClick}>
                        <IoIosArrowBack/>
                    </p>
                <h2 className='w-full text-md text-center py-4 text-black'>
                    Mi Carrito de compras
                </h2>
            </div>


            <div className='min-h-[400px] pb-[12rem] md:pb-14 md:col-start-1 md:col-span-1 md:mx-10'>
                {
                    cart.map(product => <ItemCart key={product.nombre+product.talla+product.color} product={product} />)
                }

            </div>   

            <div className='absolute bottom-0 w-full border md:border-0 border-gray-200 rounded-xl md:col-start-2  
            md:relative md:col-span-1 
             md:w-11/12'>
                <div className='flex py-[0.32rem] px-4 md:my-4 text-md  '>
                    <h5 className='pl-2 w-2/3  md:pl-[200px]'>
                        Subtotal:
                    </h5>
                    <h5 className='pl-2 w-1/3 font-medium'>{totalPrice()} COP</h5>
                </div>
                {descuento?<div className='flex py-1 px-4 text-md text-black '>
                    <h5 className='pl-2 w-2/3 md:pl-[200px]'>
                        Descuento:
                    </h5>
                    <h5 className='pl-2 w-1/3 font-medium'>{descuento} COP</h5>
                </div>
            :null}
                <hr className='md:my-3'/>
                <div className='flex py-[0.32rem] px-4 text-md text-black '>
                    <h5 className='pl-2 w-2/3 md:pl-[200px] font-medium '>
                        TOTAL:
                    </h5>
                    <h5 className='pl-2 w-1/3 font-bold '>{total } COP</h5>
                </div>
                <div className=' md:mx-0 w-full grid items-center justify-items-center'>
                    <div className='w-4/6 md:w-1/2 md:mt-5'>
                    <Link to='/pay  '>
                        <button className=' w-full h-[2.75rem] my-5 
                        md:mb-[0rem] 
                        md:transform md:duration-200 md:hover:scale-110
                        border border-black rounded-xl text-white  bg-black'>Comprar</button>
                    </Link>
                    </div>
                </div>    
            </div>     
            </div>            
        </>
    )
}
