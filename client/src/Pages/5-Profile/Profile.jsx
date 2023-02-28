import "./profile.css";
import React, { Component, useEffect } from "react";
import UserProfile from "../../Components/16-UserProfile/UserProfile";
import { useAuth0 } from "@auth0/auth0-react";
import { createUser } from "../../Redux/actions";
import { useDispatch } from "react-redux";


const Profile =()=>   {
    
const { user, isAuthenticated, isLoading } = useAuth0();

const newUsers = {name:user.name, email: user.email, token: user.sub}

const dispatch = useDispatch();

console.log(user)

useEffect(()=> {dispatch(createUser(newUsers))})
console.log(user)
        return(
            <div className="ProfileC">
                <div>
                </div>
            </div>
        )
    
}

export default Profile;