import React, { useContext, useEffect } from "react";
import Posts from "../components/posts/Posts";
import OrigamiContext from "../../src/context/origami/origamiContext";

const Main = () => {
  const origamiContext = useContext(OrigamiContext);
  const { publicPosts } = origamiContext;
  useEffect(async () => {
    origamiContext.getPublicPosts();
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
