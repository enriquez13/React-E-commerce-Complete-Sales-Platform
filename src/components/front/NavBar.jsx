import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../CartProvider";
import { useState } from "react";
import { AiOutlineMenu,AiOutlineCloseCircle} from "react-icons/ai"

export const NavBar =()=>{
    let [open,setOpen]=useState(false);
    const {totalProducts} = useCartContext()
    return (
        <>

            <div className="fixed shadown-md w-screen top-0  md:h-[20px] left-0 z-10 bg-[#1a1a1a]" >
                <div className='flex items-center md:flex  justify-center bg-black py-4 md:px-10 px-7'>
                    <div className=" text-gray-400">
                        <NavLink to="/">
                            <div className=" text-xl md:text-2xl">
                                ZOROBABEL
                            </div>
                        </NavLink>
                    </div>

                    <div onClick={() => setOpen(!open)} className="text-xl absolute right-8 top-4 text-gray-300 cursor-pointer md:hidden">
                        {open==false ? <AiOutlineMenu/>:<AiOutlineCloseCircle/>}
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:bg-black
                    md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 
                    ease-in ${open ? 'top-[3.5rem] opacity-100' : 'top-[-490px]'} md:opacity-100 `}>
                        <li className="cursor-pointer md:ml-8 text-xl md:my-0 py-2">
                            <NavLink to="/" className="text-white hover:text-gray-400 duration-500">inicio</NavLink>
                        </li>
                        <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
                            <NavLink to="/categoria/camiseta" className="text-white hover:text-gray-400 duration-500">camisetas</NavLink>
                        </li>
                        <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
                            <NavLink to="/categoria/buzo" className="text-white hover:text-gray-400 duration-500">Buzos</NavLink>
                        </li>
                        <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7 text-white hover:text-gray-400 duration-500">
                            Contacto
                        </li>
                        <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7 text-white hover:text-gray-400 duration-500">
                            Sobre nosotros
                        </li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}
export default NavBar

