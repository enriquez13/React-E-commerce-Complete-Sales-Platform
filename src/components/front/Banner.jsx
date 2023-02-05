import React from 'react'
import { BsChevronCompactLeft} from "react-icons/bs";
import { BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import {RxShadowOuter} from "react-icons/rx";
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const Banner = () => {
  const slides = [
   
    {url:"https://i.pinimg.com/564x/bd/42/38/bd4238b0109d4f9ca31be05712cae693.jpg"},
    {url:"https://i.pinimg.com/564x/cc/14/22/cc1422addc7cf09200ea00ef90252e9c.jpg"},
    {url:"https://i.pinimg.com/564x/cc/db/e7/ccdbe7178ad70dad780b4bb43de3d3f4.jpg"},
    {url:"https://i.pinimg.com/564x/2e/d5/85/2ed585f8884d06b781056d7eb1584d42.jpg"},
    {url:"https://i.pinimg.com/564x/f5/a6/3c/f5a63c3507b50cf6fce8438065fe0725.jpg"},
 
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
 verificacion === true ? setTimeout( 
    nextSlide , 2500) :"" 

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  

  return (
    <>

<div className='mt-[2.5rem]  md:mt-[4.5rem] max-w-[1400px] h-[30.2rem] w-full md:max-h-[500px]  m-auto  relative group text-gray-100 '>
  <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className=' bg-top w-full h-full  bg-cover  duration-1000 transition-all transform-gpu' ></div>
  
  <div onClick={prevSlide}  className='md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-3xl  rounded-full p-2 z-10'><BsChevronCompactLeft /></div>
  <div onClick={nextSlide} className='md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-3xl rounded-full p-2 z-10'><BsChevronCompactRight /></div>
  
  <div  className='w-full md:hidden md:group-hover:block absolute top-[50%]  translate-y-[-50%] text-center text-base rounded-lg py-3 
    font-extrabold tracking-wider text-gray-200 z-0'>Men's Shop</div>
  <NavLink to='/products'>
  <div></div><div  className='md:hidden md:group-hover:block absolute top-[62%] -translate-x-0 translate-y-[-50%] right-[28%] 
  text-md rounded-lg py-2 border px-[3rem] hover:bg-gray-200 hover:text-black font-extrabold tracking-wider 
  text-gray-200'>Collection</div>
  </NavLink>
    <div className='flex absolute top-[88%] w-full justify-center '>
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
