import React, { useReducer, useState, createContext } from "react";
import Navigation from "../components/Navigation/Navigation";
import '../components/Navigation/Navigation.css'

export const ProductInCart = createContext();
export const ProductInCartActions = createContext();

const Layout = ({ children }) => {

    return (
        <div>
            <Navigation />
            {children}
        </div>
    );
}

export default Layout;