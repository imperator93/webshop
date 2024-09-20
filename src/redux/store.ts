import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";
import questionsReducer from "./slices/millionaire/questionsSlice";
import gameStateReducer from "./slices/millionaire/gameState";
import audioSliceReducer from "./slices/millionaire/audioSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		products: productsReducer,
		questions: questionsReducer,
		gameState: gameStateReducer,
		audio: audioSliceReducer,
	},
});

export type State = ReturnType<typeof store.getState>;
