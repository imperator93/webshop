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
		addComment: (state, action: PayloadAction<{ _id: string; comment: Comment }>) => {
			const product = state.products.find((item) => item._id == action.payload._id);
			if (product) product.comments.push(action.payload.comment);
		},
		removeComment: (state, action: PayloadAction<{ productId?: string; commentId: string }>) => {
			const product = state.products.find((item) => item._id == action.payload.productId);
			if (product) {
				const commentToDelete = product.comments.find((item) => item._id == action.payload.commentId);
				if (commentToDelete) {
					product.comments.splice(product.comments.indexOf(commentToDelete), 1);
				}
			}
		},
	},
});

export const { setProducts, addComment, removeComment } = productsSlice.actions;
export default productsSlice.reducer;
