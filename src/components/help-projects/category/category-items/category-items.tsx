import { useRef } from "react";

import { items } from "./category-items.constants";
import "./category-items.scss";
import { CategoryItem } from "./item";

const CategoryItems = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scrollToLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollTo({
				left: scrollRef.current.scrollLeft - 100,
				behavior: "smooth",
			});
		}
	};

	const scrollToRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollTo({
				left: scrollRef.current.scrollLeft + 100,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="category-items">
			<div className="category-items-button_left" onClick={scrollToLeft}>
				{"<"}
			</div>
			<div className="category-items_content" ref={scrollRef}>
				{items.map(({ id, ...props }) => (
					<CategoryItem key={id} {...props} />
				))}
			</div>
			<div className="category-items-button_right" onClick={scrollToRight}>
				{">"}
			</div>
		</div>
	);
};

export { CategoryItems };
