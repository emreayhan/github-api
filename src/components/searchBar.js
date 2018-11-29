import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";
import { debounce } from "lodash";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  state = { user: "" };

  handleChange = async user => {
    await this.setState({ user });
    this.props.onSubmit(this.state.user);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>User Search</label>
            <input
              type="text"
              value={this.state.user}
              onChange={e => this.handleChange(e.target.value)}
            />
            <NavLink
              to="/users"
              exact
              style={{
                marginLeft: "20px",
                marginBottom: "100px",
                color: "dodgerblue"
              }}
            >
              Find
            </NavLink>
            <NavLink
              to="/users"
              exact
              style={{
                marginLeft: "20px",
                marginBottom: "100px",
                color: "dodgerblue"
              }}
            >
              <button onClick={this.props.onMoreUser}>
                user has more than 1000 followers
              </button>
            </NavLink>
            <NavLink
              to="/users"
              exact
              style={{
                marginLeft: "20px",
                marginBottom: "100px",
                color: "dodgerblue"
              }}
            >
              <button onClick={this.props.onMoreRepo}>
                user has more than 10000 repos
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
