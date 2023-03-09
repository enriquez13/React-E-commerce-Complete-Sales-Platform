import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
//import { Pie } from "../front/Pie";
import Navbar from '../front/NavBar'
import ItemList from '../ItemList';


export const ItemDetailContainer = ()=>{
    const [data,setData] = useState({})
    const { detalleId } = useParams()
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        async function fetchData() {
        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'productos', detalleId)
        const queryCollection = collection(querydb, 'productos');

        const [docSnap, collectionSnap] = await Promise.all([
            getDoc(queryDoc),
            getDocs(queryCollection)
          ]);

          const Data = { id: docSnap.id, ...docSnap.data() };
          const allProductsData = collectionSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setData(Data);
            setAllProducts(allProductsData);
          setIsLoading(false);
    }
    fetchData();
  }, []);
  if (isLoading) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-2 text-xl font-bold text-gray-600">Cargando...</div>
        <div className="w-6 h-6 border-4 border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }
   
//console.log(detalleId)
    return (
        <>
        <Navbar />
        <ItemDetail data={data} allProducts={allProducts}/>
        <ItemList />
      
        </>
    )
}
export default ItemDetailContainer