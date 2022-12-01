import React, { useContext } from "react";
import OrigamiContext from "../../context/origami/origamiContext";
import BirdFooter from "../../img/blue-origami-bird-flipped.png";
import BirdNavbar from "../../img/white-origami-bird.png";
import LinkItem from "./LinkItem";

const LinkItems = ({ logo }) => {
  const origamiContext = useContext(OrigamiContext);
  const { linkItems } = origamiContext;

  return (
    <ul>
      {logo === "navbar" && <img src={BirdNavbar} alt="logo-navbar" />}
      {linkItems.map((item) => (
        <LinkItem key={item.id} url={item.url} title={item.title} />
      ))}
      {logo === "footer" && <img src={BirdFooter} alt="logo-footer" />}
    </ul>
  );
};

export default LinkItems;
