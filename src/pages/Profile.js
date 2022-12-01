import React, { useContext } from "react";
import logo from "../../src/img/blue-origami-bird.png";
import Posts from "../components/posts/Posts";
import OrigamiContext from "../../src/context/origami/origamiContext";
import { useHistory } from "react-router-dom";

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
          <img src={logo} />
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
            <Posts posts={privatePosts} />
            <button onClick={onLogout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
