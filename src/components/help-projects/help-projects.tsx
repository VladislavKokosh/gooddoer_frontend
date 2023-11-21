import { useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import {
	getFilterFundraisersState,
	getFundraisersState,
} from "src/store/fundraisers";

import { useActions } from "../../hooks/use-actions";

import { Category } from "./category";
import { Counter } from "./counter";
import "./help-projects.scss";
import { Projects } from "./projects";

const HelpProjects = () => {
	const { getFundraisers } = useActions();
	const { isLoading } = useSelector(getFundraisersState);
	const fundraisers = useSelector(getFilterFundraisersState);

	useEffect(() => {
		getFundraisers();
		// eslint-disable-next-line
	}, []);

	const hasLoading = isLoading && (
		<div className="loader">
			<MutatingDots
				height="100"
				width="100"
				color="#4e4f8b"
				secondaryColor="#6ca6c1"
				radius="15"
				ariaLabel="mutating-dots-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	);

	const hasContent = !isLoading && fundraisers && (
		<div className="help-projects-content">
			<Category />
			<Counter count={fundraisers.length} />
			<Projects projects={fundraisers} />
		</div>
	);

	return (
		<div className="help-projects">
			{hasLoading}
			{hasContent}
		</div>
	);
};

export { HelpProjects };
