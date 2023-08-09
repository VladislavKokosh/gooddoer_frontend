import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAuthInData, auth } from "../../api";

const getNonce = createAsyncThunk(
	"auth/getNonce",
	async (publicAddress: string, thunkAPI) => {
		try {
			const { data } = await auth.getNonceAuth(publicAddress);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const authIn = createAsyncThunk(
	"auth/authIn",
	async ({ signature, publicAddress }: IAuthInData, thunkAPI) => {
		try {
			const { data } = await auth.authIn({ signature, publicAddress });
			console.log(data);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export { getNonce, authIn };
