import "./comment.scss";

const Comment = () => {
	return (
		<div className="comment">
			<div className="comment-photo" />
			<div className="comment-container">
				<h5 className="comment-container_title">
					“I'm proud to support GoodDoer's mission and feel that my donations
					are making a real difference in the world.”
				</h5>
				<span className="comment-container_name">Vladislav Kokosh</span>
			</div>
		</div>
	);
};

export { Comment };
