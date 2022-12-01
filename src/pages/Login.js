import React, { useContext, useState } from "react";
import OrigamiContext from "../../src/context/origami/origamiContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const origamiContext = useContext(OrigamiContext);
  const { isLoggedIn, loginUser } = origamiContext;
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  let history = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(login);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    loginUser(login);
    if (isLoggedIn) {
      setLogin({
        username: "",
        password: "",
      });
      history.push("/profile");
    }
  };

  return (
    <>
      <div className="Main">
        <div className="Login">
          <h1>Login Page</h1>
          <form>
            <div className="form-control">
              <label>Email</label>
              <input
                type="email"
                name="username"
                value={login.username}
                onChange={onChange}
              />
            </div>
            <div className="form-control">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={login.password}
                onChange={onChange}
              />
            </div>
            <div className="form-control">
              <button type="submit" onClick={onSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
