import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Layout } from "../modules";
import { Main } from "../modules";
import { AppDispatch } from "../store";
import { getProviderAction } from "../store/provider/provider.actions";

import "./app.scss";

const App = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getProviderAction());
	});

	return (
		<Layout>
			<Main />
		</Layout>
	);
};

export { App };
