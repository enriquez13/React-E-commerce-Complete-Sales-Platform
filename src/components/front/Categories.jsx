import { NavLink } from "react-router-dom"
import React from 'react'
import { DataCategorias } from "./DataCategorias"


export const Categories = () => {
  return (
  
<>

<div className=" grid justify-items-center my-10  md:font-semibold md:text-2xl text-lg text-white ">
            CATEGORIAS
</div>
            <div className="w-full max-w-full overflow-x-hidden grid sm:grid-cols-4 text-gray-100 ">
                {DataCategorias.map((category,index)=>(
                <NavLink to={`/categoria/${category.url}`} key={index} className=" w-full relative h-[24rem] md:h-[600px] mt-2">
                <img className="object-cover w-full h-full md:transform md:duration-200 md:hover:scale-105" src={category.src} />
                    <div className="absolute grid bottom-[50%] translate-y-[50%] w-full text-sm px-4 ">
                        <h3 className="place-self-center text-gray-200 text-2xl my-4 font-semibold" >{category.nombre}</h3>
                        <button className="w-1/2 rounded-xl place-self-center py-3 text-center  text-gray-200
                         border border-gray-400 md:hover:bg-opacity-80  font-extrabold tracking-wider bg-black
                        bg-opacity-50">{category.boton}</button>
                    </div>                
                </NavLink>
                )
                 )}
                
            </div>
            <h3 className="py-4 px-10 md:py-8  md:text-xl text-center w-full text-white">
            La ropa bonita no solo nos hace lucir bien, también aumenta nuestra confianza y mejora 
            nuestro estado de ánimo. Invertir en prendas atractivas y de alta calidad es una inversión 
            en nosotros mismos. ¡Hazte un favor y consigue ropa bonita para sentirte genial!
            </h3>
            
            </>
              )
            }