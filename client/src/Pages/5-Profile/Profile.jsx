import "./profile.css";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { createUser } from "../../Redux/actions";
import { useDispatch } from "react-redux";


const Profile =()=>   {
    
const { user } = useAuth0();


const newUsers = {name: user.name,picture: user.picture, email: user.email, token: user.sub }

localStorage.setItem('user', JSON.stringify(newUsers));
const local = localStorage.getItem('user')
const users = JSON.parse(localStorage.getItem('user'))

const dispatch = useDispatch();

console.log(user, user.picture, "soy user")


useEffect(()=> {dispatch(createUser(newUsers))})
console.log(user,"fghfghg")
        return(
            <div className="ProfileC">
                <div>
                </div>
            </div>
        )
    
}

export default Profile;