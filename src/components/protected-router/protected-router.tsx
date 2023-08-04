import { FC } from "react";
import { useSelector } from "react-redux";

import { getAuthorizationState } from "../../store";
import { SignIn } from "../sign-in";

import { IProtectedRouterProps } from "./protected-router.types";

const ProtectedRouter: FC<IProtectedRouterProps> = ({ children }) => {
	const { authorization } = useSelector(getAuthorizationState);

	if (!authorization) {
		return <SignIn />;
	}

	return <div className="protected-router">{children}</div>;
};

export { ProtectedRouter };
