import React from "react";
import { useSelector } from 'react-redux'
import Warning from "../warning/Warning";
import "./update.css";
import { updateUser} from '../../redux/apiCalls'
import { useState } from "react";
// use a hook to dispatch action
import { useDispatch } from "react-redux";  

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { userInfo, pending, error } = useSelector(state => state.user.userInfo);
  // dispatch update action using useDispatch hook: 
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    // We won't be dispatching anything here because we will be handling it in our apiCalls:
    updateUser({name, email}, dispatch) // pass in payload -name, email 
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.name}
                // update setName name state whenever name is changed
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            
            <button disabled={pending}
              className="updateButton" onClick={handleUpdate}
              // when this update button is clicked it, the 'update' action is dispatched in userSlice.js
            >
              Update
            </button>

  {/* Messages will appear after 2 seconds */}
            { error && <span className="error">Something went wrong!</span>}
            { pending === false && <span className="success">Account has been updated</span>} 
          </form>
        </div>
      </div>
    </div>
  );
}
