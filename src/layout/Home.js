import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import OrigamiContext from "../context/origami/origamiContext";
import NotFound from "../pages/error/NotFound";
import Profile from "../pages/user/registered/Profile";
import Share from "../pages/user/registered/Share";
import Login from "../pages/user/unregistered/Login";
import Main from "../pages/user/unregistered/Main";
import Register from "../pages/user/unregistered/Register";

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
