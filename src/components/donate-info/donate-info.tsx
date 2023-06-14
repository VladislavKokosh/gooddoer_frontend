import { Button } from "../button";
import { IconComment } from "../icon-comment";

import { donateInfoIcons } from "./donate-info.constans";
import "./donate-info.scss";

const DonateInfo = () => {
	return (
		<div className="donate-container">
			<div className="donate-container_content">
				<h1>Donate today and make a difference.</h1>
				<div>
					{donateInfoIcons.map((icon) => (
						<IconComment
							key={icon}
							icon={icon}
							width={60}
							height={60}
							borderThickness={2}
							borderColor={"#343434"}
						/>
					))}
				</div>
				<Button title="Donate" />
			</div>
		</div>
	);
};

export { DonateInfo };
