import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Layout } from "../modules";
import { Main } from "../modules";

import "./app.scss";

const App = () => {
	return (
		<Layout>
			<Main />
		</Layout>
	);
};

export { App };
