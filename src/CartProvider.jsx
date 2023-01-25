import React,{useState, useContext} from 'react'

const cartContext = React.createContext([])
export const useCartContext = ()=> useContext(cartContext)
export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])
//console.log('carrito: ', cart)

const addProduct = (item, quantity, talla, color) =>{
  //if (isInCart(item.id)) {
    //setCart(cart.map(product => {
      //return product.id === item.id ? { ...product, quantity: product.quantity + quantity, talla, color} : product
  //  }))
  //} else {
    setCart([...cart, { ...item, quantity, talla, color}])
  } 
  
//}


const totalPrice = () =>{
  return cart.reduce((prev,act) => prev + act.quantity * act.valor, 0)
}
//console.log('totalPrice: ' ,totalPrice )
const totalProducts = () =>{
  return cart.reduce((acomulador,productoActual) => acomulador + productoActual.quantity, 0)
}

const clearCart = ()=> setCart([])
const removeProduct = (id)=> setCart(cart.filter(product => product.id !== id ))
const isInCart = (id) => {
    return (
      cart.find(product => product.id===id ) ? true : false
    )
  }
  //console.log(cart)

  return (
    <cartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      totalPrice,
      totalProducts,
      cart
    }}>
    {children}
    </cartContext.Provider>
  )
}
