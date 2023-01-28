import { NavLink } from "react-router-dom"

import React from 'react'

export const Categories = () => {
  return (
  
<>

<div className="grid justify-items-center my-10  md:font-semibold md:text-2xl text-lg text-white ">
            CATEGORIAS
</div>
            <div className=" grid sm:grid-cols-4 text-gray-100 ">
                <NavLink to="/categoria/camiseta" className=" md:p-1 w-full relative h-[24rem] md:h-[600px] mt-2">
       
                <img className=" object-cover w-full h-full md:transform md:duration-200 md:hover:scale-105" src="https://i.pinimg.com/564x/5d/0c/42/5d0c422a9e779b0856f060e1906a5293.jpg" />
                    <div className="absolute grid bottom-[15%] w-full text-sm px-4">
                        <h3 className="place-self-center text-gray-200 text-2xl my-4 font-semibold">Camisetas</h3>
                        <button className="w-1/2 rounded-xl place-self-center py-3 text-center border-gray-200 text-gray-200
                        bg-transparent border  hover:bg-gray-200 hover:text-black font-extrabold tracking-wider">Comprar Ahora</button>
                    </div>                
                </NavLink>
                <NavLink to="/categoria/camibuso" className="md:p-1 w-full relative h-[24rem] md:h-[600px] mt-2">
                <img className="object-cover w-full h-full md:transform md:duration-200 md:hover:scale-105" src="https://i.pinimg.com/564x/6f/bd/75/6fbd7592e41af6362a742a6ccf5b21ca.jpg" />
                <div className="absolute grid bottom-[15%] w-full text-sm px-4">
                <h3 className="place-self-center text-gray-200 text-2xl my-4 font-semibold">Camibusos</h3>
                        <button className="w-1/2 rounded-xl place-self-center py-3 text-center border-gray-200 text-gray-200
                        bg-transparent border  hover:bg-gray-200 hover:text-black font-extrabold tracking-wider"> Comprar Ahora</button>
                    </div>      
                </NavLink>
                <NavLink to="/categoria/buzo" className="md:p-1 w-full relative h-[24rem] md:h-[600px] mt-2">
                    <img className="object-cover w-full h-full md:transform md:duration-200 md:hover:scale-105" 
                        src="https://i.pinimg.com/564x/35/b4/91/35b49108b76f283bee99219db40babbb.jpg" />
                    <div className="absolute grid bottom-[15%] w-full text-sm px-4">
                    <h3 className="place-self-center text-gray-200 text-2xl my-4 font-semibold">Buzos</h3>
                        <button className="w-1/2 rounded-xl place-self-center py-3 text-center border-gray-200 text-gray-200
                        bg-transparent border  hover:bg-gray-200 hover:text-black font-extrabold tracking-wider"> Comprar Ahora</button>
                    </div>     
                </NavLink>
                <NavLink to="/categoria/chaqueta" className="md:p-1 w-full relative h-[24rem] md:h-[600px] mt-2">
                <img className="object-cover w-full h-full md:transform md:duration-200 md:hover:scale-105" 
                src="https://i.pinimg.com/564x/b7/1d/9c/b71d9c0c77a746299ca606163761149c.jpg" />
                <div className="absolute grid  bottom-[15%] w-full text-sm px-4">
                <h3 className="place-self-center text-gray-200 text-2xl my-4 font-semibold">Chaquetas</h3>
                        <button className="w-1/2 rounded-xl place-self-center py-3 text-center border-gray-200 text-gray-200
                        bg-transparent border  hover:bg-gray-200 hover:text-black font-extrabold tracking-wider"> Comprar Ahora</button>
                    </div>      
                </NavLink>

                
            </div>
            <h3 className="py-4 px-10 md:py-8  md:text-xl text-center w-full text-white">Creamos prendas para personas que buscan productos de calidad que los acompañen en su día a día.</h3>
            
            </>
              )
            }