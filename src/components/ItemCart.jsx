import React from "react";
import { useCartContext } from "../CartProvider";
import { useState } from "react";
//import { ItemCount } from "./ItemCount";

const ItemCart = ({product})=>{
 const {removeProduct}  = useCartContext()

    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext();

        const onAdd = (quantity, talla, color) =>{
        setGoToCart(true)
        addProduct(product, quantity, talla, color)
    }
    return(
        <>
            <div className=" text-black mx-2 border rounded-xl flex md:grid-cols-4 my-1">
                <div className="p-1 flex-none w-1/4 items-center justify-center">
                    <img className="rounded-xl md:w-2/6" src={product.imagen} />
                </div>

                <div className="pl-4 flex-initial w-2/4">
                    <h3 className="text-[0.8rem] my-1">{product.nombre}</h3>
                    <h3 className="text-[0.8rem]">Talla: {product.talla}</h3>
                    <h3 className="text-[0.8rem] mb-1">Color: {product.color}</h3>
                    <h3 className="text-[0.8rem]"> ${product.valor} </h3> 
                </div>

                <div className="relative flex-initial w-1/4">
                <button className="absolute top-1 right-3 text-md " onClick={()=> removeProduct(product.id)}>x</button>
                    <div className=" h-full flex flex-col justify-center items-center w-10 md:w-1/4 text-md ">
                        <button className="border rounded-full w-6  "
                            disabled={product.quantity <= 1} onClick={() => onAdd(-1, product.talla, product.color)}>-</button>
                        <span className="flex justify-center  w-6  ">{product.quantity}</span>                        
                        <button className=" text-blue-100 bg-blue-600 w-6 rounded-full"
                            disabled={product.quantity >= product.cantidad} onClick={() => onAdd(1, product.talla, product.color)}>+</button>              
                    </div>
                </div>
            </div>
   
        </>
    )
};
export default ItemCart;