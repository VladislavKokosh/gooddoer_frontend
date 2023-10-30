import { HelpHeader, HelpProjects } from "src/components";

import "./help.scss";

const Help = () => {
	return (
		<div className="help-container">
			<HelpHeader />
			<HelpProjects />
		</div>
	);
};

export { Help };
