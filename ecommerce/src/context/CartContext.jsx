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
    console.log('carrito: ' , cart);

    const removeAllCart = () => setCart([])

    const inCart = (id) => {
        return cart.find(product => product.id === id) ? true : false
    }

    const removeCart = (id) => setCart(cart.filter(product => product.id !== id))

    return (
        <CartContext.Provider value={{removeAllCart, inCart, removeCart, addProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider