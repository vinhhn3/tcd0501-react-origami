import React, { useContext } from "react";
import LinkItem from "./LinkItem";
import BirdNavbar from "../../img/white-origami-bird.png";
import BirdFooter from "../../img/blue-origami-bird-flipped.png";
import OrigamiContext from "../../context/origami/origamiContext";

const LinkItems = ({ logo }) => {
  const origamiContext = useContext(OrigamiContext);
  const { linkItems } = origamiContext;

  return (
    <ul>
      {logo === "navbar" && <img src={BirdNavbar} />}
      {linkItems.map((item) => (
        <LinkItem key={item.id} url={item.url} title={item.title} />
      ))}
      {logo === "footer" && <img src={BirdFooter} />}
    </ul>
  );
};

export default LinkItems;
