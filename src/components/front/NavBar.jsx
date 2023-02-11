import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../CartProvider";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { BsBag } from 'react-icons/bs'
import firebaseApp from '../../firebase/config'
import { getAuth, signOut } from 'firebase/auth'


export const NavBar =(user)=>{
    
    const oferta=[{id:1, title: "Envíos gratis por compras superiores a $149.900"},
    {id:2, title: "Envíos a toda Colombia"},
    {id:3, title: "Paga al recibir"},
    {id:4, title: "Pack X3 unidades 20% OFF "}
    ]
    
    const [open,setOpen]=useState(false);
    const {totalProducts} = useCartContext()

    const [bartop, setBartop] = useState(true)

    const [currentIndex,setCurrentIndex] = useState(0)
    function nextSlide () {
    const isLastSlide = currentIndex === oferta.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex) 
  }
  setTimeout( nextSlide , 2500) 

  const [scroll, setScroll]=useState(0)
  window.onscroll = function() {
   // console.log("Vertical: " + window.scrollY);
   // console.log("Horizontal: " + window.scrollX);
  setScroll(window.scrollY)
  }
  const  auth = getAuth(firebaseApp)
    return (
        <>
            <div className="fixed z-10 shadown-md w-full top-0 left-0 " >
            {bartop===true ? <div  className='relative z-10 w-full bg-gray-700 top-0 text-center '>
                <div className="w-full h-[2rem] px-8  md:transform  md:hover:text-gray-700 
                flex items-center justify-center text-[0.6rem] text-amber-200 tracking-[0.3rem] uppercase ">
                    {oferta[currentIndex].title}
                </div>
                <div onClick={()=>setBartop(false)} className="absolute left-3 md:left-[3rem] content-center flex items-center
                top-[25%] text-white md:transform md:hover:text-gray-700 cursor-pointer"><AiOutlineClose/></div>
                </div>
                :""}
  
                <div className={`${scroll<=100 ? "bg-gradient-to-b from-black to-transparent  bg-opacity-[0.01] shadow-sm" : ""} flex transition-all duration-1000 bg-black relative items-center md:flex justify-center py-4 md:px-10 px-7`}>
                    <div className=" text-gray-300 z-100">
                        <NavLink to="/">
                            <div className=" text-xl md:text-2xl tracking-[0.1rem] text-gray-400">
                                ZOROBABEL
                            </div>
                        </NavLink>
                    </div>
                    <h1 className=" text-xl absolute right-[1.5rem] md:right-[4rem] top-[1.1rem] md:top-[1.5rem] text-gray-400 cursor-pointer">
                    <NavLink to='/cart'> <span className=' relative'><BsBag />
            {
              totalProducts() ? <span className="bg-blue-500 absolute bottom-[-10px] left-3 text-white text-base rounded-full px-2 ">
                {totalProducts()}
              </span> : ''
            }
            </span>
            </NavLink>
                    </h1>
                    <div onClick={() => setOpen(!open)} className="text-xl absolute left-[1.5rem] top-5 text-gray-400 cursor-pointer md:hidden">
                        {open==false ? <AiOutlineMenu/>:<AiOutlineClose/>}
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pt-2 pb-4 absolute md:static bg-black md:bg-transparent
                    md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-700 ease-in
                     ${open ? 'top-[3.5rem] opacity-100' : 'top-[-490px]'} md:opacity-100 `}>
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
                        <NavLink to='/sesion' className="grid justify-center cursor-pointer md:ml-8 text-xl md:my-0 py-2
                         text-white hover:text-gray-400 duration-500">
                            Iniciar sesión o registro
                        </NavLink>
               
                        <button onClick={()=> signOut(auth)} className="bg-black text-white rounded-lg py-2 px-4">Cerrar sesión</button>
                    </ul>
                   
                </div>
            </div>
         
        </>
    )
}
export default NavBar