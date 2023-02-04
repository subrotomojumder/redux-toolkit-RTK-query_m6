import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import rootReducer from "./reducer/rootReducer/rootReducer";
import cartCounter from "./middleware/cartCounter";
        
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, thunk)))

export default store;