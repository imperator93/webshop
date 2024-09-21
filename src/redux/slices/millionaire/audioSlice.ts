import { createSlice } from "@reduxjs/toolkit";
import { MillionaireSounds } from "../../../millionaire/models/MillionaireSounds";

const initialState: MillionaireSounds = {
	answerPendingSound: false,
	wrongAnswerSound: false,
	correctAnswerSound: false,
	questionStart: false,
	secretSound: true,
	winner: false,
};

const audioSlice = createSlice({
	name: "audio",
	initialState: initialState as MillionaireSounds,
	reducers: {
		setAudio: (_, action) => action.payload,
		resetAudio: () => {
			return { ...initialState };
		},
	},
});

export const { setAudio, resetAudio } = audioSlice.actions;
export default audioSlice.reducer;
