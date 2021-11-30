import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";

const request = require("../../utility/utility-functions")
const axios = require("axios")

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      city: "",
      usertype: "user",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email,password,city,usertype} = this.state;
    const endpoint = "/users/signup";
    //console.log(email,password,city,usertype)
    
    const result = await request("/users/signup", {
      email : 'email@gmail.com',
      password :"password",
      city : 'city',
      usertype : 'user'
    })
  

    console.log(result)

    this.setState({
      email: "",
      password: "",
      city: "",
      usertype: "user",
    })
   
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password, city } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span className="title">Sign up here</span>
        <form className="form-control" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="text"
            name="city"
            value={city}
            onChange={this.handleChange}
            label="City"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
