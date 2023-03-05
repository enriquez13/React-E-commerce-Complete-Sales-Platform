import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai";
//import { BsBag } from 'react-icons/bs';

const descuento = 0.8
const precioLimite = 149900

export const Modal = (props) => {
    const {closeModal, cart, removeProduct, totalPrice, totalProducts, allProducts} = props
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSizeClick = (size, producto) => {
    setSelectedSize(size);
    setSelectedProduct(producto.id);
    {console.log("producto", producto.id)}
  };
  

    return (
        <div className="fixed w-5/6 z-50 h-[50%]   right-0 inset-y-0 pt-0 sm:inset-y-0 sm:flex sm:items-center sm:justify-center">
            <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
                <div className="absolute inset-0 bg-gray-500 opacity-40"></div>
            </div>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <div className="  pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="mt-3 text-center sm:mt-5 mx-2 relative">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 my-4 ">
                           Recién agregados al carrito
                        </h3>
                        
                       
                    <hr/>
                        
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute right-2 md:right-[3rem] content-center flex items-center
                            top-[-21px] text-black md:transform md:hover:text-gray-700 cursor-pointer 
                            bg-black bg-opacity-5 rounded-full p-1"
                        >
                            <AiOutlineClose />
                        </button>
                        

                        <div className="max-h-[60vh] overflow-y-scroll ">
                        {cart?.map((product, index) => (

                            <div className="my-2 grid grid-cols-3 gap-4 bg-white" key={index} >
                                <div className='h-full flex items-center justify-center relative'>
                                    <img src={cart[index].img} className="max-w-[4rem] " />
                                    <h1 className=" text-xl absolute right-[1.3rem] md:left-[4rem] top-[1.2rem] md:top-[1.5rem] text-gray-400 cursor-pointer">
                       <span className=' relative'>
                            {
                                totalProducts() ? <span className="bg-blue-500 absolute bottom-[-2px] left-1 text-white text-sm rounded-full px-[0.4rem] ">
                                    {product.quantity}
                                </span> : ''
                            }
                        </span>
                    </h1>
                                </div>
                                <div className="col-span-2 h-full d-flex align-items-center py-5 relative">
                                    <div>
                                        <p className="text-sm leading-5 text-gray-500 font-bold ">
                                            {product.category}{" "}{product.nombre}
                                        </p>
                                        <p className="text-sm leading-5 text-gray-500 ">
                                            Talla {" "}{product.talla}{" "} Color{" "}{product.color}
                                        </p>
                                        
                                        <p className="text-sm leading-5 text-gray-500 ">
                                            <span className={`${totalPrice()>=precioLimite ? 'line-through text-gray-400' :"text-gray-700"} font-bold `}>{product.valor}</span>
                                            { totalPrice() >= precioLimite ? <span className='text-gray-700 font-bold pl-2'>{product.valor*descuento}</span> : " "}
                                        </p>
                                    </div>
                                    <div className="absolute top-[50%] right-3">
                                        <button onClick={() => removeProduct(product.ide)}
                                            className="rounded-full h-5 w-5 flex items-center justify-center text-black bg-black bg-opacity-5">
                                            <span className="text-xs"><AiFillDelete /></span>
                                        </button>
                                    </div>
                                </div>
                                
                            </div>

                        ))}
                        </div>
                        
                        <h2>Obten hasta 40% dcto en productos complementos populares</h2>
                        <div className="max-h-[45vh] overflow-y-scroll">
                            {allProducts.map((producto, index) => (
                                <div className=" bg-white my-4 mx-4 border border-gray-300 p-4 flex items-center justify-center h-[7rem]">
                                    <div className=" flex-shrink-0 mr-4 w-2/6">
                                        <img
                                            src={producto.sizes[0].colors[0].imagen ? producto.sizes[0].colors[0].imagen : null}
                                            className="max-w-full"
                                        />
                                    </div>
                                    <div className="flex-1 grid grid-cols-4 gap-4 w-1/6">
                                        <div className="col-span-2">
                                            <h4 className="text-xs font-bold text-black">{producto.category}</h4>
                                            <h4 className="text-xs font-bold text-gray-500">{producto.nombre}</h4>
                                            <p className="text-sm leading-5 text-gray-500 ">
                                                <h4 className="font-bold text-black text-sm">{producto.valor * 0.6}</h4>
                                                <h4 className={`${" line-through text-gray-500"} font-bold text-sm`}>{producto.valor}</h4>
                                            </p>
                                        </div>
                                        <div className='w-3/6'>
                                            <div className='flex-1 grid grid-cols-4 gap-4'>


                                                {producto.sizes.map((size, index) => (

                                                    <button key={index} className={`${producto.size === selectedSize
                                                            ? "text-[0.7rem] border bg-black text-gray-100 w-5 h-5 font-bold transform duration-500 scale-110 md:hover:scale-110 md:hover:border-gray-500 rounded-lg"
                                                            : "text-[0.7rem] w-5 h-5 border border-gray-200 transform duration-500 md:hover:scale-110 md:hover:border-gray-500 rounded-lg"
                                                        }`}
                                                        onClick={() => handleSizeClick(size.size, producto)}>
                                                        {size.size}
                                                    </button>

                                                ))}


                                               
                                                    {selectedProduct === producto.id && selectedSize && (
                                                        <div className='grid grid-cols-5 gap-4'>

                                                            {producto.sizes
                                                                .find((size) => size.size === selectedSize)
                                                                .colors.map((color, index) => (
                                                                    <button
                                                                        className={`${color === "rojo" ? "border-2 border-black w-4 h-4"
                                                                            : "border border-gray-300 w-4 h-4"} 
                                                                        ${color.bg} md:mx-0 border rounded-full transform duration-500 hover:scale-110`}
                                                                        key={index}></button>
                                                                ))}

                                                        </div>
                                                    )}
                                               
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            ))}
                        </div>


                        <hr className='my-2'/>
                        <p className="text-sm leading-5 text-gray-500 ">
                            Total: <span className={`${totalPrice()>=precioLimite ? 'line-through text-amber-500' :"text-blue-500"} `}>{totalPrice()}</span>
                            {totalPrice()>=precioLimite ?<h4 className='text-blue-500'>{totalPrice()*descuento}</h4>:""}
                        </p>

                    </div>
                    
                </div>
            

                <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-center w-full gap-2">
                <span className="flex w-1/2 rounded-md shadow-sm  sm:ml-3 sm:w-auto">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="inline-flex  justify-center w-full rounded-md border border-transparent px-2 py-2 bg-black text-xs leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-1000 sm:text-sm sm:leading-5"
                        >
                            Seguir comprando
                        </button>
                    </span>
                    
                    
                    {cart.length ?<NavLink to='/pay' className="flex w-1/2 rounded-md shadow-sm  sm:ml-3 sm:w-auto bg-red-400">
                        <button
                            type="button"
                            
                            className="w-full inline-flex  justify-center rounded-md border border-transparent px-2 py-2 bg-black text-xs leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-1000 sm:text-sm sm:leading-5"
                        >
                            Terminar compra
                        </button>
                    </NavLink> : ""}
                </div>
            </div>
        </div>
    )
}
