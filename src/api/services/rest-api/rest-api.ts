import axios from "axios";

const restApi = axios.create({
	baseURL: process.env.REACT_APP_REST_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export { restApi };
