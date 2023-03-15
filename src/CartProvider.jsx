import React,{useState, useContext, useEffect} from 'react'

const cartContext = React.createContext([])
export const useCartContext = ()=> useContext(cartContext)
export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])
const [opens, setOpens] = useState(false)

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

//Descuento a partir de la segunda prenda
const descuentos = [1, 0.8, 0.6]; // 0% de descuento al primer elemento, 20% al segundo, 40% a partir del tercero

const totalPrice = () => {
  return cart.reduce((prev, product, index) => {
    const valor = Number(product.valor);
    const cantidad = product.quantity || 1; // Si la propiedad quantity no está definida, se asume que hay 1 producto
    const descuento = descuentos[index] || descuentos[descuentos.length - 1]; // Si no hay descuento definido para el índice actual, se aplica el descuento máximo
    prev += valor * descuento * cantidad;
    return prev;
  }, 0);
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
