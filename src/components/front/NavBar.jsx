import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../CartProvider";
import { useState } from "react";
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { BsBag } from 'react-icons/bs'


export const NavBar =()=>{
    const [open,setOpen]=useState(false);
    const {totalProducts} = useCartContext()

    const [bartop, setBartop] = useState(true)

    return (
        <>

            <div className="fixed shadown-md w-screen top-0 md:h-[20px] left-0 z-10 bg-[#1a1a1a] " >
            {bartop===true ? <div  className='relative z-20 w-full h-[3rem] bg-amber-50 top-0 text-center'>
                <div className="pt-[0.6rem] text text-gray-500 md:transform md:hover:text-gray-700">
                    Envíos gratis por compras superiores a $149.900
                </div>
                <div onClick={()=>setBartop(false)} className="absolute left-3 md:left-[3rem] content-center 
                top-[32%] text-black md:transform md:hover:text-gray-700 cursor-pointer"><AiOutlineClose/></div>
                
                
                </div>
                :""}
                <div className='flex relative items-center md:flex justify-center bg-black py-4 md:px-10 px-7'>
                    <div className=" text-gray-400">
                        <NavLink to="/">
                            <div className=" text-xl md:text-2xl">
                                ZOROBABEL
                            </div>
                        </NavLink>
                    </div>
                    <h1 className=" text-xl absolute right-[1.5rem] md:right-[4rem] top-4 md:top-[1.5rem] text-gray-400 cursor-pointer">
                    <NavLink to='/cart'> <span className=' relative'><BsBag />
            {
              totalProducts() ? <span className="absolute bottom-[-10px] left-3 text-white text-base bg-blue-600 rounded-full px-2 ">
                {totalProducts()}
              </span> : ''
            }
            </span>
            </NavLink>
                    </h1>
                    <div onClick={() => setOpen(!open)} className="text-xl absolute left-[1.5rem] top-5 text-gray-300 cursor-pointer md:hidden">
                        {open==false ? <AiOutlineMenu/>:<AiOutlineCloseCircle/>}
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:bg-black
                    md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 
                    ease-in ${open ? 'top-[3.5rem] opacity-100' : 'top-[-490px]'} md:opacity-100 `}>
                        <NavLink to="/" className="grid justify-center cursor-pointer md:ml-8 text-xl md:my-0 py-2 text-white
                         hover:text-gray-400 duration-500" 
                        onClick={() => setOpen(!open)}>             
                            Inicio
                        </NavLink>
                        <NavLink to="/categoria/camiseta" className="grid justify-center cursor-pointer md:ml-8 text-xl md:my-0 py-2
                         text-white hover:text-gray-400 duration-500" onClick={() => setOpen(!open)}> 
                            Camisetas
                        </NavLink>
                        <NavLink to="/categoria/buzo" className="grid justify-center cursor-pointer md:ml-8 text-xl md:my-0 py-2
                         text-white hover:text-gray-400 duration-500" onClick={() => setOpen(!open)}> 
                            Buzos
                        </NavLink>
                        <NavLink to="/categoria/chaqueta" className="grid justify-center cursor-pointer md:ml-8 text-xl md:my-0 py-2
                         text-white hover:text-gray-400 duration-500" onClick={() => setOpen(!open)}> 
                            Chaquetas
                        </NavLink>
                        <NavLink className="grid justify-center cursor-pointer md:ml-8 text-xl md:my-0 py-2
                         text-white hover:text-gray-400 duration-500">
                            Contacto
                        </NavLink>
                        <NavLink className="grid justify-center cursor-pointer md:ml-8 text-xl md:my-0 py-2
                         text-white hover:text-gray-400 duration-500">
                            Sobre nosotros
                        </NavLink>
                    </ul>
                </div>
            </div>
            
        </>
    )
}
export default NavBar

