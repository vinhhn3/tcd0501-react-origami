import React, { useContext, useEffect } from "react";
import Posts from "../../../components/posts/Posts";
import OrigamiContext from "../../../context/origami/origamiContext";

const Main = () => {
  const origamiContext = useContext(OrigamiContext);
  const { publicPosts, getPublicPosts } = origamiContext;
  useEffect(() => {
    getPublicPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="Main">
        <h1>Soooooooooooooooome Heading</h1>
        <Posts posts={publicPosts} />
      </div>
    </>
  );
};

export default Main;
