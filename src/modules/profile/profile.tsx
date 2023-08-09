import { ProfileInfo, ProfileMain } from "../../components";

import "./profile.scss";

const Profile = () => {
	return (
		<div className="profile">
			<ProfileMain />
			<ProfileInfo />
		</div>
	);
};

export { Profile };
