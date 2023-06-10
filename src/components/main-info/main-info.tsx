import { Comment } from "./comment";
import "./main-info.scss";

const MainInfo = () => {
	return (
		<div className="main-info">
			<div className="main-info-container">
				<h1 className="main-info-container_title">
					Empower children with your generosity.
				</h1>
				<span className="main-info-container_description">
					Make a difference in the lives of children by donating on the GoodDoer
					platform, secured by blockchain technology.
				</span>
				<Comment />
			</div>
			<div className="main-info-image" />
		</div>
	);
};

export { MainInfo };
