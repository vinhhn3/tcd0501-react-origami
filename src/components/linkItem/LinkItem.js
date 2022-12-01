import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ url, title }) => {
  return (
    <li className="listItem">
      <Link to={url}>{title}</Link>
    </li>
  );
};

export default LinkItem;
