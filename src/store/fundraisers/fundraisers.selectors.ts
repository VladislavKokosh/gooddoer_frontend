import { TStore } from "../store";

const getFundraisersState = ({ fundraisers }: TStore) => fundraisers;
const getFilteredFundraisersState = ({ fundraisers }: TStore) =>
	fundraisers.filteredFundraisers;
const getFoundFundraisersState = ({ fundraisers }: TStore) =>
	fundraisers.foundFundraisers;

export {
	getFundraisersState,
	getFilteredFundraisersState,
	getFoundFundraisersState,
};
