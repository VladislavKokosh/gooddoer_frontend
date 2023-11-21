import Alesya from "../../../assets/images/alesya.jpg";
import { IconComment } from "../../../components";

import "./comment.scss";

const Comment = () => {
	return (
		<div className="comment">
			<IconComment
				icon={Alesya}
				width={60}
				height={60}
				borderThickness={2}
				borderColor={"#343434"}
			/>
			<div className="comment-container">
				<h5 className="comment-container_title">
					“I'm proud to support GoodDoer's mission and feel that my donations
					are making a real difference in the world.”
				</h5>
				<span className="comment-container_name">Alesya Derets</span>
			</div>
		</div>
	);
};

export { Comment };
