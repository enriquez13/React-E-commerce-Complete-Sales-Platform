import React from 'react'
import { ListaColores } from '../ListaColores';


function ModalaTallaColor(props) {

    const { onClose, producto, handleSizeClick, handleColorClick, selectedSize, selectedColor, 
        selectedImagen , agregar, resetSelections} = props
        const handleClickOutside = (e) => {
            if (e.target === e.currentTarget) {
                resetSelections()
                onClose();
            }
        }
    return (
        <div 
        className="fixed inset-0 h-[100vh] z-[40] flex items-center justify-center bg-black bg-opacity-80"
        onClick={handleClickOutside}>
            <div className="bg-white w-[90%]  h-[78vh] max-h-[80vh] absolute rounded-lg ">
                <div className='h-[67%] relative'>
                <img src={selectedImagen ? selectedImagen : producto.sizes[0].colors[0].imagen}
                 alt="Imagen portada" className='w-full h-full object-cover'/>
                 <div onClick={onClose}
                 className='text-2xl rounded-full bg-black bg-opacity-5 px-3 py-1 font-semibold absolute top-1 right-2 z-[80] text-black'>X
                 </div>
                </div>
                <div className='grid grid-cols-4 gap-4 justify-center items-center py-2 mx-10'>
                    {producto?.sizes.map((size, index) => (
                        <button key={index} className={`text-[0.9rem] ${selectedSize&&size.size === selectedSize.size
                            ? " border border-lg bg-black text-gray-100 w-8 h-8 font-bold transform duration-500 scale-110 md:hover:scale-110 md:hover:border-gray-500 rounded-lg"
                            : " w-8 h-8 border border-lg border-gray-200 transform duration-500 md:hover:scale-110 md:hover:border-gray-500 rounded-lg"
                            }  `}
                            onClick={() => handleSizeClick(size, producto)}>
                            {size.size}
                        </button>
                    ))}
                </div>
                <div className='grid grid-cols-5 gap-1 my-2  mx-10'>
                    {selectedSize && selectedSize.size && (
                        <>
                            {producto?.sizes
                                .find((size) => size.size === selectedSize.size)
                                .colors.map((color, index) => (

                                    <button
                                        onClick={() => handleColorClick(color)}
                                        className={`${selectedColor&&color.color === selectedColor.color ? "border-2 border-black w-8 h-8"
                                            : "border border-gray-300 w-8 h-8"} md:mx-0 
                                        rounded-full transform duration-500 hover:scale-110  ${ListaColores[color.color]}`}
                                        key={color.idepro} />
                                ))}
                        </>
                    )}

                </div>
                <div className='grid justify-center'>
                <button onClick={() => agregar(producto.id)}
                    className='bg-black text-white border rounded-lg px-9 py-2 text-sm'
                >Agregar</button>
                </div>
                <h4 className='text-center font-semibold mt-4'>Duradero, confiable, agradable y cómodo</h4>

               {//} <button onClick={onClose} className="block mt-4 mx-auto px-4 py-2 bg-blue-500 text-white rounded-lg">
                //    Cerrar
                //</button>
               }
            </div>
        </div>
    );
}
export default ModalaTallaColor