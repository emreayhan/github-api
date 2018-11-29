import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";
import github from "../api/github";
import UserInformation from "./userInformation";

class Users extends Component {
  constructor(props) {
    super(props);
  }

  handleUserInformation = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        {this.props.user.map(el => (
          <li key={el.login} style={{ listStyleType: "none" }}>
            <span>{el.username}</span>

            <NavLink
              to={`users/${el.login}`}
              exact
              style={{
                marginLeft: "20px",
                marginBottom: "100px",
                color: "dodgerblue"
              }}
            >
              <img
                src={el.avatar_url}
                style={{ width: "200px", height: "200px" }}
              />
            </NavLink>
          </li>
        ))}
      </div>
    );
  }
}

export default Users;
