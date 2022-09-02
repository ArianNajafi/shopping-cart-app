import React, { useContext, useReducer } from "react";

import { products } from '../data'

const cartContext = React.createContext()
const cartContextDispatcher = React.createContext();



const CartProvider = ({ children }) => {

    const cartReducer = (state, action) => {
        if (action.type === "ADD_TO_CART") {
            const copyCart = [...state.cart];
            const productIndex = copyCart.findIndex(item => item.id === action.product.id)   //check if product exsist before
            if (productIndex < 0) {
                copyCart.push({ ...action.product, number: 1 });
                return { ...state, cart: copyCart }
            }
            else if (productIndex >= 0) {
                const updatedProduct = { ...copyCart[productIndex] };
                updatedProduct.number++;
                copyCart[productIndex] = updatedProduct;
                return { ...state, cart: copyCart }
            }
        }
        else
            return state
    }

    const [cart, dispatch] = useReducer(cartReducer, { cart: [], totoalPrice: 0 })

    // console.log(cart);

    return (
        <cartContext.Provider value={cart}>
            <cartContextDispatcher.Provider value={dispatch}>
                {children}
            </cartContextDispatcher.Provider>
        </cartContext.Provider>
    );
}

export default CartProvider;

export const useCartProducts = () => useContext(cartContext);
export const useCartProductsDispatcher = () => useContext(cartContextDispatcher);