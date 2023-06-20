import { Navigate, Route, Routes as Switch } from "react-router-dom";

import { Help, Layout, Main } from "../modules";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path="help" element={<Help />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Switch>
	);
};

export { Routes };