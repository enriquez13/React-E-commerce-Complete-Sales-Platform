import React,{useState, useContext} from 'react'

const cartContext = React.createContext([])
export const useCartContext = ()=> useContext(cartContext)
export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])
const [opens, setOpens] = useState(false)
//console.log('carrito: ', cart)

const OpenSlider = (open) => { setOpens(open) } 

const addProduct = (item, quantity, talla, color, ide, img) =>{
  if (isInCart(ide)) {
    setCart(cart.map(product => {
      return product.ide === ide ? { ...product, quantity: product.quantity + quantity, talla, color, ide, img} : product
    }))
  } else {
    setCart([...cart, { ...item, quantity, talla, color, ide, img}])
  } 
  
}


const totalPrice = () =>{
  return cart.reduce((prev,act) => prev + act.quantity * act.valor, 0)
}
//console.log('totalPrice: ' ,totalPrice )
const totalProducts = () =>{
  return cart.reduce((acomulador,productoActual) => acomulador + productoActual.quantity, 0)
}

const clearCart = ()=> setCart([])
const removeProduct = (ide)=> setCart(cart.filter(product => product.ide !== ide))
const isInCart = (ide) => {
    return (
      cart.find(product => product.ide===ide ) ? true : false
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
      OpenSlider,
      opens,
      cart
      }}>
    {children}
    </cartContext.Provider>
  )
}
