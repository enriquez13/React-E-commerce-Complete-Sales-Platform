import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
//import { getAuth, signOut } from 'firebase/auth';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsBag } from 'react-icons/bs';
import { useCartContext } from "../../CartProvider";
import AnimatedText from "../AnimatedText/AnimatedText";
//import firebaseApp from '../../firebase/config';
import { Modal } from "../Modal/Modal";
import { CategoriasNavBar } from "./CategoriasNavBar";
import { InformacionNavBar } from "./InformacionNavBar";


function NavBar(props) {
  //Ubicación por ruta
  const location = useLocation();
  //showmodal
  const { allProducts, detalleId, categoriaId } = props;
  const [showModal, setShowModal] = useState(false); 
  //const closeModaldetail = () => {
  //  setShowModal(false);
  //};
  const {addProduct, cart, removeProduct, totalPrice } = useCartContext()

  const [open, setOpen] = useState(false);
  function openNavBar (){
    setOpen(!open)
  }
  const [scroll, setScroll] = useState(0);
  //const auth = getAuth(firebaseApp);
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

  //const handleLogout = () => {
   // signOut(auth)
  //    .then(() => {
  //      console.log("Logout successful");
  //    })
  //    .catch((error) => {
   //     console.error(error);
   //   });
      //};
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
                flex transition-all duration-1000 bg-black relative items-center justify-center py-4 md:px-10`}>
                    <div className={` ${scroll <= 100 ? "md:col-start-1 md:col-span-6" : "md:col-start-1 md:col-span-1" }
                     text-gray-300 z-[50] md:col-start-1 md:col-span-1 h-full grid items-center`}>
                       
                            <ul className="text-xl md:text-2xl tracking-[0.1rem] text-gray-400 text-center">
                            <NavLink to="/" >
                              ZOROBABEL
                            </NavLink>
                            </ul>
                    </div>
                    
                    <div onClick={()=> setShowModal(true)} 
                    className="z-[50] p-1 text-xl absolute right-[1.5rem] md:right-[1.8rem] top-[1.1rem] md:top-[25%] text-slate-400 ">
                        <p className=' relative cursor-pointer'><BsBag />
                            {
                                totalProducts() ? <span className="bg-blue-500 absolute bottom-[-10px] left-3 text-white text-base rounded-full px-2 ">
                                    {totalProducts()}
                                </span> : ''
                            }
                        </p>
                        
                    </div>
                    <div onClick={() => openNavBar()} className="text-xl absolute left-[1.5rem] top-5 text-gray-400 
                    cursor-pointer md:hidden ">
                        {open == false ? <AiOutlineMenu /> : <AiOutlineClose />}
                    </div>
                    <div className={`${scroll <= 100 ? "md:col-start-1 md:col-span-6 md:flex md:justify-center" 
                    :" md:col-start-2 md:col-span-6 md:flex md:justify-center items-center"} `}>

                        <ul className={`md:flex md:items-center md:pb-0  absolute md:static bg-black bg-opacity-[0.96] md:bg-transparent
                    md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-700 ease-in
                     ${open ? 'top-[3.5rem] overflow-y-scroll h-[100vh] pb-[10rem]' : 'top-[-1000px]'} `}>

                            <div className="md:hidden grid justify-center cursor-pointer md:ml-8 text-xl md:my-0 py-6 text-white
                         hover:text-gray-400 duration-500 font-semibold ">
                               Nuestros productos
                            </div>
                            <CategoriasNavBar openNavBar={openNavBar}/>
                            <hr className="md:hidden bg-gray-900 opacity-30 mx-10 my-8" />
                            <InformacionNavBar />  
                        </ul>
                     
                    </div>
                </div>
            </div>
            {// Compenza el espacio que ocupa NavBar en las diferentes pestañas
            }
            {location.pathname === `/detalle/${detalleId}` ? <div className="h-[3.7rem] md:h-0"></div> 
            :  null}
            {location.pathname === `/categoria/${categoriaId}` ? <div className="h-[4rem] md:h-[7rem]"></div> 
            :  null}
            
            
            {showModal && (
        <Modal closeModal={() => setShowModal(false)} addProduct={addProduct} cart={cart} removeProduct={removeProduct}  totalPrice={totalPrice} totalProducts={totalProducts} allProducts={allProducts} />
      )}
        </>
    )
}
export default NavBar