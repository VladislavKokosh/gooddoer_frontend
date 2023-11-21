import { TStore } from "../store";

const getFundraisersState = ({ fundraisers }: TStore) => fundraisers;
const getFilterFundraisersState = ({ fundraisers }: TStore) =>
	fundraisers.filteredFundraisers;

export { getFundraisersState, getFilterFundraisersState };
