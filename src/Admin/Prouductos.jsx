import React from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore'

export const Prouductos = () => {
 

  const products = {
    props:["element0", "element1", "elementN"]
}
const handleClick =()=>{
    const db = getFirestore();
    const productsCollection = collection(db, 'productos')
    addDoc(productsCollection, products)
    .then(({id})=> console.log(id))
}
   



  return (
    <>
    <div className='ml-5 mt-3'>Prouductos</div>
    <button onClick={handleClick}>click</button>
    </>
    )
}
