import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
  name: 'category',
  initialState: 'home',
  reducers: {
    toggleCategory( state, action) {
      return action.payload
    },
  }
})

export const { toggleCategory } = categorySlice.actions;

export default categorySlice.reducer;
