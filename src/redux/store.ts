import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		products: productsReducer,
	},
});

export type State = ReturnType<typeof store.getState>;
