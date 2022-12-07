import React, { useEffect, useState } from 'react'
import { useContext } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => { 
    const [cart, setCart] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addProduct = (item, count) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, count: product.count + count } : product
            }));
        }   else {
                setCart([...cart, {...item, count }]);
        }
        console.log({item});
    }

    useEffect(() => {
        setTotalCount(cart.reduce((acc, item) => acc + item.count, 0));
        setTotalPrice(cart.reduce((acc, item) => acc + item.precio, 0));


    }, [cart]);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  return (
    <CartContext.Provider value={{
        cart,
        totalCount,
        totalPrice,
        addProduct,
        clearCart,
        isInCart,
        removeProduct
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider