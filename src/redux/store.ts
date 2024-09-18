import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";
import questionsReducer from "./slices/millionaire/questionsSlice";
import gameStateReducer from "./slices/millionaire/gameState";

export const store = configureStore({
	reducer: {
		user: userReducer,
		products: productsReducer,
		questions: questionsReducer,
		gameState: gameStateReducer,
	},
});

export type State = ReturnType<typeof store.getState>;
