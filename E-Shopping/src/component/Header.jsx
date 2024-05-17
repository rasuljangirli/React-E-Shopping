import React, { useState } from "react";
import { MdNightlight } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import "../css/header.css";
import Logo from "../images/logo.png";

function Header() {
  const [icon, setIcon] = useState(false);

  const uptadeIcon = () => {
    if (icon) {
      document.getElementById("root").style.backgroundColor = "black";
      document.getElementById("root").style.color = "white";
      setIcon(false);
    } else {
      document.getElementById("root").style.backgroundColor = "white";
      document.getElementById("root").style.color = "black";
      setIcon(true);
    }
  };

  return (
    <div className="header_container">
      <div>
        <img className="header_logo" src={Logo} alt="" />
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
      </div>
    </div>
  );
}

export default Header;
