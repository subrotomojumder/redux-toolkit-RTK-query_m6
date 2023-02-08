import {configureStore } from "@reduxjs/toolkit";
import {usersApi} from "./features/api/apiSlice";
import logger from "redux-logger";

const store = configureStore({
    // devTools: false,
    reducer: {
        [usersApi.reducerPath] : usersApi.reducer,
        // cart: cartReducer,
        // filter: filterReducer,
        // userss: usersReducer,
        // users: userReducer,
    },
    // concat er bitor logger  add kore jabe
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(usersApi.middleware)
})

export default store;