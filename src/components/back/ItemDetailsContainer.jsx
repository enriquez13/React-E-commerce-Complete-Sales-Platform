import {getFirestore, doc, getDoc} from 'firebase/firestore'
import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { Pie } from "../front/Pie";
import Navbar from '../front/NavBar'


export const ItemDetailContainer = ()=>{
    const [data,setData] = useState({})
    const { detalleId } = useParams()

    useEffect(()=>{
        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'productos', detalleId)
        getDoc(queryDoc)
            .then(res =>  setData({id:res.id, ...res.data()}))
    }, [])
   
//console.log(detalleId)
    return (
        <>
        <Navbar />
        <ItemDetail data={data}/>
        <Pie />
        </>
    )
}
export default ItemDetailContainer