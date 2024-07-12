import React, { useState } from "react";
import { MdNightlight } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import "../css/header.css";
// import Logo from "../images/logo.png";
import { FaShoppingBasket } from "react-icons/fa";
function Header() {
  const [icon, setIcon] = useState(true);
  const uptadeIcon = () => {
    const headerContainer = document.getElementById("header_container");
    const headerLogoTextTwo = document.getElementById("heaader_logoText_two");
    const root = document.querySelector("body");
    if (icon) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
      headerContainer.style.background =
        "rgb(255, 0, 0) linear-gradient(270deg, rgba(255,0,0,0.9893207282913166) 0%, rgba(255,252,0,1) 100%)";
      headerLogoTextTwo.style.color = "black";
      setIcon(false);
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
      headerLogoTextTwo.style.color = "white";

      headerContainer.style.background =
        "rgb(250, 255, 0) linear-gradient(270deg, rgba(250, 255, 0, 0.9893207282913166) 0%, rgba(208, 29, 29, 1) 100%)";
      setIcon(true);
    }
  };

  return (
    <div id="header_container" className="header_container">
      <div className="flex_row header_container_logo">
        {/* <img className="header_logo" src={Logo} alt="" /> */}
        <h2 className="heaader_logoText_one">RC</h2>
        <h2 id="heaader_logoText_two" className="heaader_logoText_two">
          group
        </h2>
      </div>
      <div className="flex_row">
        <input
          className="sourc_input"
          placeholder="enter product"
          type="text"
        />
        {icon ? (
          <MdNightlight onClick={uptadeIcon} className="header_icons" />
        ) : (
          <MdOutlineNightlight onClick={uptadeIcon} className="header_icons" />
        )}
        <FaShoppingBasket className="header_icons" />
      </div>
    </div>
  );
}

export default Header;
