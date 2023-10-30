import { FC } from "react";

import { ICategoryItemProps } from "../category-items.constants";

import "./item.scss";

const CategoryItem: FC<ICategoryItemProps> = ({ title, link }) => {
	return <div className="category-item">{title}</div>;
};

export { CategoryItem };
