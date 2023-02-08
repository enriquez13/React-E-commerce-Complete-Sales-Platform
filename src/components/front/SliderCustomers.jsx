import React from 'react'
import { useEffect } from 'react';
import { BsChevronCompactLeft} from "react-icons/bs";
import { BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import {RxShadowOuter} from "react-icons/rx";
import { useState } from 'react'

import img1 from '../../../public/i1.jpg'
import img2 from '../../../public/i2.jpg'
import img3 from '../../../public/i3.jpg'
import img4 from '../../../public/i4.jpg'
import img5 from '../../../public/i5.jpg'
import img6 from '../../../public/i6.jpg'
import img7 from '../../../public/i7.jpg'
import img8 from '../../../public/i8.jpg'
import img9 from '../../../public/i9.jpg'
import img10 from '../../../public/i10.jpg'
import img11 from '../../../public/i11.jpg'
import img12 from '../../../public/i12.jpg'
import img13 from '../../../public/i13.jpg'


export const SliderCustomer = () => {
  const slides = [
    {url: img1},{url: img2},{url: img3},{url: img4},{url: img5},{url: img6},{url: img7},{url: img8},
    {url: img9},{url: img10},{url: img11},{url: img12},{url: img13},
   ]
   const[verificacion, SetVerificacion] = useState(true)
   
  const [currentIndex,setCurrentIndex] = useState(0) 
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)  
    SetVerificacion(false)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex) 
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

    useEffect(() => {
      let interval = setInterval( 
         nextSlide , 4500)  
         return () => clearInterval(interval)
      })
  return (
    <>
    <hr/>
    <h2 className='grid justify-items-center my-10 md:font-semibold md:text-2xl '>RESEÑAS DE ALGUNOS CLIENTES</h2>
<div className='md:w-1/3 max-w-[1400px] h-[450px] w-full m-auto  relative group text-gray-100 z-0'>
  <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500'>
  </div>
  <div onClick={prevSlide} className='bg-black bg-opacity-30 p-[0.1rem] text-white text-[1.5rem] rounded-full  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 '><BsChevronCompactLeft /></div>
  <div onClick={nextSlide} className='bg-black bg-opacity-30 p-[0.1rem] text-white text-[1.5rem] rounded-full  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 '><BsChevronCompactRight /></div>
    <div className='flex absolute top-[80%] w-full justify-center py-2'>
    {slides.map((slide, slideIndex) =>(
      <div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className={`text-gray-400 ${slideIndex == currentIndex ? "text-[0.6rem] mt-[0.29rem] mb-[0.29rem] mx-2 ": "text-[1.2rem]"} mx-2 cursor-pointer`} >
        {slideIndex==currentIndex?<span className='  text-white'><RxShadowOuter /></span> :<RxDotFilled />}
        </div>
    ))}
    </div>
</div>
 
</>
  )
    
}
export default SliderCustomer