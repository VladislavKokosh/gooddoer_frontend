import { Toastr } from "../components/toastr";
import { Layout } from "../modules";
import { Main } from "../modules";

import "./app.scss";

const App = () => {
	return (
		<Layout>
			<Main />
			<Toastr autoCloseTime={3000} />
		</Layout>
	);
};

export { App };
