import { Navigate, Route, Routes as Switch } from "react-router-dom";

import { ProtectedRouter } from "../components";
import { Create, Help, Layout, Main, Profile, Support } from "../modules";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path="help" element={<Help />} />
				<Route
					path="profile"
					element={
						<ProtectedRouter>
							<Profile />
						</ProtectedRouter>
					}
				/>
				<Route
					path="create"
					element={
						<ProtectedRouter>
							<Create />
						</ProtectedRouter>
					}
				/>
				<Route
					path="support"
					element={
						<ProtectedRouter>
							<Support />
						</ProtectedRouter>
					}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</Switch>
	);
};

export { Routes };
