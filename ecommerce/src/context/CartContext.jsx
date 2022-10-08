import React , {useState , useContext} from 'react'
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addProduct = (item, cantidad) => {
        if (inCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad} : product
            }))
        } else {
            setCart([...cart, {...item, cantidad}])
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0)
    }
    
    const totalProducts = () => {
        return cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)
    }

    const removeAllCart = () => setCart([])

    const inCart = (id) => {
        return cart.find(product => product.id === id) ? true : false
    }

    const removeCart = (id) => setCart(cart.filter(product => product.id !== id))

    return (
        <CartContext.Provider value={{removeAllCart, inCart, removeCart, addProduct, totalPrice, totalProducts, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider