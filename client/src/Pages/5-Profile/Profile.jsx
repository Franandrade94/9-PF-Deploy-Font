import "./profile.css";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { createUser } from "../../Redux/actions";
import { useDispatch } from "react-redux";


const Profile =()=>   {
    
const { user } = useAuth0();


const newUsers = {name: user.name, picture: user.picture, email: user.email, token: user.sub }
console.log(newUsers, 'NEW USERS')

const dispatch = useDispatch();




useEffect(()=> {dispatch(createUser(newUsers))},[])

        return(
            <div className="ProfileC">
                <div>
                </div>
            </div>
        )
}

export default Profile;