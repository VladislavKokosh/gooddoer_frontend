import { Close, Search } from "@mui/icons-material";
import { useState } from "react";

import "./category-search.scss";

const CategorySearch = () => {
	const [visible, setVisible] = useState<boolean>(false);

	return (
		<div className="category-search">
			{visible && <input placeholder="Search for a project" />}
			<div
				className="category-search-button"
				onClick={() => setVisible((prev) => !prev)}
			>
				{visible ? <Close /> : <Search />}
			</div>
		</div>
	);
};

export { CategorySearch };
