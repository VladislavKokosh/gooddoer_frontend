import { FC } from "react";
import { PropsWithChildren } from "react";

import { Footer, Header } from "../../components";

import "./layout.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="layout">
			<Header />
			<div className="layout-container">{children}</div>
			<Footer />
		</div>
	);
};

export { Layout };
