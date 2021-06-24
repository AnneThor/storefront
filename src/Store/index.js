import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import category from './category.js'
import product from './product.js'
import cart from './cart.js'

const reducers = combineReducers({ category, product, cart });

const store = () => {
    return createStore(reducers, composeWithDevTools() )
}

export default store()
