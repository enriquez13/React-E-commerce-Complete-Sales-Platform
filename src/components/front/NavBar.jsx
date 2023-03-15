import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsBag } from 'react-icons/bs';
import { useCartContext } from "../../CartProvider";
import AnimatedText from "../AnimatedText/AnimatedText";
import firebaseApp from '../../firebase/config';
import { DataCategorias, DataIformacion } from "./DataCategorias";
import { Modal } from "../Modal/Modal";

function NavBar(props) {
  //Ubicación por ruta
  const location = useLocation();
  //showmodal
  const { data, allProducts, detalleId } = props;
  const [showModal, setShowModal] = useState(false); 
  const closeModaldetail = () => {
    setShowModal(false);
  };
  const {addProduct, closeModal, cart, removeProduct, totalPrice } = useCartContext()

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
           <div className="fixed z-10 shadown-md w-full top-0 left-0 max-w-screen " >
            
           {location.pathname === `/detalle/${detalleId}` ? null : 
            opens === false && scroll <= 100? <div className="relative z-10 w-full bg-gray-700 top-0 text-center "> 
            <div className="w-full h-[2rem] flex items-center justify-center text-[0.6rem] text-amber-200 tracking-[0.3rem] uppercase" style={{ display: 'flex', alignItems: 'center' }}>
                <AnimatedText />
            </div> 
            
                <div onClick={closeOpen} className="absolute left-3 md:left-[3rem] content-center flex items-center
                top-[25%] text-gray-200 md:transform md:hover:text-gray-700 cursor-pointer"><AiOutlineClose /></div>
                </div>: ""
              }
                    
               
                

                <div className={`${scroll <= 100 ? " bg-opacity-[0.01] from-black  md:h-[7rem] md:grid md:grid-cols-3"
                    : "md:h-[4rem] md:grid md:grid-cols-6" } 
                    ${open ? "bg-opacity-[1]" : ""}
                flex transition-all duration-1000 bg-black relative items-center justify-center py-4 md:px-10 px-7`}>
                    <div className={` ${scroll <= 100 ? "md:col-start-1 md:col-span-6" : "md:col-start-1 md:col-span-1" }
                     text-gray-300 z-[50] md:col-start-1 md:col-span-1  h-full`}>
                        <NavLink to="/">
                            <div className="text-xl md:text-2xl tracking-[0.1rem] text-gray-400 text-center">
                                ZOROBABEL
                            </div>
                        </NavLink>
                    </div>
                    <h1 className=" text-xl absolute right-[1.5rem] md:right-[4rem] top-[1.1rem] md:top-[1.5rem] text-slate-400 cursor-pointer">
                        <div onClick={()=> setShowModal(true)}> <span className=' relative'><BsBag />
                            {
                                totalProducts() ? <span className="bg-blue-500 absolute bottom-[-10px] left-3 text-white text-base rounded-full px-2 ">
                                    {totalProducts()}
                                </span> : ''
                            }
                        </span>
                        </div>

                    </h1>
                    <div onClick={() => setOpen(!open)} className="text-xl absolute left-[1.5rem] top-5 text-gray-400 
                    cursor-pointer md:hidden ">
                        {open == false ? <AiOutlineMenu /> : <AiOutlineClose />}
                    </div>
                    <div className={`${scroll <= 100 ? "md:col-start-1 md:col-span-6 md:flex md:justify-center" 
                    :"md:col-start-2 md:col-span-6 md:flex md:justify-center"} `}>

                        <ul className={`md:flex md:items-center md:pb-0  absolute md:static bg-black bg-opacity-[0.96] md:bg-transparent
                    md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-700 ease-in 
                     ${open ? 'top-[3.5rem] overflow-y-scroll h-[100vh] pb-[10rem]' : 'top-[-1000px]'} `}>

                            <div className="md:hidden grid justify-center cursor-pointer md:ml-8 text-xl md:my-0 py-6 text-white
                         hover:text-gray-400 duration-500 font-semibold ">
                               Nuestros productos
                            </div>

                            {DataCategorias.map((categorias,index)=>(
                            <NavLink key={index} to={`/categoria/${categorias.url}`} className="mx-10  grid grid-cols-3 gap-4 cursor-pointer 
                            md:ml-8 text-xl md:my-0 py-2 text-gray-400  hover:text-gray-800 duration-500" 
                            onClick={() => setOpen(!open)}>
                            <div className="md:hidden grid-row-span-2">
                              <img src={categorias.src} className="w-[6rem] h-[6rem] object-cover"/>
                            </div>
                            <div className="col-span-2 flex flex-col justify-center items-left mx-4  ">
                              <div className="mb-2 uppercase text-sm font-semibold">{categorias.nombre}</div>
                              <div className="md:hidden text-sm text-gray-300 font-semibold">{categorias.detalle}</div>
                            </div>
                          </NavLink>
                            ))}
                            <hr className="bg-gray-900 opacity-30 mx-10  my-8" />


                            {DataIformacion.map((informacion, index)=>(   
                            <NavLink key={index} to={`/${informacion.url}`}
                            className="grid justify-items-center content-center  cursor-pointer md:ml-8 text-xl md:my-0 py-2
                            text-gray-400  hover:text-gray-800 duration-500">
                                <h3  className="mb-2 uppercase text-sm font-semibold">{informacion.nombre}</h3>
                            </NavLink>
                            ))}
                          
                       
                                 
                                          
                        </ul>
                     
                    </div>
                </div>
            </div>
            {showModal && (
        <Modal closeModal={closeModaldetail} addProduct={addProduct} cart={cart} removeProduct={removeProduct}  totalPrice={totalPrice} totalProducts={totalProducts} allProducts={allProducts} />
      )}
        </>
    )
}
export default NavBar