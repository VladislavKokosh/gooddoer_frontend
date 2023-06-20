import { BrowserRouter } from "react-router-dom";

import { Routes } from "../routes";

import "./app.scss";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</>
	);
};

export { App };
