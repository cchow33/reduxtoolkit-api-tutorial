import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userIinfo: {
      name: 'Lucien',
      email: 'lucien@gmail.com',  
    },
    // When we start fetching or posting pending will change to true
    pending: false,
    error: false,
  },
  reducers: {
    // How to handle async functions inside redux with custom reducers: 
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload; // the data reducer uses to update the state; 
    },
    updateError: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});


// Export custom reducers
export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;



