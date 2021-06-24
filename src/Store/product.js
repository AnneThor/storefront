// Initial State
// const displayText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et. Sagittis id consectetur purus ut faucibus. Odio ut sem nulla pharetra. Amet volutpat consequat mauris nunc. Non curabitur gravida arcu ac tortor."
// const base = `https://at-storefront-server.herokuapp.com/product`
const displayText = "Short description of the product"
const initialState = {
  products: [
    { name: "shirt", price: 5, quantity: 5, description: displayText, category: "HOUSEWARES" },
    { name: "orange", price: 2.5, quantity: 17, description: displayText,  category: "FOOD" },
    { name: "shoes", price: 50, quantity: 5, description: displayText, category: "HOUSEWARES" },
    { name: "tent", price: 25, quantity: 2, description: displayText, category: "OUTDOORS" },
    { name: "jacket", price: 75, quantity: 20, description: displayText, category: "HOUSEWARES" },
    { name: "shovel", price: 5, quantity: 5, description: displayText, category: "OUTDOORS" },
    { name: "apple", price: 1.25, quantity: 5, description: displayText, category: "FOOD" },
    { name: "pants", price: 5, quantity: 5, description: displayText, category: "HOUSEWARES" },
    { name: "Rake", price: 5, quantity: 5, description: displayText, category: "OUTDOORS" },
    { name: "bagel", price: 0.5, quantity: 15, description: displayText, category: "FOOD" },
  ],
  loadingState: "idle",
  error: null
}


// Reducer Function
export default function reducer( state=initialState, action ) {

  switch(action.type) {
    case 'UPDATE_QUANTITY':
     return state
    default:
     return state
  }

}

// Action Creator: A function that returns an action object

export const initializeProduct = () => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: 1
  }
}

export const updateProductCount = (product, count) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: { product, count }
  }
}
