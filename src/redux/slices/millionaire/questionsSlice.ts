import { createSlice } from "@reduxjs/toolkit";
import { Question } from "../../../millionaire/models/Question.model";

const questionsSlice = createSlice({
	name: "questions",
	initialState: [] as Question[],
	reducers: {
		setQuestions: (_, action) => action.payload,
	},
});

export const { setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
