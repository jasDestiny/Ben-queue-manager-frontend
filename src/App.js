import "./App.css";

import Home from "./pages/home-page/home-page.component";
import SignInAndSignUp from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component";

import { Route, Switch } from "react-router";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/services" component={Home} />
        <Route exact path="/services/providers" component={Home} />
        <Route exact path="/add/services" component={Home} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
