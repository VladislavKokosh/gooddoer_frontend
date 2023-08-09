import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../../api";

const getUserData = createAsyncThunk(
	"auth/getUserData",
	async (token: string, thunkAPI) => {
		try {
			const { data } = await auth.getUserData(token);

			return data.user;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export { getUserData };
