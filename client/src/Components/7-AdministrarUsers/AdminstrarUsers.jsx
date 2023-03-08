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

  render() {
    const { users } = this.props;

    return (
      <div className="UserCard-Container">
        <div className="UserCard-Home">
          {users.length === 0 ? (
            <Loading />
          ) : (
            users.map((user) => (
              <div key={user.id}>
                <UserCard
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  admin={user.admin}
                />
                <UserAdminButton
                  id={user.id}
                  isAdmin={user.admin}
                  handleAdmin={this.handleAdmin}
                />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

class UserAdminButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: props.isAdmin,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isAdmin !== this.props.isAdmin) {
      this.setState({ isAdmin: this.props.isAdmin });
    }
  }

  handleAdmin = () => {
    const { id, handleAdmin } = this.props;
    handleAdmin(id);
    this.setState((prevState) => ({ isAdmin: !prevState.isAdmin }));
  };

  render() {
    const { isAdmin } = this.state;
    return (
      <button
        className={isAdmin ? "Admin" : "Noadmin"}
        onClick={this.handleAdmin}
      >
        {isAdmin ? "ADMIN" : "NO ADMIN"}
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(actions.getAllUsers()),
  setAdminUsers: (id) => dispatch(actions.setAdminUsers(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdministrarUsers);
