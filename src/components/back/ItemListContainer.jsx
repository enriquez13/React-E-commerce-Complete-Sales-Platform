import {getFirestore, collection, getDocs,query, where} from 'firebase/firestore'
import React, {useEffect, useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../front/Footer";
import { Pie } from "../front/Pie";
import ItemList from "../ItemList";
import NavBar from '../front/NavBar'
import SliderCustomers from '../front/SliderCustomers'
import  {Informatio} from "../front/Informatio"


export const ItemListContainer = ()=>{
    const [data,setData] = useState([])
    const { categoriaId } = useParams()
   
    useEffect(()=>{
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'productos')
       
      //  getData.then(res => setData(res))
        if ( categoriaId ){
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(product => ({id:product.id, ...product.data()}))))
        
        } else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id:product.id, ...product.data()}))))
           
        }
    }, [categoriaId])
   // const onAdd = (quantity) =>{
        
  //  }
    return (
        <>
        
           <NavBar />
        <div className="grid justify-items-center text-black mt-[4rem] mb-[2rem] text-lg 
            font-semibold md:text-2xl">PRODUCTOS</div>
            <div className="mb-[3rem] grid grid-cols-2 md:grid-cols-3 gap-1 pb-[1rem]">
                <ItemList data={data} />
                
            </div>
            <Pie />
            <h2 className='w-full text-center text-lg font-semibold my-20 text-black'>AlGUNAS RESEÑAS DE CLIENTES</h2>
            <SliderCustomers />
            <Informatio />
            <Footer/> 
            
            </>
           
    )
}
export default ItemListContainer