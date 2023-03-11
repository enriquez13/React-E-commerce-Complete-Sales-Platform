import React from 'react'
import { useEffect } from 'react';
import { BsChevronCompactLeft} from "react-icons/bs";
import { BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import {RxShadowOuter} from "react-icons/rx";
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const Banner = () => {
  const slides = [
   
    {url:"https://i.pinimg.com/564x/1a/45/c1/1a45c1691dfb20a1b147db55d4d85265.jpg", boton:"NEW COLLECTION"},
    {url:"https://i.pinimg.com/564x/cc/db/e7/ccdbe7178ad70dad780b4bb43de3d3f4.jpg" , boton:"BEST DESIGN"},
    {url:"https://i.pinimg.com/564x/cc/14/22/cc1422addc7cf09200ea00ef90252e9c.jpg", boton:"SUMMER"},
    {url:"https://i.pinimg.com/564x/2e/d5/85/2ed585f8884d06b781056d7eb1584d42.jpg", boton:"WINTER"},
    {url:"https://i.pinimg.com/564x/f5/a6/3c/f5a63c3507b50cf6fce8438065fe0725.jpg", boton:"MEN'S SHOP"},
 
   ]


  const[verificacion, SetVerificacion] = useState(true) 
  const [currentIndex,setCurrentIndex] = useState(0) 

  function prevSlide () {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)  
    SetVerificacion(!verificacion)
  }
  function nextSlide () {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex) 
    
  }
 //{console.log(verificacion)}
 useEffect(() => {
 let interval = setInterval( 
    nextSlide , 2500)  
    return () => clearInterval(interval)
 })
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <>

<div className='  w-full md:max-h-[500px]  m-auto  relative group text-gray-100 ' style={{ height: '80vh' }}>
  <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className=' bg-top w-full h-full  bg-cover  duration-1000 transition-all transform-gpu' ></div>
  
  <div onClick={prevSlide}  className='hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  text-3xl md:text-[3.5rem]  rounded-full p-2 z-10'><BsChevronCompactLeft /></div>
  <div onClick={nextSlide} className='hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5  text-3xl md:text-[3.5rem]  rounded-full p-2 z-10'><BsChevronCompactRight /></div>
  
  <div  className='w-full absolute top-[50%] md:top-[58%] translate-y-[-50%]  md:translate-y-[-58%] text-center text-3xl md:text-[4.1rem]  rounded-lg  
    font-light text-white z-0 tracking-[0rem] '>{slides[currentIndex].boton}
  </div>
  
  <div className='w-full h-[2rem] absolute top-[65%] md:top-[75%] translate-y-[-65%] md:translate-y-[-75%] '>
  <NavLink to='/products' className="flex justify-center">  
    <div  className='text-center w-1/3 md:max-w-[8rem]
  text-sm rounded-lg py-3 md:hover:bg-opacity-80  font-xs 
  bg-black tracking-[0.em] bg-opacity-50 border border-gray-400 '>SHOP NOW</div>
  </NavLink>
  </div>
    <div className='flex absolute bottom-[-5%] w-full justify-center '>
    {slides.map((slide, slideIndex) =>(
      <div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className={` ${slideIndex == currentIndex ? "text-[0.8rem] mt-[0.29rem] mb-[0.29rem] mx-2 ": "text-[1.4rem]"} mx-2 cursor-pointer`}>
        {slideIndex==currentIndex?<RxShadowOuter />:<RxDotFilled />}
        </div>
    ))}
    </div>
</div>

</>
  )
    
}
export default Banner
