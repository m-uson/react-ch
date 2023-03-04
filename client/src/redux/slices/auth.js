import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const registerUser = createAsyncThunk(
	"auth/registerUser",
	async ({ username, password }) => {
		try {
			const { data } = await axios.post("/auth/register", {
				username,
				password,
			});

			if (data.token) {
				window.localStorage.setItem("token", data.token);
			}

			return data;
		} catch (err) {
			console.log(err);
		}
	}
);

const initialState = {
	user: null,
	token: null,
	isLoading: false,
	status: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: {
		[registerUser.pending]: (state) => {
			(state.isLoading = true), (state.status = null), (state.user = null);
		},
		[registerUser.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.status = action.payload.message;
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		[registerUser.rejected]: (state, action) => {
			state.status = action.payload;
			state.status = false;
			state.user = null;
		},
	},
});

export const authReducer = authSlice.reducer;
