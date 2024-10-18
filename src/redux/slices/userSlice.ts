import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../types/User";
import { ProductType } from "../../types/Product";

type CartItem = {
	product: ProductType;
	count: number;
};

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	} as Record<"user", User | null>,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		addProductToCart: (state, action: PayloadAction<CartItem>) => {
			state.user?.cart.push(action.payload);
		},
		incrementExistingItemCount: (state, action: PayloadAction<{ itemId: string | undefined; count: number }>) => {
			const item = state.user?.cart.find((item) => item.product._id == action.payload.itemId);
			item!.count += action.payload.count;
		},
		removeOneProductOfType: (state, action: PayloadAction<{ id: string }>) => {
			const itemsToDelete = state.user?.cart.find((item) => item.product._id == action.payload.id);
			itemsToDelete!.count -= 1;
			if (itemsToDelete!.count == 0) state.user?.cart.splice(state.user.cart.indexOf(itemsToDelete as CartItem), 1);
		},

		deleteAllProductsOfType: (state, action: PayloadAction<{ id: string }>) => {
			const itemsToDelete = state.user?.cart.find((item) => item.product._id == action.payload.id);
			state.user?.cart.splice(state.user.cart.indexOf(itemsToDelete as CartItem), 1);
		},
	},
});

export const {
	setUser,
	addProductToCart,
	incrementExistingItemCount,
	deleteAllProductsOfType,
	removeOneProductOfType,
} = userSlice.actions;
export default userSlice.reducer;
