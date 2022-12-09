import { createContext, useState } from "react";


export const CartContext = createContext([]);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    }
    const addToCart= (product, quantity) => {
        console.log(isInCart(product.id));
        setCart([...cart, {...product, quantity}]);
    };

    const clear = () => {
        setCart([]);
    }
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    return(
        <CartContext.Provider value={{cart, addToCart,removeProduct,clear}}>
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider;