import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./Main";
import Register from "./Register";
import Profile from "./Profile";
import Login from "./Login";
import Share from "./Share";
import NotFound from "./NotFound";
import OrigamiContext from "../../src/context/origami/origamiContext";

const Home = () => {
  const origamiContext = useContext(OrigamiContext);
  const { isLoggedIn } = origamiContext;
  return (
    <>
      <Switch>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/share" /> : <Main />}
        </Route>
        <Route exact path="/register">
          {isLoggedIn ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route exact path="/profile">
          {!isLoggedIn ? <Redirect to="/register" /> : <Profile />}
        </Route>
        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/share">
          {!isLoggedIn ? <Redirect to="/register" /> : <Share />}
        </Route>
        <Route path="" component={NotFound} />
      </Switch>
    </>
  );
};

export default Home;
