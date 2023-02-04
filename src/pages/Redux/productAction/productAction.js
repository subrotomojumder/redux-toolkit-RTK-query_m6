import { ADD_TO_CART, ADD_USERS, LOAD_PRODUCTS, LOAD_USERS, REMOVE_FROM_CART, REMOVE_USERS } from "../actionTypes/actionTypes"

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    };
};
export const removeFormCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    };
};
export const loadProducts = (data) => {
    return {
        type: LOAD_PRODUCTS,
        payload: data
    }
}
export const loadUsers = (data) => {
    return {
        type: LOAD_USERS,
        payload: data
    }
}
export const addUser = (data) => {
    return {
        type: ADD_USERS,
        payload: data
    }
}
export const removeUser = (id) => {
    return {
        type: REMOVE_USERS,
        payload: id
    }
}

