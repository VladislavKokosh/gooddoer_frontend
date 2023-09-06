import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./app";
import { EthersProvider } from "./providers/EthersProvider";
import { store } from "./store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<Provider store={store}>
		<EthersProvider>
			<App />
		</EthersProvider>
	</Provider>
);
