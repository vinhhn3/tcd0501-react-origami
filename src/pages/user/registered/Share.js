import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Posts from "../../../components/posts/Posts";
import OrigamiContext from "../../../context/origami/origamiContext";

const Share = () => {
  const origamiContext = useContext(OrigamiContext);
  const { logoutUser, isLoggedIn, privatePosts, submitPost } = origamiContext;
  let history = useHistory();
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const onSubmit = (e) => {
    console.log(text);
    submitPost(text);
    setText("");
  };
  const onLogout = async () => {
    logoutUser();
    if (!isLoggedIn) {
      history.push("/");
    }
  };
  return (
    <>
      <div className="Main">
        <div className="Input">
          <h1>Share your thoughts ...</h1>
          <textarea name="text" value={text} onChange={onChange}></textarea>
          <button onClick={onSubmit}>Post</button>
        </div>
        <div>
          <h2>Last 3 post on your wall</h2>
          <Posts posts={privatePosts} />
          <button onClick={onLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Share;
