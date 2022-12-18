import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  // Initial state can be empty
  initialState: {
    name: 'Carmen',
    email: 'carmen@gmail.com'
  },
  reducers: {
    update: (state, action) => {

    }
  }

})





