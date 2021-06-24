const initialState = { customerId: null, items: [] };

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case 'ADD_ITEM':
      let prevItems = state.items
      let nextState = state;
      if (prevItems.filter(item => item.name === action.payload.name).length > 0) {
        let updItem = prevItems.filter(item => item.name === action.payload.name)[0];
        updItem.numInCart = updItem.numInCart + 1
        return { ...state, items: prevItems }
      } else {
        let newItem = action.payload
        newItem.numInCart = 1
        nextState = [...prevItems, action.payload]
        return { ...state, items: nextState };
      }

    case 'REMOVE_ITEM':
      let prevList = state.items
      let updList = prevList.filter(item => item.name === !action.payload.name);
      return { ...state, items: updList }

    case 'CLEAR':
      return initialState;

    default:
      return state;
  }

};

export const addItems = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

export const removeItem = (item) => {
  return {
    type: 'REMOVE_ITEM',
    payload: item
  }
}
