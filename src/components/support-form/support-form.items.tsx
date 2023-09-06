import {
	DoneOutline,
	QuestionAnswer,
	RateReview,
	Report,
} from "@mui/icons-material";

import { ISupportFormItemTypes } from "./support-forms.types";

const items: ISupportFormItemTypes[] = [
	{
		id: 1,
		title: "Leave Feedback",
		description: "Let us know how your experience was! How can we improve?",
		svgComponent: <RateReview />,
		buttonTitle: "LEAVE FEEDBACK",
		onClick: () =>
			window.open(`https://ewuys96389e.typeform.com/to/jkQlf2Mw`, "_blank"),
	},
	{
		id: 2,
		title: "Ask us a Question",
		description:
			"Do you have a specific question or a general inquiry that requires a response?",
		svgComponent: <QuestionAnswer />,
		buttonTitle: "ASK US QUESTION",
		onClick: () =>
			window.open(`https://ewuys96389e.typeform.com/to/jkQlf2Mw`, "_blank"),
	},
	{
		id: 3,
		title: "Report an Issue",
		description:
			"Having problems with our site? Is something not functioning as expected?",
		svgComponent: <Report />,
		buttonTitle: "REPORT AN ISSUE",
		onClick: () =>
			window.open(`https://ewuys96389e.typeform.com/to/jkQlf2Mw`, "_blank"),
	},
	{
		id: 4,
		title: "Request a New Feature",
		description:
			"Want to see a new feature on Giveth? Are we missing a critical functionality?",
		svgComponent: <DoneOutline />,
		buttonTitle: "REQUEST A NEW FEATURE",
		onClick: () =>
			window.open(`https://ewuys96389e.typeform.com/to/jkQlf2Mw`, "_blank"),
	},
];

export { items };
