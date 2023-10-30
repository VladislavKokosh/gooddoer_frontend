import { CategoryItems } from "./category-items";
import { CategorySearch } from "./category-search";
import "./category.scss";

const Category = () => {
	return (
		<div className="category">
			<CategoryItems />
			<CategorySearch />
		</div>
	);
};

export { Category };
