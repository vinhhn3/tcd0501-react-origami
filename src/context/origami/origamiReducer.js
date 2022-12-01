import {
  USER_LOGIN,
  USER_LOGOUT,
  GET_ALL_POSTS,
  GET_PRIVATE_POSTS,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userData: action.payload,
        linkItems: [
          {
            id: 1,
            title: "Profile",
            url: "/profile",
          },
          {
            id: 2,
            title: "Share",
            url: "/share",
          },
        ],
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userData: {},
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
    case GET_ALL_POSTS:
      return {
        ...state,
        publicPosts: action.payload,
      };
    case GET_PRIVATE_POSTS:
      return {
        ...state,
        privatePosts: action.payload,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
