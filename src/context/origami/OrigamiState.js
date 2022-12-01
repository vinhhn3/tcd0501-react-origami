import OrigamiContext from "./origamiContext";
import OrigamiReducer from "./origamiReducer";
import { useReducer } from "react";
import axios from "axios";
import {
  USER_LOGIN,
  USER_LOGOUT,
  GET_ALL_POSTS,
  GET_PRIVATE_POSTS,
} from "../types";

const OrigamiState = (props) => {
  const initialState = {
    isLoggedIn: false,
    publicPosts: [],
    userData: {},
    privatePosts: [],
    linkItems: [
      {
        id: 1,
        title: "Post",
        url: "/",
      },
      {
        id: 2,
        title: "Register",
        url: "/register",
      },
      {
        id: 3,
        title: "Login",
        url: "/login",
      },
    ],
  };

  const [state, dispatch] = useReducer(OrigamiReducer, initialState);

  const loginUser = async (login) => {
    const response = await axios.post(
      "http://localhost:9999/api/user/login",
      login,
      { withCredentials: true }
    );
    if (response.status === 200) {
      await getPrivatePosts();
      dispatch({
        type: USER_LOGIN,
        payload: response.data,
      });
    }
  };

  const getPrivatePosts = async () => {
    const response = await axios.get(
      "http://localhost:9999/api/origami/mine?limit=3",
      { withCredentials: true }
    );
    dispatch({
      type: GET_PRIVATE_POSTS,
      payload: response.data,
    });
  };

  const logoutUser = async () => {
    const response = await axios.post(
      "http://localhost:9999/api/user/logout",
      null,
      {
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      dispatch({
        type: USER_LOGOUT,
      });
    }
  };

  const getPublicPosts = async () => {
    const posts = await axios.get(
      "http://localhost:9999/api/origami/all?limit=5"
    );
    dispatch({
      type: GET_ALL_POSTS,
      payload: posts.data,
    });
  };

  const submitPost = async (text) => {
    const response = await axios.post(
      "http://localhost:9999/api/origami",
      { description: text },
      { withCredentials: true }
    );

    console.log(response);
    if (response.status === 200) {
      await getPrivatePosts();
    }
  };

  const registerUser = async (user) => {
    const response = await axios.post(
      "http://localhost:9999/api/user/register",
      user,
      { withCredentials: true }
    );
    if (response.status === 200) {
      await loginUser({ username: user.username, password: user.password });
    }
  };

  return (
    <OrigamiContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        linkItems: state.linkItems,
        publicPosts: state.publicPosts,
        userData: state.userData,
        privatePosts: state.privatePosts,
        loginUser,
        logoutUser,
        getPublicPosts,
        submitPost,
        registerUser,
      }}
    >
      {props.children}
    </OrigamiContext.Provider>
  );
};

export default OrigamiState;
