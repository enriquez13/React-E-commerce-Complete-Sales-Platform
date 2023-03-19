import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'

export const SliderCustomer = () => {
  const slides = [
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi1.jpg?alt=media&token=47124f77-32ef-4b4b-9637-1df11462ec83"},
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi10.jpg?alt=media&token=e2cfb523-f6fd-45e5-aacc-7197f2b9ce59"},
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi11.jpg?alt=media&token=6593878d-c6bf-476c-8d34-3bebae4cd370"},
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi12.jpg?alt=media&token=f85dbd57-751d-4f2c-9bc3-91ca7cdc0fdd"},
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi13.jpg?alt=media&token=421c811a-2fac-4a4f-b17f-5b0c2c09e0eb"},
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi2.jpg?alt=media&token=54d0fd6f-82bd-44e1-87a9-a62f77915b27"},
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi3.jpg?alt=media&token=9ed7b749-7887-403e-87ed-f186fc84d0de"},
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi4.jpg?alt=media&token=92456a8f-22ca-4bee-9ff5-97b71f6a399c"},
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi5.jpg?alt=media&token=2554ecc3-fae4-4d9d-aae1-e4efaeabbfc3"},
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi6.jpg?alt=media&token=be718e89-741a-4e5b-8b9d-7c27b8ec8fe3"},   
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi7.jpg?alt=media&token=dcc1bbb3-fbe3-4e81-bfeb-f6957990f4ff"},
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi8.jpg?alt=media&token=f8c61c3e-f907-4652-8df8-ae51f848b061"},
    {url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-112df.appspot.com/o/rese%C3%B1as%2Fi9.jpg?alt=media&token=ae29c3b1-06fc-40d3-b9d4-9d8f2c74a92b"},
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