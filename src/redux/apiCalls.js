// import custom reducers
import axios from 'axios';
import { updateStart, updateSuccess, updateError } from "./userSlice";

// We will be exporting this to use in our Update component:
export const updateUser = async (user, dispatch) => {
  // 1. When update button is clicked, updateStart is dispatch:
  dispatch(updateStart());
  try {
    // Make a req send user name and email
    const res = await axios.post(
      'http://localhost:8800/api/users/87778/update', 
      user
    );
    // dispatch action from reducer and pass in payload and return data from api call: 
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateError());
  }  
}