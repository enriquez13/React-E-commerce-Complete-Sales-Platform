import { NavLink } from "react-router-dom"

import React from 'react'

export const Categories = () => {
  return (
  
<>

<div className="grid justify-items-center my-7 text-lg text-white ">
            CATEGORIAS
</div>
            <div className=" grid md:grid-cols-4 text-gray-100 ">
                <NavLink to="/categoria/camiseta" className="w-full relative h-[24rem] md:h-[600px] mt-2">
       
                <img className="object-cover w-full h-full md:transform md:duration-200 md:hover:scale-105" src="https://i.pinimg.com/564x/c6/1c/2e/c61c2e114bb0e7abb665fa75ee093298.jpg" />
                    <div className="absolute grid bottom-[50px] w-full text-sm px-4">
                        <div className="w-1/2  rounded-xl place-self-center py-3 text-center  bg-zinc-900 "> Ver camisetas</div>
                    </div>                
                </NavLink>
                <NavLink to="/categoria/camibuso" className="w-full relative h-[24rem] md:h-[600px] mt-2">
                <img className="object-cover w-full h-full md:transform md:duration-200 md:hover:scale-105" src="https://i.pinimg.com/564x/6f/bd/75/6fbd7592e41af6362a742a6ccf5b21ca.jpg" />
                <div className="absolute grid bottom-[50px] w-full text-sm px-4">
                        <div className="w-1/2  rounded-xl place-self-center py-3 text-center  bg-zinc-900 "> Ver camibusos</div>
                    </div>      
                </NavLink>
                <NavLink to="/categoria/buzo" className="w-full relative h-[24rem] md:h-[600px] mt-2">
                    <img className="object-cover w-full h-full md:transform md:duration-200 md:hover:scale-105" 
                        src="https://i.pinimg.com/564x/35/b4/91/35b49108b76f283bee99219db40babbb.jpg" />
                    <div className="absolute grid bottom-[50px] w-full text-sm px-4">
                        <div className="w-1/2  rounded-xl place-self-center py-3 text-center  bg-zinc-900 "> Ver buzos</div>
                    </div>     
                </NavLink>
                <NavLink to="/categoria/chaqueta" className="w-full relative h-[24rem] md:h-[600px] mt-2">
                <img className="object-cover w-full h-full md:transform md:duration-200 md:hover:scale-105" 
                src="https://i.pinimg.com/564x/b7/1d/9c/b71d9c0c77a746299ca606163761149c.jpg" />
                <div className="absolute grid bottom-[50px] w-full text-sm px-4">
                        <div className=" w-1/2  rounded-xl place-self-center py-3 text-center  bg-zinc-900 "> Ver chaquetas</div>
                    </div>      
                </NavLink>
            </div>
            </>
              )
            }