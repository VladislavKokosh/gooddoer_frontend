import { Feature, MainInfo } from "../../components";

import { featureItems } from "./main.constans";
import "./main.scss";

const Main = () => {
	return (
		<div className="main">
			<MainInfo />
			{featureItems.map(({ id, ...rest }) => (
				<Feature key={id} {...rest} />
			))}
		</div>
	);
};

export { Main };
