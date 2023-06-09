import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IMenuProps } from "./menuitem.types";
import "./menuitem.scss";

const MenuItem: React.FC<IMenuProps> = ({ title, link }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <span
      className={`menu-item ${pathname === link ? "menu-item_active" : ""}`}
      onClick={() => {
        navigate(link);
      }}
    >
      <span>{title}</span>
    </span>
  );
};

export { MenuItem };
