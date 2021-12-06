import React, { Component } from "react";
import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
  };

  handleChange = (event) => {
    const {name,value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in" onSubmit={this.handleSubmit}>
        <h2>I already have an account</h2>
        <span className="title">Sign in with your email and password</span>

        <form className="form-control">
          <FormInput
            name="userid"
            type="email"
            value={this.state.userid}
            handleChange={this.handleChange}
            label="userid"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton>Sign in</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
