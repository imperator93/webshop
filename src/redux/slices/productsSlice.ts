import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/Product";
import { Comment } from "../../types/Comment";

const productsSlice = createSlice({
	name: "products",
	initialState: { products: [] } as Record<string, ProductType[]>,
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		addComment: (state, action: PayloadAction<{ __id: string; comment: Comment }>) => {
			const product = state.products.find((item) => item.__id === action.payload.__id);
			if (product) product.comments.push(action.payload.comment);
		},
	},
});

export const { setProducts, addComment } = productsSlice.actions;
export default productsSlice.reducer;
