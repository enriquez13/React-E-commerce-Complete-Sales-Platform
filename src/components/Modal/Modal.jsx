import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai";
import { ListaColores } from '../ListaColores';
//import { BsBag } from 'react-icons/bs';

const descuento = 0.6
const precioLimite = 149900

export const Modal = (props) => {
    const {addProduct, closeModal, cart, removeProduct, totalPrice, totalProducts, allProducts} = props
    const [selectedSize, setSelectedSize] = useState({});
    const [selectedColor, setSelectedColor] = useState({});
    const [selectedProduct, setSelectedProduct] = useState({});
    const [selectedImagen, setSelectedImagen] = useState()
    const [goToCart, setGoToCart] = useState(false)
    
    
    const onAdd = (quantity, talla, color, ide, img) =>{
        setGoToCart(true)
        addProduct(selectedProduct, quantity, talla, color, ide, img)
    }
  const handleSizeClick = (size, producto) => {
    setSelectedSize(size);
    setSelectedProduct(producto);
  };
  const handleColorClick = (color) => {
    setSelectedColor(color)
    setSelectedImagen(color.imagen)
  }
  function agregar(){
    onAdd(1, selectedSize.size, selectedColor.color, selectedColor.idepro, selectedColor.imagen)
    
    setSelectedSize("")
    setSelectedProduct("")
    setSelectedColor("")
    //setImg("")
   
}
  

    return (
        <div className=" fixed w-full z-[100]  right-0 inset-y-0 pt-0 md:mt-[10rem]  sm:flex sm:items-center sm:justify-center ">
            <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
                <div className="absolute inset-0 bg-black bg-opacity-80  "></div>
            </div>
            <div className='relative h-[120vh] bg-gray-100'>
            <div className="h-[95vh] max-h-[100vh] md:max-h-[88vh] overflow-y-scroll  rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full ">
                <div className="  pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="h-[70vh] text-center sm:mt-5 mx-2 relative">
                        <h3 className="text-xl font-bold leading-6  text-gray-900 my-4 ">
                           Recién agregados al carrito
                        </h3>
                        
                        
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute right-3 md:right-[3rem] content-center flex items-center
                            top-[-5px] text-black md:transform md:hover:text-gray-700 cursor-pointer 
                            bg-black bg-opacity-5 rounded-full p-1 text-xl"
                        >
                            <AiOutlineClose />
                        </button>
                        

                        <div className="  "> {// aquí overflow-y-scroll
                        }
                        {cart?.map((product, index) => (
                            <>
                            <div className=" grid grid-cols-3  bg-white" key={index} >
                                <div className='h-full flex items-center justify-center relative'>
                                    <img src={cart[index].img} className="max-w-[4rem] max-y-[4rem] object-cover" />
                                    <p className=" text-xl absolute right-[1.3rem] md:left-[4rem] top-[1.2rem] md:top-[1.5rem] text-gray-400 cursor-pointer">
                       <span className=' relative'>
                            {
                                totalProducts() ? <span className="bg-blue-500 absolute bottom-[-2px] left-[-20px] text-white text-sm rounded-full px-[0.4rem] ">
                                    {product.quantity}
                                </span> : ''
                            }
                            
                        </span> 
                       
                    </p>
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
      <span className={`${cart.length > 2 && index > 0 ? 'line-through text-gray-400' : 'text-gray-700'} font-bold`}>
        {product.valor}
      </span>
      {totalPrice() >= precioLimite && index > 0 ? (
        <span className='text-gray-700 font-bold pl-2'>
          {product.valor * descuento}
        </span>
      ) : " "}
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
                            <hr />

                            </>))}
                        </div>
                        
                        <h2 className='text-lg font-bold mt-4'>Obten 40% dcto en productos populares</h2>
                        <div className="">{// aquí overflow-y-scroll
                        }
                            {allProducts.map((producto, index) => (
                                <div className=" bg-white my-4 mx-4 border border-gray-300 px-4 py-1 grid grid-cols-8 h-[7rem] justify-items-center content-center">
                                    <div className="container h-[5rem] w-[5rem] col-span-2">
                                        <img className="image object-cover w-full h-full "
                                            src={ selectedProduct.id === producto.id && selectedImagen ? selectedImagen : producto.sizes[0].colors[0].imagen }
                                            
                                        />
                                    </div>
                               
                                        <div className="col-span-2">
                                            <h4 className="text-xs font-bold text-black">{producto.category}</h4>
                                            <h4 className="text-xs font-bold text-gray-500">{producto.nombre}</h4>
                                            <p className="text-sm leading-5 text-gray-500 ">
                                                <span className="font-bold text-black text-sm">{producto.valor * 0.6}</span>
                                                <span className={`${" line-through text-gray-500"} font-bold text-sm`}>{producto.valor}</span>
                                            </p>
                                        </div>
                                        <div className='col-span-4'>
                                            <div className='grid grid-cols-4 gap-4 mx-2'>


                                                {producto.sizes.map((size, index) => (

                                                    <button key={index} className={`${producto.size === selectedSize
                                                            ? "text-[0.7rem] border bg-black text-gray-100 w-5 h-5 font-bold transform duration-500 scale-110 md:hover:scale-110 md:hover:border-gray-500 rounded-lg"
                                                            : "text-[0.7rem] w-5 h-5 border border-gray-200 transform duration-500 md:hover:scale-110 md:hover:border-gray-500 rounded-lg"
                                                        }`}
                                                        onClick={() => handleSizeClick(size, producto)}>
                                                        {size.size}
                                                    </button>

                                                ))}


                                            </div>
                                            <div className='grid grid-cols-6 gap-1 my-2 '>
                                                    {selectedProduct.id === producto.id && selectedSize.size && (
                                                        <>

                                                            {producto.sizes
                                                                .find((size) => size.size === selectedSize.size)
                                                                .colors.map((color, index) => (
                                                                    <button
                                                                    onClick={() => handleColorClick(color)}
                                                                        className={`${color.color === "" ? "border-2 border-black w-5 h-5"
                                                                            : "border border-gray-300 w-5 h-5"} md:mx-0 border 
                                                                            rounded-full transform duration-500 hover:scale-110 ${ListaColores[color.color]}`}
                                                                        key={color.idepro}/>
                                                                ))}

                                                        </>
                                                    )}
                                               
                                            </div>
                                            <button onClick={agregar}
                                            className='bg-black text-white border rounded-lg px-3 py-1 text-sm' disabled={setSelectedColor}>Agregar</button>
                                        </div>

                                    </div>
                           

                            ))}
                        </div>
                    </div>
                    
                </div>
                </div>

                <div className="h-[10vh]  sm:max-w-lg sm:w-full bg-gray-50  fixed bottom-0 w-full shadow-md grid justify-items-center content-center">
                <h3 className="text-sm leading-5 text-gray-500 w-full text-center pt-1">
                            <span className='font-bold text-black'>Total:</span> <span className={`${ 'text-black font-bold'}`}>
                                {totalPrice()}</span>
                        </h3>
                    
                    <div className='px-6 py-1 sm:px-6 w-full gap-2 flex'>
                    {cart.length ?
                    <NavLink to='/pay' className=" w-1/2">
                        <button 
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent px-2 py-2 
                            bg-black text-sm leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none 
                            focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-1000 sm:text-sm sm:leading-5"
                        >
                            Terminar compra
                        </button></NavLink>
                        
                    : ""}
                    <div className='w-1/2'>
                    <button onClick={closeModal}
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent px-2 py-2 
                            bg-black text-sm leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none 
                            focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-1000 sm:text-sm sm:leading-5"
                        >
                            Seguir comprando
                        </button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
