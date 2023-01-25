import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCartContext } from '../CartProvider'
import ItemCart from './ItemCart'

export const Cart = () => {
  
    const {cart, totalPrice} = useCartContext()
    //console.log(cart)
    if(cart.length === 0){
        
        return (
            <>
                <div className='h-screen '>
                    <h5 className='py-5 text-230px text-center text-black'>No hay elementos en el carrito de comrpas</h5>
                    <div className='fixed bottom-0 w-full border rounded-xl '>
                        <div className='mx-[3.25rem] my-4 '>
                            <Link to='/products'>
                                <button className='flex items-center justify-center w-full h-11 mb-5 
                border border-black rounded-xl text-white py-4 bg-black'>Buscar productos</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return ( 
        <>
            <div className='relative'>
                <NavLink to='/'>
                    <p className='absolute left-3 top-4 text-xl text-gray-400 '>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </p>
                </NavLink>
                <h2 className='w-full text-md text-center py-4 text-black'>
                    Mi Carrito de compras
                </h2>
            </div>


            <div className='min-h-[400px] md:mx-[200px] '>
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }

            </div>   

            <div className=' w-full border rounded-xl '>
                <div className='flex py-2 px-4 text-md text-black '>
                    <h5 className='pl-2 w-2/3  md:pl-[200px]'>
                        Subtotal:
                    </h5>
                    <h5 className='pl-2 w-1/3 font-bold'>{totalPrice()} COP</h5>
                </div>
                <div className='flex py-2 px-4 text-md text-black '>
                    <h5 className='pl-2 w-2/3 md:pl-[200px]'>
                        Envío:
                    </h5>
                    <h5 className='pl-2 w-1/3 font-bold'>{9000} COP</h5>
                </div>
                <hr />
                <div className='flex py-2 px-4 text-md text-black '>
                    <h5 className='pl-2 w-2/3 md:pl-[200px]'>
                        Total:
                    </h5>
                    <h5 className='pl-2 w-1/3 font-bold'>{totalPrice() + 9000} COP</h5>
                </div>
                <div className='mx-[3.25rem]'>
                <Link to='/pay'>
             
                    <button className='flex items-center justify-center w-full h-11 mb-5 
                border border-black rounded-xl text-white py-4 bg-black'>Comprar</button>                    
                </Link>
                </div>    
            </div>                 
        </>
    )
}
