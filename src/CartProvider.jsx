import React,{useState, useContext, useEffect} from 'react'

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

// Precio total
//const totalPrice = () =>{
//  return cart.reduce((prev,act) => prev + act.quantity * act.valor, 0)
//}
//console.log('totalPrice: ' ,totalPrice )

//Descuento a partir de la segunda prenda
const descuento = 0.6; // 40% de descuento
const totalPrice = () => {
  const total = cart.reduce((prev, product, index) => {
    const valor = Number(product.valor);
    const cantidad = product.quantity || 1; // Si la propiedad quantity no está definida, se asume que hay 1 producto
    if (index > 0 || cantidad > 1 ) {
      prev += valor * descuento * cantidad;
    } else {
      prev += valor * cantidad;
    }
    return prev;
  }, 0);
  return total;
};
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

   // Guardar y recuperar el carrito del localStorage
   useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

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
