import { createSlice } from '@reduxjs/toolkit';

// Create a slice of the Redux store
const storeSlice = createSlice({
  name: 'store',
  initialState: {
    selectedStore: null,
  },
  reducers: {
    selectStore: (state, action) => {
      state.selectedStore = action.payload;
      console.log(action.payload)
    },
  },
});

// Export actions
export const { selectStore } = storeSlice.actions;

// Export reducer
export default storeSlice.reducer;
