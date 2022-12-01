import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="Posts">
      {posts.map((item) => (
        <Post
          key={item._id}
          description={item.description}
          author={item.author.username}
        />
      ))}
    </div>
  );
};

export default Posts;
