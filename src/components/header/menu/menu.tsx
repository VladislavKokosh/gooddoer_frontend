import React from "react";
import { items } from "./items";
import { MenuItem } from "./menu-item";
import "./menu.scss";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      {items.map((item) => (
        <MenuItem title={item.title} link={item.link} />
      ))}
    </div>
  );
};

export { Menu };
