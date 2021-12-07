import "./App.css";

import Home from "./pages/home-page/home-page.component";
import SignInAndSignUp from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";

import { Route, Switch, Redirect } from "react-router";
import Header from "./components/header/header.component";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userSigned: null,
    };
  }

  handleSignIn = (boolean) => {
    this.setState({ userSigned: boolean });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Home} />
          <Route exact path="/services/providers" component={Home} />
          <Route exact path="/add/services" component={Home} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.state.user ? <Redirect to="/" /> : <SignInAndSignUp handleSignIn={this.handleSignIn}/>
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
