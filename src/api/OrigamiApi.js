import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:9999/api",
});

const loginOrigamiUser = (data) => {
  return axiosClient.post("/user/login", data, { withCredentials: true });
};

const getOrigamiPrivatePosts = () => {
  return axiosClient.get("/origami/mine", { withCredentials: true });
};

const logoutOrigamiUser = () => {
  return axiosClient.post("/user/logout", null, { withCredentials: true });
};

const getOrigamiPublicPosts = () => {
  return axiosClient.get("/origami/all?limit=5");
};

const createPost = (text) => {
  return axiosClient.post(
    "/origami",
    { description: text },
    { withCredentials: true }
  );
};

const registerOrigamiUser = (user) => {
  return axiosClient.post("/user/register", user, { withCredentials: true });
};
export {
  loginOrigamiUser,
  getOrigamiPrivatePosts,
  logoutOrigamiUser,
  getOrigamiPublicPosts,
  createPost,
  registerOrigamiUser,
};
