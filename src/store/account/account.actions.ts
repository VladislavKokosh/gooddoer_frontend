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

const updateUserData = createAsyncThunk(
	"auth/updateUserData",
	async (userData: { token: string; username: string }, thunkAPI) => {
		try {
			const { data } = await auth.updateUsername(
				userData.token,
				userData.username
			);

			return data.username;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export { getUserData, updateUserData };
