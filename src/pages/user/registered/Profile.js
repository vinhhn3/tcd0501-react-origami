import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Posts from "../../../components/posts/Posts";
import OrigamiContext from "../../../context/origami/origamiContext";
import logo from "../../../img/blue-origami-bird.png";

const Profile = () => {
  const origamiContext = useContext(OrigamiContext);
  const { userData, privatePosts, logoutUser, isLoggedIn } = origamiContext;
  let history = useHistory();

  const onLogout = async () => {
    logoutUser();
    if (!isLoggedIn) {
      history.push("/");
    }
  };
  return (
    <>
      <div className="Main">
        <div className="Profile">
          <img src={logo} alt="logo" />
          <div className="personal-info">
            <p>
              <span>Email:</span>
              {userData.username}
            </p>
            <p>
              <span>Posts:</span>
              {privatePosts.length}
            </p>
          </div>
          <div>
            <h2>3 of your recent posts</h2>
            <Posts posts={privatePosts.slice(-3).reverse()} />
            <button onClick={onLogout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
