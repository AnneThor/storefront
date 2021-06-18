import { createStore, combineReducers } from "redux";

// the below turns on an extension in the browser to allow you to see state change
import { composeWithDevTools } from 'redux-devtools-extension';
import category from './category.js'
import product from './product.js'

// 99% of React/Redux apps have many reducers
// this thing { counter } IS what state is inside the app
// later we added in votes from the voting portion
const reducers = combineReducers({ category, product });

const store = () => {
    return createStore(reducers, composeWithDevTools() )
}

export default store()
