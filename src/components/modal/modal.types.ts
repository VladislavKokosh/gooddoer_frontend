import { PropsWithChildren } from "react";

import { EModalTypes } from "../../enum";

interface IModalProps extends PropsWithChildren {
	type: EModalTypes;
}

export { IModalProps };
