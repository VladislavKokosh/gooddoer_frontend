import Delivery from "../../assets/images/delivery.jpeg";
import Heart from "../../assets/images/heart.jpeg";
import Money from "../../assets/images/money.jpeg";
import { IFeature } from "../../components/feature/feature.types";
import { EPosotions } from "../../enum";

const featureItems: IFeature[] = [
	{
		id: 1,
		image: Money,
		title: "Secure and transparent donations.",
		description:
			"Rest assured that your donations are secure and transparently recorded on the blockchain, increasing trust and accountability.",
		imagePosition: EPosotions.Left,
	},
	{
		id: 2,
		image: Heart,
		title: "Reach more children in need.",
		description:
			"Gooddoer's platform allows a wider reach to children in need, regardless of location. You can make a global impact.",
		imagePosition: EPosotions.Right,
	},
	{
		id: 3,
		image: Delivery,
		title: "Ease of use for both donors and charities.",
		description:
			"ChildChain's user-friendly platform makes donating simple and easy for donors while helping charities to manage donated funds with ease.",
		imagePosition: EPosotions.Left,
	},
];

export { featureItems };
