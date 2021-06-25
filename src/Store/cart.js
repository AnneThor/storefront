const initialState = { items: [] };

export default function reducer(state = initialState, action) {

  let itemIndex, updList;

  switch (action.type) {

    case 'ADD_ITEM':
      itemIndex = state.items.findIndex(item => item.name === action.payload.name)
      if (itemIndex > -1) {
        let currItem = state.items[itemIndex]
        currItem.numInCart++
        let updItems = [
          ...state.items.slice(0, itemIndex), currItem, ...state.items.slice(itemIndex+1)
        ]
        return { items: updItems }
      } else {
        let newItem = action.payload
        newItem.numInCart = 1
        let nextState = [...state.items, newItem]
        return { items: nextState };
      }

    case 'REMOVE_ITEM':
      itemIndex = state.items.findIndex(item => item.name === action.payload.name)
      updList = [
        ...state.items.slice(0, itemIndex), ...state.items.slice(itemIndex + 1)
      ]
      return { items: updList }

    case 'DECREMENT_ITEM':
      itemIndex = state.items.findIndex(item => item.name === action.payload.name)
      let updItem = state.items[itemIndex]
      updItem.numInCart--
      updList = [
        ...state.items.slice(0, itemIndex),
        updItem,
        ...state.items.slice(itemIndex + 1)
      ]
      return { items: updList }

    case 'CLEAR':
      return initialState;

    default:
      return state;
  }

};

export const decrementItem = (item) => {
  return {
    type: 'DECREMENT_ITEM',
    payload: item
  }
}

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
