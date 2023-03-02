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


    render(){

        let users=[];
        users = this.props.users;

        console.log(users, "ke ondaaa")

        return(
            <div className="ProductCard-Container">
                <div>
                    <div className="ProductCard-Home">
                        {(users?.length === 0) ? <Loading/>  : users?.map((user) => {
                            return <div key={user.id}>
                                
                                {(user?.admin === false) ? <button className="eliminarbutt">Hacer admin</button> : <button className="restaurarbutt">hacer user</button>}
                                
                                <UserCard
                                    id={user.id}
                                    name={user.name}
                                    email={user.email} 
                                    admin={user.admin}
                                    image={user.image}
                                />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdministrarUsers);
