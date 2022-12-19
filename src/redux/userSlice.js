import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Lucien',
    email: 'lucien@gmail.com'
  },
  reducers: {}

});

export const { update, remove, addHello } = userSlice.actions;
export default userSlice.reducer;



