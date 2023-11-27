import { Close, Search } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { getFundraisersState } from "src/store/fundraisers";

import { useActions } from "../../../../hooks/use-actions";

import "./category-search.scss";

const CategorySearch = () => {
	const { changeSearchText } = useActions();
	const [visible, setVisible] = useState<boolean>(false);
	const { searchText } = useSelector(getFundraisersState);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		changeSearchText(event.target.value);
	};

	return (
		<div className="category-search">
			{visible && (
				<input
					placeholder="Search for a project"
					value={searchText}
					onChange={handleInputChange}
				/>
			)}
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
