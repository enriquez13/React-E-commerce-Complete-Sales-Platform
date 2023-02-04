import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { Pie } from "../front/Pie";
import Navbar from '../front/NavBar'

const products = [
    {
        id: 1,
        category: "camiseta",
        imagenes: [{
            id:0 , img:"https://i.pinimg.com/564x/e5/30/3f/e5303f1dac816cfd977077b8f5900cf2.jpg"
        },
        {
            id:1 , img:"https://i.pinimg.com/564x/0c/41/6e/0c416e8aaf5ccad0d28dd20bb4288bb3.jpg"
        },
        {
            id:2 , img:"https://i.pinimg.com/564x/ab/2c/a6/ab2ca690a88a940913bbdabd6f94db46.jpg"
            
        },
        {
            id:3 , img:"https://i.pinimg.com/564x/62/b7/26/62b726ca4c48d37d9e1907621d9f3770.jpg"
            
        },
        {
            id:4 , img:"https://i.pinimg.com/564x/08/b4/87/08b4872847ec6e1e27f1074a9c523ad8.jpg"
            
        },
        ]
        ,
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
                    {idepro:'CCMUMBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'CCMUMNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'CCMUMGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    {idepro:'CCMUMROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    {idepro:'CCMUMROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    {idepro:'CCMUMVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    {idepro:'CCMUMCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    {idepro:'CCMUMAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    {idepro:'CCMUMBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'L',
                colors: [
                    {idepro:'CCMULBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'CCMULNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'CCMULGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    {idepro:'CCMULROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    {idepro:'CCMULROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    {idepro:'CCMULVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    {idepro:'CCMULCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    {idepro:'CCMULAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    {idepro:'CCMULBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'XL',
                colors: [
                    {idepro:'CCMUXLBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'CCMUXLNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'CCMUXLGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                  
                ],
            },
           
        ],
    },
    {
        id: 2,
        category: "camiseta",
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
        nombre: "cuello redondo",
        stock: 5,
        valor: 42000,
        cantidad: 6,
        sizes: [
            {
                size: 'S',
                colors: [
                    { idepro:'CCRUSBLA' ,color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { idepro:'CCRUSNEG' ,color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { idepro:'CCRUSGRI' ,color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { idepro:'CCRUSROJ' ,color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { idepro:'CCRUSROS' ,color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { idepro:'CCRUSVIN' ,color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { idepro:'CCRUSCEL' ,color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { idepro:'CCRUSAZU' ,color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { idepro:'CCRUSBEI' ,color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'M',
                colors: [
                    {idepro:'CCRUMBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'CCRUMNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'CCRUMGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    {idepro:'CCRUMROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    {idepro:'CCRUMROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    {idepro:'CCRUMVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    {idepro:'CCRUMCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    {idepro:'CCRUMAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    {idepro:'CCRUMBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'L',
                colors: [
                    {idepro:'CCRULBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'CCRULNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'CCRULGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    {idepro:'CCRULROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    {idepro:'CCRULROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    {idepro:'CCRULVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    {idepro:'CCRULCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    {idepro:'CCRULAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    {idepro:'CCRULBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'XL',
                colors: [
                    {idepro:'CCRUXLBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'CCRUXLNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'CCRUXLGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                  
                ],
            },
           
        ],
    },
    {
        id: 3,
        category: "buzo",
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
        nombre: "con cierre",
        stock: 5,
        valor: 95000,
        cantidad: 3,
        sizes: [
            {
                size: 'S',
                colors: [
                    { idepro:'BCUSBLA' ,color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { idepro:'BCUSNEG' ,color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { idepro:'BCUSGRI' ,color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { idepro:'BCUSROJ' ,color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { idepro:'BCUSROS' ,color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { idepro:'BCUSVIN' ,color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { idepro:'BCUSCEL' ,color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { idepro:'BCUSAZU' ,color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { idepro:'BCUSBEI' ,color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'M',
                colors: [
                    {idepro:'BCUMBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'BCUMNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'BCUMGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    {idepro:'BCUMROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    {idepro:'BCUMROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    {idepro:'BCUMVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    {idepro:'BCUMCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    {idepro:'BCUMAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    {idepro:'BCUMBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'L',
                colors: [
                    {idepro:'BCULBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'BCULNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'BCULGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    {idepro:'BCULROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    {idepro:'BCULROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    {idepro:'BCULVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    {idepro:'BCULCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    {idepro:'BCULAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    {idepro:'BCULBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'XL',
                colors: [
                    {idepro:'BCUXLBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'BCUXLNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'BCUXLGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                  
                ],
            },
           
        ],
    },
    {
        id: 4,
        category: "chaqueta",
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
        nombre: "capucha",
        stock: 5,
        valor: 90000,
        cantidad: 7,
        sizes: [
            {
                size: 'S',
                colors: [
                    { idepro:'CCCUSBLA' ,color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { idepro:'CCCUSNEG' ,color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { idepro:'CCCUSGRI' ,color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { idepro:'CCCUSROJ' ,color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { idepro:'CCCUSROS' ,color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { idepro:'CCCUSVIN' ,color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { idepro:'CCCUSCEL' ,color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { idepro:'CCCUSAZU' ,color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { idepro:'CCCUSBEI' ,color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'M',
                colors: [
                    {idepro:'CCCUMBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'CCCUMNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'CCCUMGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    {idepro:'CCCUMROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    {idepro:'CCCUMROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    {idepro:'CCCUMVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    {idepro:'CCCUMCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    {idepro:'CCCUMAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    {idepro:'CCCUMBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'L',
                colors: [
                    {idepro:'CCCULBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'CCCULNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'CCCULGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    {idepro:'CCCULROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    {idepro:'CCCULROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    {idepro:'CCCULVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    {idepro:'CCCULCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    {idepro:'CCCULAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    {idepro:'CCCULBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'XL',
                colors: [
                    {idepro:'CCCUXLBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'CCCUXLNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'CCCUXLGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                  
                ],
            },
           
        ],
    },
    {
        id: 5,
        category: "buzo",
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
        nombre: "capucha",
        stock: 2,
        valor: 90000,
        cantidad: 4,
        sizes: [
            {
                size: 'S',
                colors: [
                    { idepro:'BCRUSBLA' ,color: 'blanco', bg:"bg-white" ,stock: 10 },
                    { idepro:'BCRUSNEG' ,color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    { idepro:'BCRUSGRI' ,color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    { idepro:'BCRUSROJ' ,color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    { idepro:'BCRUSROS' ,color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    { idepro:'BCRUSVIN' ,color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    { idepro:'BCRUSCEL' ,color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    { idepro:'BCRUSAZU' ,color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    { idepro:'BCRUSBEI' ,color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'M',
                colors: [
                    {idepro:'BCRUMBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'BCRUMNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'BCRUMGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    {idepro:'BCRUMROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    {idepro:'BCRUMROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    {idepro:'BCRUMVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    {idepro:'BCRUMCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    {idepro:'BCRUMAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    {idepro:'BCRUMBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'L',
                colors: [
                    {idepro:'BCRULBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'BCRULNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'BCRULGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                    {idepro:'BCRULROJ', color: 'rojo', bg:"bg-[#D10000]", stock: 5 },
                    {idepro:'BCRULROS', color: 'rosado', bg:"bg-rose-400", stock: 5 },                    
                    {idepro:'BCRULVIN', color: 'vinotinto', bg:"bg-[#56070c]", stock: 5 },
                    {idepro:'BCRULCEL', color: 'celeste', bg:"bg-blue-300", stock: 5 },
                    {idepro:'BCRULAZU', color: 'azul oscuro', bg:"bg-[#07144E]", stock: 5 },
                    {idepro:'BCRULBEI', color: 'beige', bg:"bg-[#c9a974]", stock: 5 }
                ],
            },
            {
                size: 'XL',
                colors: [
                    {idepro:'BCRUXLBLA', color: 'blanco', bg:"bg-white" ,stock: 10 },
                    {idepro:'BCRUXLNEG', color: 'negro', bg:"bg-neutral-900", stock: 5 },
                    {idepro:'BCRUXLGRI', color: 'gris', bg:"bg-gray-500" ,stock: 10 },
                  
                ],
            },
           
        ],
    },
    {
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
]

export const ItemDetailContainer = ({texto})=>{
    const [data,setData] = useState({})
    const { detalleId } = useParams()

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(products)
            },200)
        })
            getData.then(res => setData(res.find(product => product.id === parseInt( detalleId))))
    }, [])

    return (
        <>
        <Navbar />
        <ItemDetail data={data}/>
        <Pie />
        </>
    )
}
export default ItemDetailContainer