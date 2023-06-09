import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import "./header.scss";
import { Menu } from "./menu";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo style={{ width: "150px", height: "150px" }} />
      <Menu />
    </div>
  );
};

export { Header };
