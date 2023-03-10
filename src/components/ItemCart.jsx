import React from "react";
import { useCartContext } from "../CartProvider";
import { useState } from "react";
//import { ItemCount } from "./ItemCount";

const ItemCart = ({product})=>{
 const {removeProduct}  = useCartContext()

    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext();

        const onAdd = (quantity, talla, color, ide, img) =>{
        setGoToCart(true)
        addProduct(product, quantity, talla, color, ide, img)
    }
    return(
        <>
            <div className=" text-black mx-2 border rounded-xl flex md:grid-cols-4 my-1">
                <div className="p-1 flex-none w-1/4 items-center justify-center">
                    <img className="rounded-xl md:w-4/6" src={product.imagenes[0].img} />
                    {console.log(product)}
                </div>

                <div className="  w-2/4 grid items-center ml-4 ">
                    <div className="">
                    <h3 className="text-[0.9rem] ">{product.category} {product.nombre}</h3>
                    <h3 className="text-[0.9rem]">Talla: {product.talla}</h3>
                    <h3 className="text-[0.9rem] ">Color: {product.color}</h3>
                    <h3 className="text-[0.9rem]"> ${product.valor} </h3> 
                    </div>
                </div>

                <div className="relative flex-initial w-1/4">
                <button className="absolute top-1 right-3 text-md md:transform md:duration-200 md:hover:scale-125" onClick={()=> removeProduct(product.ide)}>x</button>
                    <div className=" h-full flex flex-col justify-center items-center w-10 md:w-1/4 text-md ">
                        <button className="border rounded-full w-6 md:transform md:duration-200 md:hover:scale-110 "
                            disabled={product.quantity <= 1} onClick={() => onAdd(-1, product.talla, product.color, product.ide)}>-</button>
                        <span className="flex justify-center  w-6  ">{product.quantity}</span>                        
                        <button className=" text-blue-100 bg-blue-600 w-6 rounded-full md:transform md:duration-200 md:hover:scale-110"
                            disabled={product.quantity >= product.cantidad} onClick={() => onAdd(1, product.talla, product.color, product.ide)}>+</button>              
                    </div>
                </div>
            </div>
   
        </>
    )
};
export default ItemCart;