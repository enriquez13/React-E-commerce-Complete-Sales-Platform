import React from 'react'
import Item from './Item'

 const ItemList = ({data=[]}) => {
  return (
    <>
    
    {
    data.map((product, index) => 
    <Item key={index} info={product} />)
    }
 
    </>
  )
}
export default ItemList
