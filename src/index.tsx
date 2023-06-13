import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";

import { App } from "./app";
import { ErrorPage } from "./components";
import reducer from "./store/reducers/reducer";
import rootSaga from "./store/saga";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
]);

const saga = createSagaMiddleware();
const store = configureStore({
	reducer,
	middleware: [saga],
});

saga.run(rootSaga);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
