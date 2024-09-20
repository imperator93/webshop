import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	answerPendingSound: false,
	correctAnswerSound: false,
	questionStart: false,
	secretSound: true,
	winner: false,
	wrongAnswerSound: false,
};

const audioSlice = createSlice({
	name: "audio",
	initialState: initialState,
	reducers: {
		setAudio: (_, action) => action.payload,
	},
});

export const { setAudio } = audioSlice.actions;
export default audioSlice.reducer;
