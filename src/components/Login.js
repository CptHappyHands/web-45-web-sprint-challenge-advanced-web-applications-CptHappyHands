import axios from "axios";
import React from "react";

class Login extends React.Component {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  state = {
    credentials: {
      username: "",
      password: "",
    },
    error: false,
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    if (this.state.credentials === "") {
      this.setState({
        error: "Username or Password not valid",
      });
    } else {
      axios
        .post("http://localhost:5000/api/login", this.state.credentials)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.payload);
          this.props.history.push("/bubbles");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // const error = "";
  //replace with error state

  render() {
    return (
      <div>
        <h1>Welcome to the Bubble App!</h1>
        <div data-testid="loginForm" className="login-form">
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button id="submit">login</button>
          </form>
        </div>

        <p id="error" className="error">
          {this.state.error}
        </p>
      </div>
    );
  }
}

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
