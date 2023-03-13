import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import img1 from '../../../public/i1.jpg'
import img2 from '../../../public/i2.jpg'
import img3 from '../../../public/i3.jpg'
import img4 from '../../../public/i4.jpg'
import img5 from '../../../public/i5.jpg'
import img7 from '../../../public/i7.jpg'
import img8 from '../../../public/i8.jpg'
import img9 from '../../../public/i9.jpg'
import img10 from '../../../public/i10.jpg'
import img11 from '../../../public/i11.jpg'
import img12 from '../../../public/i12.jpg'
import img13 from '../../../public/i13.jpg'


export const SliderCustomer = () => {
  const slides = [
    {url: img1},{url: img2},{url: img3},{url: img4},{url: img5},{url: img7},{url: img8},
    {url: img9},{url: img10},{url: img11},{url: img12},{url: img13},
   ]
   
   const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.0,
          slidesToScroll: 1,
          initialSlide: 1.0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-full overflow-hidden mx-2 ">
      <Slider {...settings} //ref={sliderRef}
      >
        {slides.map((productos, index) => (
          <div key={index} className="py-10">
            <div className="px-1 overflow-hidden">
              <img
                src={productos.url}
                alt={productos.url}
                className="w-full h-[18rem] object-cover rounded-lg"
              />
             
            </div>
          </div>
        ))}
      </Slider>
      {// botones de adelantar o regresar
      //<div className="flex justify-center mt-4">
       // <button
       //   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
       //  onClick={() => sliderRef.current.slickPrev()}
       // >
       //</div>   Anterior
       // </button>
       // <button
       //   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
       //   onClick={() => sliderRef.current.slickNext()}
       // >
       //   Siguiente
       // </button>
      //</div>
    }
    </div>
  );
    
}
export default SliderCustomer