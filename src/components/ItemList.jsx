import React from 'react'
import Item from './Item'

 const ItemList = ({data=[]}) => {
  return (
    <>
    
    {
    data.map(product => 
    <Item key={product.ide} info={product} />)
    }
 
    </>
  )
}
export default ItemList
