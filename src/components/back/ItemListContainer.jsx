import React, {useEffect, useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import { Pie } from "../front/Pie";
import ItemList from "../ItemList";

const products = [
    {
        id: 1,
        category: "camiseta",
        imagen: "https://i.pinimg.com/564x/e5/30/3f/e5303f1dac816cfd977077b8f5900cf2.jpg",
        imagenes: [{
            id:0 , img:"https://i.pinimg.com/564x/e5/30/3f/e5303f1dac816cfd977077b8f5900cf2.jpg"
        },
        {
            id:1 , img:"https://i.pinimg.com/564x/56/e2/a7/56e2a75d33fbce6de6a7509b744e36be.jpg"
        },
        {
            id:2 , img:"https://i.pinimg.com/564x/f3/be/f0/f3bef0f646035eec39c3a598deb810cd.jpg"
        },
        ]
        ,
        imagen2: "https://falabella.scene7.com/is/image/FalabellaCO/7922380_3?wid=800&hei=800&qlt=70",
        imagen3: "http://sc04.alicdn.com/kf/H2e11e1bdb21345548e7215ef463235a7B.jpg",
        nombre: "cuello militar",
        stock: 5,
        valor: 58000,
        cantidad: 5,
        sizes: [
            {
                size: 'S',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'M',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'L',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'XL',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                  
                ],
            },
           
        ],
    },
    {
        id: 2,
        category: "camiseta",
        imagen: "https://i.pinimg.com/564x/38/9f/4b/389f4b5275820a71070d01143ddd23f6.jpg",
        imagenes: [{
            id:0 , img:"https://i.pinimg.com/564x/38/9f/4b/389f4b5275820a71070d01143ddd23f6.jpg"
        },
        {
            id:1 , img:"https://i.pinimg.com/564x/d6/4a/24/d64a249944bd7745e18e57942eb248fc.jpg"
        },
        {
            id:2 , img:"https://i.pinimg.com/564x/c0/7d/4d/c07d4d3d086ad2e67ccc0d9e9741a9b5.jpg"
        },
        ],
        imagen2: "https://falabella.scene7.com/is/image/FalabellaCO/7922380_3?wid=800&hei=800&qlt=70",
        imagen3: "http://sc04.alicdn.com/kf/H2e11e1bdb21345548e7215ef463235a7B.jpg",
        nombre: "cuello redondo",
        stock: 5,
        valor: 42000,
        cantidad: 6,
        sizes: [
            {
                size: 'S',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'L',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            }
        ],
    },
    {
        id: 3,
        category: "buzo",
        imagen: "https://i.pinimg.com/564x/9a/63/18/9a6318611124a9569d7cf8e72d060a10.jpg",
        imagenes: [{
            id:0 , img:"https://i.pinimg.com/564x/9a/63/18/9a6318611124a9569d7cf8e72d060a10.jpg"
        },
        {
            id:1 , img:"https://i.pinimg.com/564x/f6/2a/f5/f62af5bb277479f9a94457b758c99197.jpg"
        },
        {
            id:2 , img:"https://i.pinimg.com/564x/69/97/fe/6997fe816364a2c4a17c17c41270c26a.jpg"
        },
        ],
        imagen2: "https://falabella.scene7.com/is/image/FalabellaCO/7922380_3?wid=800&hei=800&qlt=70",
        imagen3: "http://sc04.alicdn.com/kf/H2e11e1bdb21345548e7215ef463235a7B.jpg",
        nombre: "con cierre",
        stock: 5,
        valor: 95000,
        cantidad: 3,
        sizes: [
            {
                size: 'S',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'L',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            }
        ],
    },
    {
        id: 4,
        category: "chaqueta",
        imagen: "https://i.pinimg.com/564x/0a/61/2f/0a612f6e95b474eb13ab628d9122e7df.jpg",
        imagenes: [{
            id:0 , img:"https://i.pinimg.com/564x/0a/61/2f/0a612f6e95b474eb13ab628d9122e7df.jpg"
        },
        {
            id:1 , img:"https://i.pinimg.com/564x/c1/5d/9e/c15d9eccd65b7be8d74accc2dd0a18da.jpg"
        },
        {
            id:2 , img:"https://i.pinimg.com/564x/b6/91/41/b691414b89231737262d5f52ea3566af.jpg"
        },
        ],
        imagen2: "https://falabella.scene7.com/is/image/FalabellaCO/7922380_3?wid=800&hei=800&qlt=70",
        imagen3: "http://sc04.alicdn.com/kf/H2e11e1bdb21345548e7215ef463235a7B.jpg",
        nombre: "capucha",
        stock: 5,
        valor: 90000,
        cantidad: 7,
        sizes: [
            {
                size: 'S',
                colors: [
                    { color: 'bverde', bg:"bg-[#CCEA94]" ,stock: 10 },
                    { color: 'beige', bg:"bg-[#D9AF87]", stock: 5 },
                ],
            },
            {
                size: 'L',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            }
        ],
    },
    {
        id: 5,
        category: "buzo",
        imagen: "https://i.pinimg.com/564x/1c/fe/47/1cfe47062aac326d2e0e6b411e08d6cd.jpg",
        imagenes: [{
            id:0 , img:"https://i.pinimg.com/564x/1c/fe/47/1cfe47062aac326d2e0e6b411e08d6cd.jpg"
        },
        {
            id:1 , img:"https://i.pinimg.com/564x/bb/98/82/bb98826dd08eeab4144bc580a1ef98d1.jpg"
        },
        {
            id:2 , img:"https://i.pinimg.com/564x/ba/4a/85/ba4a850c7cc30475e7f091e26c352d99.jpg"
        },
        ],
        imagen2: "https://falabella.scene7.com/is/image/FalabellaCO/7922380_3?wid=800&hei=800&qlt=70",
        imagen3: "http://sc04.alicdn.com/kf/H2e11e1bdb21345548e7215ef463235a7B.jpg",
        nombre: "",
        stock: 2,
        valor: 90000,
        cantidad: 4,
        sizes: [
            {
                size: 'S',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'M',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            }
        ],
    },
    {
        id: 6,
        category: "camibuso",
        imagen: "https://i.pinimg.com/564x/a3/86/35/a386354159315f097d22b97209e76754.jpg",
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
        imagen2: "https://falabella.scene7.com/is/image/FalabellaCO/7922380_3?wid=800&hei=800&qlt=70",
        imagen3: "http://sc04.alicdn.com/kf/H2e11e1bdb21345548e7215ef463235a7B.jpg",
        nombre: "cuello polo",
        stock: 2,
        valor: 90000,
        cantidad: 4,
        sizes: [
            {
                size: 'S',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'M',
                colors: [
                    { color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            }
        ],
    }
]

export const ItemListContainer = ({texto})=>{
    const [data,setData] = useState([])
    const { categoriaId } = useParams()

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(products)
            }, 200)
        })

      //  getData.then(res => setData(res))
        if ( categoriaId ){
            getData.then(res => setData(res.filter(product => product.category ===  categoriaId)))
    
        } else {
            getData.then(res => setData(res))
        }
    }, [categoriaId])
   // const onAdd = (quantity) =>{
        
  //  }
    return (
        <>
            <div className="pl-5 text-black my-7 text-lg">PRODUCTOS</div>

            <div className="mb-[3rem] grid grid-cols-2 md:grid-cols-3 gap-1 ">
                <ItemList data={data} />
            </div>
            <Pie />
        </>
    )
}
export default ItemListContainer