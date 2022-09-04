import React, { useContext, useReducer } from "react";

import { products } from '../data'

const cartContext = React.createContext()
const cartContextDispatcher = React.createContext();



const CartProvider = ({ children }) => {

    //reducer function
    const cartReducer = (state, action) => {
        if (action.type === "ADD_TO_CART") {
            const copyCart = [...state.cart];
            const productIndex = copyCart.findIndex(item => item.id === action.product.id)   //check if product exsist before
            if (productIndex < 0) {
                copyCart.push({ ...action.product, number: 1 });
                return getTotal_price_number({ ...state, cart: copyCart })
            }
            else if (productIndex >= 0) {
                const updatedProduct = { ...copyCart[productIndex] };
                updatedProduct.number++;
                copyCart[productIndex] = updatedProduct;
                return getTotal_price_number({ ...state, cart: copyCart })
            }
        }

        else if (action.type === "MINES_PRODUCT") {
            // if(action.product.number === 1){

            // }
            const copyCart = [...state.cart];
            const productIndex = copyCart.findIndex(item => item.id === action.product.id);
            const updatedProduct = { ...copyCart[productIndex] };
            console.log(updatedProduct.number);
            updatedProduct.number--;
            copyCart[productIndex] = updatedProduct;
            return getTotal_price_number({ ...state, cart: copyCart })
        }

        else if (action.type === 'DELETE_FROM_CART') {
            console.log("delete");
            const copyCart = [...state.cart];
            const updateCart = copyCart.filter((item) => {
                return item.id !== action.product.id;
            })
            console.log(updateCart);
            return getTotal_price_number({ ...state, cart: updateCart })
        }

        else
            return state
    }

    // useReducer
    const [cart, dispatch] = useReducer(cartReducer, { cart: [], totalPrice: 0, totalNum: 0 })


    //render this
    return (
        <cartContext.Provider value={cart}>
            <cartContextDispatcher.Provider value={dispatch}>
                {children}
            </cartContextDispatcher.Provider>
        </cartContext.Provider>
    );
}


// this function used for calculate the total price and total number of products and retrun the updateState
const getTotal_price_number = (state) => {
    let totalPrice = 0;
    let totalNum = 0;
    state.cart.forEach((item) => {
        totalPrice = totalPrice + (item.number * item.price)
        totalNum = totalNum + item.number;
    })
    return { ...state, totalPrice: totalPrice, totalNum: totalNum }
}



export default CartProvider;

// custum hook for contexts
export const useCartState = () => useContext(cartContext);
export const useCartStateDispatcher = () => useContext(cartContextDispatcher);