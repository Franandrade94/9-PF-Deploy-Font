import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../6-Loading/Loading";
import "./userprofile.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/actions";



const UserProfile = () => {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  const newUsers = {name:user.name, email: user.email, token: user.sub}
  
  const OnClick = () => {
    window.location.reload();
  }

  const dispatch = useDispatch();

      console.log(user)

  useEffect(()=> {dispatch(createUser(newUsers))})

  if (isLoading) {
    return <div><Loading /></div>;
  }
  return (
    isAuthenticated && (
      <div>
        <div className="user-profile">
          <button onClick={OnClick}>X</button>
          <div className="userInfoContainer">
            <img src={user.picture} alt={user.name} />
            <div>
              <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
              
              <p>id: {user.sub}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserProfile;
