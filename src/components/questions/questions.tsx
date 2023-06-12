import { Item } from "./item";
import { questions } from "./questions.constants";
import "./questions.scss";

const Questions = () => {
	return (
		<div className="questions">
			<h1 className="questions_title">Questions?</h1>
			{questions.map(({ id, ...props }) => (
				<Item key={id} {...props} />
			))}
		</div>
	);
};

export { Questions };
