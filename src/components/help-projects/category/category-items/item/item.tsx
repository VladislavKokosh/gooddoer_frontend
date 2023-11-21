import { FC, useState } from "react";

import { useActions } from "../../../../../hooks/use-actions";
import { ICategoryItemProps } from "../category-items.constants";

import "./item.scss";

const CategoryItem: FC<ICategoryItemProps> = ({ title, link }) => {
	const { addFilterParam, removeFilterParam, filterFundraisers } = useActions();
	const [select, setSelect] = useState(false);

	const handleClick = () => {
		select ? removeFilterParam(link) : addFilterParam(link);

		setSelect(!select);
		filterFundraisers();
	};

	return (
		<div
			className="category-item"
			onClick={handleClick}
			style={{
				border: select ? "2px dashed #6ca6c1" : "2px dashed transparent",
			}}
		>
			{title}
		</div>
	);
};

export { CategoryItem };
