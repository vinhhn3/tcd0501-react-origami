import React from "react";

const Post = ({ description, author }) => {
  return (
    <div className="Post">
      <p className="description">{description}</p>
      <div>
        <span>
          <small>Author:</small>
          {author}
        </span>
      </div>
    </div>
  );
};

export default Post;
