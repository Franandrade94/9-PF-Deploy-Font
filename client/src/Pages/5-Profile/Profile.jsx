import "./profile.css";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { createUser } from "../../Redux/actions";
import { useDispatch } from "react-redux";


const Profile =()=>   {
    
const { user } = useAuth0();

const { user_metadata } = useAuth0();

const newUsers = {name:user.name, email: user.email, token: user.sub,}

console.log(user_metadata )
const dispatch = useDispatch();

console.log(user, "soy user")

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