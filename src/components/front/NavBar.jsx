import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsBag } from 'react-icons/bs';
import { useCartContext } from "../../CartProvider";
import AnimatedText from "../AnimatedText/AnimatedText";
import firebaseApp from '../../firebase/config';

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const auth = getAuth(firebaseApp);
  const { totalProducts, OpenSlider, opens } = useCartContext();
  const closeOpen = () => OpenSlider(true);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logout successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };
    return (
        <> 
            <div className="fixed z-10 shadown-md w-full top-0 left-0 " >
            {opens === false ? <div className="relative z-10 w-full bg-gray-700 top-0 text-center ">
            <div className="w-full h-[2rem] flex items-center justify-center text-[0.6rem] text-amber-200 tracking-[0.3rem] uppercase" style={{ display: 'flex', alignItems: 'center' }}>
                <AnimatedText />
            </div>
            
                <div onClick={closeOpen} className="absolute left-3 md:left-[3rem] content-center flex items-center
                top-[25%] text-white md:transform md:hover:text-gray-700 cursor-pointer"><AiOutlineClose /></div>
                </div>: ""}
                    
               
                

                <div className={`${scroll <= 100 ? "bg-gradient-to-b bg-opacity-[0.01] from-black  md:h-[7rem] shadow-sm md:grid md:grid-cols-3"
                    : "md:h-[4rem] md:grid md:grid-cols-6" } 
                    ${open ? "bg-opacity-[1]" : ""}
                flex transition-all duration-1000 bg-black relative items-center justify-center py-4 md:px-10 px-7`}>
                    <div className={` ${scroll <= 100 ? "md:col-start-1 md:col-span-6" : "md:col-start-1 md:col-span-1" }
                     text-gray-300 z-100 md:col-start-1 md:col-span-1`}>
                        <NavLink to="/">
                            <div className="text-xl md:text-2xl tracking-[0.1rem] text-gray-400 text-center">
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
                    <div onClick={() => setOpen(!open)} className="text-xl absolute left-[1.5rem] top-5 text-gray-400 
                    cursor-pointer md:hidden ">
                        {open == false ? <AiOutlineMenu /> : <AiOutlineClose />}
                    </div>
                    <div className={`${scroll <= 100 ? "md:col-start-1 md:col-span-6 md:flex md:justify-center" :"md:col-start-2 md:col-span-6 md:flex md:justify-center"}`}>
                        <ul className={`md:flex md:items-center md:pb-0  absolute md:static bg-black bg-opacity-90 md:bg-transparent
                    md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-700 ease-in 
                     ${open ? 'top-[3.5rem]' : 'top-[-490px]'}  `}>
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
                            <NavLink to='/wompiWidget' className="grid justify-center cursor-pointer md:ml-8 text-xl md:my-0 py-2
                         text-white hover:text-gray-400 duration-500">
                                Event
                            </NavLink>             
                            <NavLink to='/adminn' className="grid justify-center cursor-pointer md:ml-8 text-xl md:my-0 py-2
                         text-white hover:text-gray-400 duration-500">
                                Admin2
                            </NavLink>                   
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default NavBar