import React from 'react'

export const Modal = ({closeModal, cart, removeProduct}) => {
  return (
    <div className="fixed w-2/3 z-50 h-[50%]  top-[4rem] right-2 inset-y-0 pt-0  sm:inset-y-0 sm:flex sm:items-center sm:justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900 my-4">
                  Producto Agregado
                </h3>
                {cart?.map((product,index)=>(

               
                <div className="mt-2 grid grid-cols-2" key={index}>
                    <img src={product.imagenes[0].img} className="max-w-[4rem]"/>
                    <div className='grid content-center'>
                  <p className="text-sm leading-5 text-gray-500">
                     {product.category}{" "}{product.nombre}
                  </p>
                  <p className="text-sm leading-5 text-gray-500">
                  {product.talla}{" "}{product.color}
                  </p>
                  <p className="text-sm leading-5 text-gray-500">
                  Cantidad: {product.quantity}
                  </p>
                  </div>
                </div>
                 ))}
                <p className="text-sm leading-5 text-gray-500">
                  Total
                  </p>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  onClick={()=>removeProduct()}
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                 Eliminar
                </button>
              </span>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                 Seguir comprando
                </button>
              </span>
            </div>
          </div>
        </div>
  )
}
