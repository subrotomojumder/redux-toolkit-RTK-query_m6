import React, { createContext, useContext, useEffect} from 'react';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {
   
    return (
        <PRODUCT_CONTEXT.Provider value={""}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProduct = ()=> {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}

export default ProductProvider;