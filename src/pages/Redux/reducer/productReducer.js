import { ADD_TO_CART, ADD_USERS, LOAD_PRODUCTS, LOAD_USERS, REMOVE_FROM_CART, REMOVE_USERS } from "../actionTypes/actionTypes";

export const initialState = {
  products: [],
  cart: [],
  users: []
}

export const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(product => product.idMeal === action.payload.idMeal);
  // console.log(selectedProduct)

  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload
      }
    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case REMOVE_USERS:
      return {
        ...state,
        users: state.users.filter(user=> user._id !== action.payload)
      }
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(product => product.idMeal !== selectedProduct.idMeal);
        selectedProduct.quantity += 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct]
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(product => product.idMeal !== selectedProduct.idMeal);
        selectedProduct.quantity -= 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct]
        };
      }
      return {
        ...state,
        cart: state.cart.filter(product => product.idMeal !== action.payload.idMeal)
      };
    default:
      return state;
  }
}