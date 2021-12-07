import "./App.css";

import Home from "./pages/home-page/home-page.component";
import SignInAndSignUp from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";

import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/services" component={Home} />
        <Route exact path="/serviceProviders" component={Home} />
        <Route exact path="/addServices" component={Home} />
        <Route exact path="/settings" component={Home} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
