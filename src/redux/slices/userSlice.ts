import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User";

export const userSlice = createSlice({
	name: "user",
	initialState: { user: undefined } as Record<string, User | undefined>,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
