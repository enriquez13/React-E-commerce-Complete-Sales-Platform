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
                    { idepro:'CCMUSBLA' ,color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { idepro:'CCMUSNEG' ,color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { idepro:'CCMUSGRI' ,color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { idepro:'CCMUSROJ' ,color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { idepro:'CCMUSROS' ,color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { idepro:'CCMUSVIN' ,color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { idepro:'CCMUSCEL' ,color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { idepro:'CCMUSAZU' ,color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { idepro:'CCMUSBEI' ,color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
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