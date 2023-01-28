import React from 'react'
import { BsChevronCompactLeft} from "react-icons/bs";
import { BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import {RxShadowOuter} from "react-icons/rx";
import { useState } from 'react'

export const SliderCustomer = () => {
  const slides = [
    {url:"https://i.pinimg.com/564x/03/dd/86/03dd860cea0090f5164fa5718f1bfe1b.jpg"},
    {url:"https://i.pinimg.com/564x/0e/0b/15/0e0b15991a96ad59e4c1c6e28dcec2ba.jpg"},
    {url:"https://i.pinimg.com/564x/e9/4f/ac/e94facae658063295a833c7197ed4175.jpg"},
    {url:"https://i.pinimg.com/564x/bd/1d/8b/bd1d8bae9d19eb7bdea362c32e7ed0ec.jpg"},
   ]
  
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <>
    <hr/>
    <h2 className='grid justify-items-center my-10 md:font-semibold md:text-2xl '>RESEÑAS DE ALGUNOS CLIENTES</h2>
<div className='md:w-1/3 max-w-[1400px] h-[300px] w-full m-auto  relative group text-gray-100 z-0'>
  <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500'>
  </div>
  <div onClick={prevSlide} className='text-white group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-[1.5rem] rounded-full  '><BsChevronCompactLeft /></div>
  <div onClick={nextSlide} className='text-white group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-[1.5rem] rounded-full '><BsChevronCompactRight /></div>
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