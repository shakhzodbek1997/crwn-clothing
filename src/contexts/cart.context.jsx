import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd ) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id)
     
    //if found, increment quantity
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id  === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem 
        ) 
    }

    // return new array with modified cartItems/ new cart Item
    return[...cartItems, { ...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, cartIttemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartIttemToRemove.id
    );


    // check if quantity is equal to 1, if it is remove that from the cart
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartIttemToRemove.id);

    }
    // return back cart items with matching cart item with reduced quantity
    return cartItems.map((cartItem) => cartItem.id  === cartIttemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem 
) 
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0
});


export const CartProvider = ({children}) => {
    const[isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (cartIttemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartIttemToRemove))
    }

    const value = {
        isCartOpen,
        setIsCartOpen, 
        addItemToCart, 
        removeItemToCart,
        cartItems, 
        cartCount
    }

    return (
        <CartContext.Provider
            value={value}
        >
            {children}
        </CartContext.Provider>
    )
}