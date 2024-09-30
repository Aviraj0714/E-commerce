import React, { createContext } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 40;

    const value = {
        products,
        currency,
        delivery_fee
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

// Add propTypes validation
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
