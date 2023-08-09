import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { getAuthState } from "../../store";
import { SignIn } from "../sign-in";

import { IProtectedRouterProps } from "./protected-router.types";

const ProtectedRouter: FC<IProtectedRouterProps> = ({ children }) => {
	const { authorization } = useSelector(getAuthState);

	useEffect(() => {}, [authorization]);

	if (!localStorage.getItem("accessToken")) {
		return <SignIn />;
	}

	return <div className="protected-router">{children}</div>;
};

export { ProtectedRouter };
