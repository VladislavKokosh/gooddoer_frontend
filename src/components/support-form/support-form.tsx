import { Item } from "./Item";
import { items } from "./support-form.items";
import "./support-form.scss";

const SupportForm = () => {
	return (
		<div className="support">
			<div className="support-title">
				<span>How can we help you?</span>
			</div>
			<div className="support-items">
				{items.map((item) => (
					<Item key={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export { SupportForm };
