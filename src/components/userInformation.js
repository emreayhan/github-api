import React, { Component } from "react";
import github from "../api/github";

class UserInformation extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    str: this.props.location.pathname,
    user: {}
  };
  async componentDidMount() {
    await this.setState({
      str: this.state.str.substring(this.state.str.indexOf("s/") + 2)
    });

    github
      .get(`/users/${this.state.str}`)

      .then(response => {
        console.log(response);
        this.setState({ user: response.data });
      });
  }

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <img
          src={this.state.user.avatar_url}
          style={{
            marginLeft: "10%",
            width: "300px",
            height: "300px"
          }}
        />
        <div
          style={{
            float: "right",
            textAlign: "center",
            marginRight: "10%"
          }}
        >
          <div>Name : {this.state.user.name}</div>
          <div>Location : {this.state.user.location}</div>
          <div>
            Company :{" "}
            {this.state.user.company ? this.state.user.company : "unspecified"}
          </div>
          <div>Followers : {this.state.user.followers}</div>
          <div>Repos : {this.state.user.public_repos}</div>
          Github :
          <a href={this.state.user.html_url}> {this.state.user.html_url}</a>
        </div>
      </div>
    );
  }
}

export default UserInformation;
