import React from 'react'
import { BsChevronCompactLeft} from "react-icons/bs";
import { BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import {RxShadowOuter} from "react-icons/rx";
import { useState } from 'react'

export const Banner = () => {
  const slides = [
   
    {url:"https://i.pinimg.com/564x/bd/42/38/bd4238b0109d4f9ca31be05712cae693.jpg"},
    {url:"https://i.pinimg.com/564x/e7/b5/0c/e7b50ca8cc325910a38323c77f27e1f6.jpg"},
    {url:"https://i.pinimg.com/564x/f2/e6/5c/f2e65ca46e5c811c83e9c0d146ec2a99.jpg"},
    {url:"https://i.pinimg.com/564x/2e/d5/85/2ed585f8884d06b781056d7eb1584d42.jpg"},
    {url:"https://i.pinimg.com/564x/b1/58/22/b15822678168c01505d0b91d06edc80f.jpg"},
 
   ]


   const[verificacion, SetVerificacion] = useState(true) 
  const [currentIndex,setCurrentIndex] = useState(0) 
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)  
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex) 
    
  }
 
  verificacion === true ? setTimeout( 
    nextSlide , 3000) : "" 
 
  

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <>

<div className='mt-[2.5rem]  md:mt-[4.5rem] max-w-[1400px] h-[30.2rem] w-full md:max-h-[500px]  m-auto  relative group text-gray-100'>
  <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover '></div>
  
  <div onClick={prevSlide} className='md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-3xl  rounded-full p-2 '><BsChevronCompactLeft /></div>
  <div onClick={nextSlide} className='md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-3xl rounded-full p-2 '><BsChevronCompactRight /></div>
  <div  className='w-full md:hidden md:group-hover:block absolute top-[50%]  translate-y-[-50%] text-center text-2xl rounded-lg py-3 
   hover:bg-gray-200 hover:text-black font-extrabold tracking-wider text-gray-200'>Mens´s Shop</div>
  <div  className='md:hidden md:group-hover:block absolute top-[62%] -translate-x-0 translate-y-[-50%] right-[28%] 
  text-xl rounded-lg py-2 border px-10 hover:bg-gray-200 hover:text-black font-extrabold tracking-wider 
  text-gray-200'>Collection</div>
  
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
