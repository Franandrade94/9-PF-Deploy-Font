import "./administrarusers.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/index";
import UserCard from "./UsersCard/UserCard";
import Loading from "../6-Loading/Loading";

class AdministrarUsers extends Component {

    componentDidMount() {
        this.props.getAllUsers();
    }

    handleAdmin = (id) => {
        this.props.setAdminUsers(id);
    }

    render(){
        let users=[]
        users = this.props.users
        
        return(
            <div className="UserCard-Container">
                <div>
                    <div className="UserCard-Home">
                        {(users?.length === 0) ? <Loading/>  : users?.map((user) => {
                            return <div key={user.id}>
                                           
                                <UserCard
                                    id={user.id}
                                    name={user.name}
                                    email={user.email} 
                                    admin={user.admin}
                                    image={user.picture}
                                />

                                {(user?.admin === false) ? <button className="Noadmin" onClick={() => this.handleAdmin(user.id)}>NO ADMIN</button> : <button className="Admin" onClick={() => this.handleAdmin(user.id)}>ADMIN</button>}

                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
};

export const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => dispatch(actions.getAllUsers()),
        setAdminUsers: (id) => {
            dispatch(actions.setAdminUsers(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdministrarUsers);
