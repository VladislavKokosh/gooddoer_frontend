import { createAsyncThunk } from "@reduxjs/toolkit";

import { IFundraiser, fundraiser } from "../../api";

const getFundraisers = createAsyncThunk(
	"fundraisers/getFundraisers",
	async (_, thunkAPI) => {
		try {
			const { data } = await fundraiser.getFundraisers();
			console.log(data);

			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const writeFundraiser = createAsyncThunk(
	"fundraisers/writeFundraiser",
	async (
		{
			name,
			description,
			fundraiserAddress,
			fundraisingAmount,
			beneficiary,
			category,
		}: IFundraiser,
		thunkAPI
	) => {
		try {
			await fundraiser.writeNewFundraiser({
				name,
				description,
				fundraiserAddress,
				fundraisingAmount,
				beneficiary,
				category,
			});
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export { getFundraisers, writeFundraiser };
