// Initial State
const initialState = {
  category: 'home'
};

// Reducer Function
export default function reducer( state=initialState, action ) {

  switch(action.type) {
    case 'TOGGLE_CATEGORY':
     return { ...state, category: action.payload };
    default:
       return state
  }

}

// Action Creator: A function that returns an action object

export const initializeCategory = () => {
  return {
    type: 'TOGGLE_CATEGORY',
    payload: 'home'
  }
}

export const toggleCategory = (category) => {
  return {
    type: 'TOGGLE_CATEGORY',
    payload: category
  }
}
