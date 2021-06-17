// Initial State
const initialState = {
  display: 'home'
};

// Reducer Function
export default function reducer( state=initialState, action ) {

  switch(action.type) {
    case 'TOGGLE_DISPLAY':
     return { ...state, display: action.payload };
    default:
       return state
  }

}

// Action Creator: A function that returns an action object

export const initializeDisplay = () => {
  return {
    type: 'TOGGLE_DISPLAY',
    payload: 'home'
  }
}

export const toggleDisplay = (display) => {
  return {
    type: 'TOGGLE_DISPLAY',
    payload: display
  }
}
