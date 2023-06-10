import { EPosotions } from "../../enum";

interface IFeature {
	id: number;
	image: string;
	title: string;
	description: string;
	imagePosition: EPosotions;
}

interface IFeatureProps
	extends Pick<IFeature, "image" | "title" | "description" | "imagePosition"> {}

export { IFeature, IFeatureProps };
