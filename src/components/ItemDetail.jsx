import React, { useEffect } from 'react'
import { useState } from 'react'
import { useCartContext } from '../CartProvider'
import SliderCustomer from './front/SliderCustomers'
import './Details.css'
import { Modal } from './Modal/Modal'
import { SliderProducts } from './front/SliderProducts'
import Footer from './front/Footer'
import { Informatio } from './front/Informatio'
import { ListaColores } from './ListaColores'
import { DetailInformation } from './DetailInformation'



const imgs = [
  { id: 0, img: "https://geekflare.com/wp-content/uploads/2021/09/520401-pure-black-background-wallpaper.jpg" },
]

export const ItemDetail = (props) => {

  const { data, allProducts } = props;
  const [selectedSize, setSelectedSize] = useState(data && data.sizes ? data.sizes[0] : {})
  const [images, setImages] = useState(data && data.sizes && data.sizes[0].colors ? data.sizes[0].colors : null)

  //const[producto,setProducto] = useState(data)
  useEffect(() => {
    if (data?.sizes) {
      setSelectedSize(data.sizes[0]);
      setImages(data.sizes[0].colors);
    }
  }, [data]);
  useEffect(() => {
    setSliderData(data && data.sizes && data.sizes[0].colors ? data.sizes[0].colors[0] : null)
  }, [data]);

  const [showModal, setShowModal] = useState(false);
  const [goToCart, setGoToCart] = useState(false)
  const { addProduct, closeModal, cart, removeProduct, totalPrice, totalProducts } = useCartContext()

  const onAdd = (quantity, talla, color, ide, img) => {
    setGoToCart(true)
    addProduct(data, quantity, talla, color, ide, img)
  }

  const [sliderData, setSliderData] = useState(data && data.sizes && data.sizes[0].colors ? data.sizes[0].colors[0] : null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedImageIndex(index)
    const slider = selectedSize.colors[index]
    setSliderData(slider)
    setColor(slider.color)
    setIde(slider.idepro)
    setImg(slider.imagen)
  }

  const [talla, setTalla] = useState(data && data.sizes && data.sizes[0].size)
  const [color, setColor] = useState(null)
  const [ide, setIde] = useState(null)
  const [img, setImg] = useState(null)

  function agregar() {
    setShowModal(true)
    onAdd(1, talla, color, ide, img)
    setTalla(null)
    setColor(null)
    setImg(null)
    setTalla(selectedSize.size)
    setSelectedSize(selectedSize ? selectedSize : {})
    setSelectedImageIndex(null)
  }
  const closeModaldetail = () => {
    setShowModal(false);
  };


  return (
    <> 
      <div className="text-black grid md:grid-cols-2 md:my-[3rem] px-0 md:mt-[8rem]">
     
        <div className='md:grid md:place-content-center mx-0 px-0  md:mt-0'>
          {data && data.sizes && data.sizes[0].colors && (
            <>
              <div style={{ backgroundImage: `url(${sliderData?.imagen})`, backgroundSize: 'cover' }} className=' object-cover bg-center w-full
                    h-[500px] md:max-h-[450px] md:max-w-[450px] hover:scale-100 duration-500 transition-all ' >
              </div>
              <div className=" grid grid-cols-4 w-full px-0 md-px-0 gap-2">

                {images?.map((foto, i) => (
                  <img
                    alt='Imagen del producto'
                    key={i}
                    src={foto.imagen}
                    className={`${selectedImageIndex === i
                        ? "border-b-4 border-black transform duration-300 md:hover:scale-100 "
                        : "opacity-40"
                      } object-cover max-h-[100px] w-full md:max-h-[120px] py-1`}
                    onClick={() => handleClick(i)}
                  />
                ))}


              </div>
            </>)}
        </div>
        <div className='md:px-20'>
          <h2 className="text-left font-bold pl-3 mt-2 md:mt-0 md:pl-0 md:text-left text-2xl md:text-4xl  ">{data.category}{" "}{data.nombre}</h2>

          <h3 className="pl-3 md:pl-0 text-sm md:text-base mt-2 mb-5  md:mt-5">${data.valor} unidad</h3>
          <h3 className='hidden md:block my-4'>Elige la talla:</h3>
          <div className='grid grid-cols-8 gap-1 place-items-left pl-2 md:pl-0'>

            {data.sizes?.map((c) => (
              <>
                <button
                  key={c.size}
                  onClick={() => {
                    setSelectedSize(c)
                    setImages(c.colors)
                    setTalla(c.size)

                  }}
                  className={`${c.size === selectedSize.size
                      ? "border bg-black text-gray-100 w-7 h-7 font-bold transform duration-500 scale-110 md:hover:scale-110 md:hover:border-gray-500 rounded-lg"
                      : "text-[1rem] w-6 h-6 border border-gray-200 transform duration-500 md:hover:scale-110 md:hover:border-gray-500 rounded-lg"
                    }`}
                >
                  {c.size}
                </button>
              </>
            ))}

          </div>
          {selectedSize.size && <h3 className='hidden md:block my-4'>Elige el color:</h3>}
          <div className='grid grid-cols-8 gap-1 place-items-left pt-5 md:pt-0 pl-2 md:pl-0'>
            {data.sizes?.map((item) => {
              if (item.size !== selectedSize.size) {
                return null;
              }
              return item.colors.map((col, index) => (
                <div className='' key={index}>
                  <button
                    key={index}
                    onClick={() => {
                      setColor(col.color);
                      setImg(col.imagen)
                      setIde(col.idepro);
                      setSliderData(data?.sizes[0].colors[index])
                      setSelectedImageIndex(index)

                    }}
                    className={`${col.color === selectedSize?.colors[selectedImageIndex]?.color
                      ? "border-2 border-black w-7 h-7 "
                      : "border border-gray-300 w-7 h-7 "} ${ListaColores[col.color]} md:mx-0 border rounded-full transform duration-500 hover:scale-110`}
                  />
                </div>
              ));
            })}
          </div>
          <h4 className='my-1 text-center'>
          {selectedSize.size === "" && <span className='bg-red-100 text-red-600 rounded-lg px-3  my-1 text-sm'>Falta elegir la talla</span>}
          {selectedSize.size && color === "" && <span className='bg-red-100 text-red-600 rounded-lg px-3 py-1 text-sm'>Elegir talla y color</span>}
          </h4>
          <div className="w-auto mx-2 md:px-0">

            {
              //    goToCart
              //   ? <Link to='/cart'>Terminar compra</Link>
              //   : <ItemCount initial={1} stock={12} onAdd={onAdd}/>
            }
            {selectedSize.size && color ? <div className="">
              <div className='mx-8 md:mx-[6rem] md:mt-[2rem]'>
                <button className="flex items-center justify-center w-full  h-11 mt-5
            //        text-amber-200 animate-bounce bg-black rounded-xl font-bold md:transform md:duration-200 md:hover:scale-105
            //        hover:bg-neutral-900 hover:text-neutral-200 "
                  disabled={selectedSize.size === ""}
                  onClick={agregar}>Agregar al carrito</button>
              </div>

            </div> : ""}
           {// <div className='mx-8 md:mx-[6rem] mt-6'>

            //  <button className="flex items-center justify-center w-full  h-11 mt-3
            //        text-amber-200 animate-bounce bg-black rounded-xl font-bold md:transform md:duration-200 md:hover:scale-105
            //        hover:bg-neutral-900 hover:text-neutral-200 "
            //    onClick={agregar} disabled={color === ""}>
            //</div>    <span>Compra aquí y paga en CASA</span>
            //</div>  </button>
            //</div>
           }
            
            <section className='py-5 bg-gradient-to-b from-slate-300 to-slate-100 shadow-md rounded-lg my-3 md:my-10 px-4 relative'>
              <h3 className='text-sky-900 text-center mb-5'>Obten <span className='text-blue-500 font-bold text-lg'>20%</span> y <span className='text-blue-500 font-bold text-lg'>40%</span> por la segunda y tercera prenda</h3>
              <h3 className='text-sky-900  text-sm'>Primera prenda  
                <span className='text-blue-600 font-semibold'> ${data.valor} </span>
              </h3>
              <h3 className='py-1 text-sky-900  text-sm'>Obten <span className='text-blue-600 font-semibold'> 20% OFF </span>
                  en la segunda prenda   
                <span className='py-1 text-blue-600 font-semibold'> ${data.valor * 0.8} </span>
                <span className='text-amber-500 line-through font-semibold'> ${data.valor} </span> 
              </h3>
              <h3 className='py-1 text-sky-900  text-sm'>Obten <span className='text-blue-600 font-semibold'> 40% OFF </span>
                  en la tercera prenda   
                <span className='text-blue-600 font-semibold'> ${data.valor * 0.6} </span>
                <span className='text-amber-500 line-through font-semibold'> ${data.valor} </span> 
              </h3>
            </section>

            

            <h2 className='grid justify-items-center my-10 font-semibold md:text-2xl '>INFORMACIÓN DE INTERES</h2>
              <DetailInformation />

          </div>
        </div>
      </div>
      <h2 className='w-full text-center text-lg font-semibold my-14 '>TAMBIEN TE PUEDE INTERESAR</h2>

      <SliderProducts allProducts={allProducts} />
      <h2 className='w-full text-center text-lg font-semibold mt-10 '>AlGUNAS RESEÑAS DE CLIENTES</h2>
      <SliderCustomer />
      <Informatio />
      <Footer />

      {showModal && (
        <Modal closeModal={closeModaldetail} addProduct={addProduct} cart={cart} removeProduct={removeProduct} 
        totalPrice={totalPrice} totalProducts={totalProducts} allProducts={allProducts} />
      )}

    </>
  )
}

export default ItemDetail

