import { createSlice } from "@reduxjs/toolkit";
import { GameState } from "../../../millionaire/models/GameState.model";

const gameStateSlice = createSlice({
	name: "gameSlice",
	initialState: {
		intro: true,
		currentQuestionNumber: 0,
		answerPending: false,
		clickedQuestionID: "",
		youAreCorrect: false,
		lifelinesOnScreen: false,
	} as GameState,
	reducers: {
		setGameState: (_, action) => action.payload,
	},
});

export const { setGameState } = gameStateSlice.actions;
export default gameStateSlice.reducer;
