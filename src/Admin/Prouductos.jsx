import React from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useForm } from "react-hook-form"

export const Prouductos = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = data => {
  console.log(data)
        const products = {
    id: 6,
    category: "camibuso",
    imagenes: [{
        id:0 , img:"https://i.pinimg.com/564x/a3/86/35/a386354159315f097d22b97209e76754.jpg"
    },
    {
        id:1 , img:"https://i.pinimg.com/564x/2d/8c/48/2d8c480bca67f6a9bb9f6cf475af24a9.jpg"
    },
    {
        id:2 , img:"https://i.pinimg.com/564x/68/92/d1/6892d1348f031c501ef46c33e6ee6c75.jpg"
    },
    ],
    nombre: "cuello polo",
    stock: 2,
    valor: 90000,
    cantidad: 4,
    sizes: [
        {
            size: 'S',
            colors: [
                { idepro:'CBPUSBLA' ,color: 'blanco', bg:"bg-white" ,stock: 10 },
                { idepro:'CBPUSNEG' ,color: 'negro', bg:"bg-neutral-900", stock: 5 },
                { idepro:'CBPUSGRI' ,color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                { idepro:'CBPUSROJ' ,color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                { idepro:'CBPUSROS' ,color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                { idepro:'CBPUSVIN' ,color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                { idepro:'CBPUSCEL' ,color: 'celeste', bg:"bg-blue-300", stock: 5 },
                { idepro:'CBPUSAZU' ,color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                { idepro:'CBPUSBEI' ,color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
            ],
        },
        {
            size: 'M',
            colors: [
                {idepro:'CBPUMBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                {idepro:'CBPUMNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                {idepro:'CBPUMGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                {idepro:'CBPUMROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                {idepro:'CBPUMROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                {idepro:'CBPUMVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                {idepro:'CBPUMCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                {idepro:'CBPUMAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                {idepro:'CBPUMBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
            ],
        },
        {
            size: 'L',
            colors: [
                {idepro:'CBPULBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                {idepro:'CBPULNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                {idepro:'CBPULGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                {idepro:'CBPULROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                {idepro:'CBPULROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                {idepro:'CBPULVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                {idepro:'CBPULCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                {idepro:'CBPULAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                {idepro:'CBPULBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
            ],
        },
        {
            size: 'XL',
            colors: [
                {idepro:'CBPUXLBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                {idepro:'CBPUXLNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                {idepro:'CBPUXLGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
              
            ],
        },
       
    ],
}
//const handleClick =()=>{
    const db = getFirestore();
    const productsCollection = collection(db, 'productos')
    addDoc(productsCollection, products)
    .then(()=> alert("Producto agregado con éxito"))
.catch(error=>{
    alert(errors)
})



//}
}

  return (
    <>
    <div className='ml-5 mt-3'>Prouductos</div>
    <button >click</button>

    <form  onSubmit={handleSubmit(onSubmit)} className='mx-7 text-black md:w-1/2'>
                    <label className='' >
                        id:
                        <input {...register("id", {
                            required: "Falta escribir el id",
                            minLength:{
                                value:1,
                                message: "Mínimo 1 caracter"
                            }
                        })}
                        type="text"  className='w-full mt-1 mb-3 bg-gray-300'/>
                    </label>
                    <p className='text-red-400'>{errors.nombre?.message}</p>
                    <label className='' >
                        category:
                        <input {...register("category", {
                            required: "Falta escribir la categoria",
                            minLength:{
                                value:4,
                                message: "Mínimo 4 letras"
                            }
                        })}
                        type="text"  className='w-full mt-1 mb-3 bg-gray-300'/>
                    </label>
                    <p className='text-red-400'>{errors.nombre?.message}</p>
                    <label className='' >
                       imagenes:
                        <input {...register("imagenes", {
                            required: "Falta subir las imagenes",
                            minLength:{
                                value:4,
                                message: "Mínimo 4 letras"
                            }
                        })}
                        type="text"  className='w-full mt-1 mb-3 bg-gray-300'/>
                    </label>
                    <p className='text-red-400'>{errors.nombre?.message}</p>
                    <label className='' >
                        nombre:
                        <input {...register("nombre", {
                            required: "Falta escribir el nombre",
                            minLength:{
                                value:4,
                                message: "Mínimo 4 letras"
                            }
                        })}
                        type="text"  className='w-full mt-1 mb-3 bg-gray-300'/>
                    </label>
                    <p className='text-red-400'>{errors.nombre?.message}</p>
                    <label className='' >
                        stock:
                        <input {...register("stock", {
                            required: "Falta escribir el stock",
                            minLength:{
                                value:1,
                                message: "escribir un número"
                            }
                        })}
                        type="text"  className='w-full mt-1 mb-3 bg-gray-300'/>
                    </label>
                    <p className='text-red-400'>{errors.nombre?.message}</p>
                    <label className='' >
                        valor:
                        <input {...register("valor", {
                            required: "Falta escribir el valor",
                            minLength:{
                                value:3,
                                message: "Escribir valor completo"
                            }
                        })}
                        type="text"  className='w-full mt-1 mb-3 bg-gray-300'/>
                    </label>
                    <p className='text-red-400'>{errors.nombre?.message}</p>
                    <label className='' >
                        cantidad:
                        <input {...register("cantidad", {
                            required: "Falta escribir la cantidad",
                            minLength:{
                                value:1,
                                message: "Mínimo 1 número"
                            }
                        })}
                        type="text"  className='w-full mt-1 mb-3 bg-gray-300'/>
                    </label>
                    <p className='text-red-400'>{errors.nombre?.message}</p>
                    <label className='' >
                        sizes:
                        <input {...register("sizes", {
                            required: "Falta escribir la talla",
                            minLength:{
                                value:1,
                                message: "una sola talla"
                            }
                        })}
                        type="text"  className='w-full mt-1 mb-3 bg-gray-300'/>
                    </label>
                    <p className='text-red-400'>{errors.nombre?.message}</p>
                    <div className='flex items-center justify-center'>
                        <input  className='rounded-lg mt-5 bg-black text-white px-10 py-2 ' type="submit" value="Fenalizar pedido" />
                        </div>
</form>

<div>Nuevo producto</div>
    Nombre, Precio, Categoria, descripcion, Talla, Color, Imagenes, 
    </>
    )
}
