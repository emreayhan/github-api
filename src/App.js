import React, { Component } from "react";
import { debounce } from "lodash";

import github from "./api/github";
import { BrowserRouter as Router, NavLink, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";

import SearchBar from "./components/searchBar";
import Users from "./components/users";
import UserInformation from "./components/userInformation";
import "./App.css";

class App extends Component {
  state = {
    users: []
  };

  onSearchSubmit = debounce(async user => {
    const response = await github.get("/search/users", {
      params: { q: user }
    });
    this.setState({ users: response.data.items });

    console.log(this.state.users.map(el => el));
  }, 600);

  moreUser = debounce(async () => {
    const otherResponse = await github.get("/search/users", {
      params: {
        q: "followers:>1000"
      }
    });
    this.setState({ users: otherResponse.data.items });
    console.log(this.state.users);
    console.log(otherResponse);
  }, 500);

  moreRepo = debounce(async () => {
    const otherResponse = await github.get("/search/users", {
      params: {
        q: "repos:>10000"
      }
    });
    this.setState({ users: otherResponse.data.items });
    console.log(this.state.users);
    console.log(otherResponse);
  }, 500);
  render() {
    return (
      <Router>
        <div
          className=" ui container"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Route
            path="/"
            render={() => {
              return (
                <SearchBar
                  onSubmit={this.onSearchSubmit}
                  onMoreUser={this.moreUser}
                  onMoreRepo={this.moreRepo}
                />
              );
            }}
          />

          <Route
            path="/users"
            exact
            render={() => {
              return <Users user={this.state.users} />;
            }}
          />

          <Route path="/users/:login" exact component={UserInformation} />
        </div>
      </Router>
    );
  }
}

export default App;
