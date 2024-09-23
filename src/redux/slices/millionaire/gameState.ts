import { createSlice } from "@reduxjs/toolkit";
import { GameState } from "../../../millionaire/models/GameState.model";

const initialState: GameState = {
	intro: true,
	currentQuestionNumber: 0,
	answerPending: false,
	clickedQuestionID: "",
	youAreCorrect: false,
	youAreWrong: false,
	lifelinesOnScreen: false,
	intermission: false,
	lifelines: {
		fiftyFifty: {
			isUsed: false,
			isCurrentlyOnScreen: false,
			online: "fifty-fifty-button",
			disabled: "fifty-fifty-button-used",
		},
		phoneFriend: {
			isUsed: false,
			isCurrentlyOnScreen: false,
			online: "phone-friend-button",
			disabled: "phone-friend-button-used",
		},
		askAudience: {
			isUsed: false,
			isCurrentlyOnScreen: false,
			online: "ask-audience-button",
			disabled: "ask-audience-button-used",
		},
	},
	finalScreen: false,
};

//its rerendering the whole component but for something this small it really doesn't matter (also don't feel like writing 20 reducers)
//maybe i'll change it later if the app starts to slow down
//will write reducers for deeply nested objects

const gameStateSlice = createSlice({
	name: "gameSlice",
	initialState: initialState as GameState,
	reducers: {
		setGameState: (_, action) => action.payload,
		resetGameState: () => initialState,
		setFiftyFifty: (state, action) => {
			state.lifelines.fiftyFifty = { ...state.lifelines.fiftyFifty, ...action.payload };
		},
		setPhoneFriend: (state, action) => {
			state.lifelines.phoneFriend = { ...state.lifelines.phoneFriend, ...action.payload };
		},
		setAskAudience: (state, action) => {
			state.lifelines.askAudience = { ...state.lifelines.askAudience, ...action.payload };
		},
	},
});

export const { setGameState, resetGameState, setFiftyFifty, setPhoneFriend, setAskAudience } = gameStateSlice.actions;
export default gameStateSlice.reducer;
