import { Panel } from "./panel/panel";
import "./profile-info.scss";

const ProfileInfo = () => {
	return (
		<div className="profile-info">
			<Panel
				textLeft="DONATIONS"
				valueLeft={0}
				textRight="TOTAL AMOUNT DONATED"
				valueRight={0}
			/>
			<Panel
				textLeft="PROJECTS"
				valueLeft={0}
				textRight="DONATION RECEIVED"
				valueRight={0}
			/>
		</div>
	);
};

export { ProfileInfo };
