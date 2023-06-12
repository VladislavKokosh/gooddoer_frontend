import Man from "../../assets/images/man-two.png";
import { IconComment } from "../icon-comment";

import "./testimonials.scss";

const Testimonials = () => {
	return (
		<div className="testimonials">
			<h3 className="testimonials-title">
				"As a charity, we appreciate GoodDoer's transparency and the ease that
				the platform provides for managing donations."
			</h3>
			<div className="testimonials-comment">
				<IconComment
					icon={Man}
					height={60}
					width={60}
					borderThickness={2}
					borderColor={"#343434"}
				/>
				<div className="testimonials-comment_name">Alan Donaldson</div>
			</div>
		</div>
	);
};

export { Testimonials };
