import { Outlet } from "react-router-dom";

import { Footer, Header, Toastr } from "../../components";

import "./layout.scss";

const Layout = () => {
	return (
		<div className="layout">
			<Header />
			<div className="layout-container">
				<Outlet />
				<Toastr autoCloseTime={3000} />
			</div>
			<Footer />
		</div>
	);
};

export { Layout };
