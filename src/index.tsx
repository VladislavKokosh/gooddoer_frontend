import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { App } from "./app";
import { ErrorPage } from "./components";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
