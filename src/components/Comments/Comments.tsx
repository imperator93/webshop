import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/store";

import { ProductType } from "../../types/Product";
import { Comment } from "../../types/Comment";
import { getDate } from "../../helpers/getDate";
import { addComment, removeComment } from "./../../redux/slices/productsSlice";
import "./comments.css";
import { WEBSHOP_URL } from "../../constants/WEBSHOP_URL";

export const Comments = ({ product }: { product: ProductType }) => {
	const user = useSelector((state: State) => state.user.user);
	const dispatch = useDispatch();

	//missing in typescript lib FormEvent<T> {target: T} have to do it manually or I'm missing something obvious??
	const handleCommentSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		let inputValue = ((event.target as HTMLFormElement)[0] as HTMLInputElement).value;

		const comments: Comment = {
			content: inputValue,
			fromUser: { avatar: user!.avatar, username: user!.username },
			date: getDate(),
		};
		inputValue = "";

		fetch(`${WEBSHOP_URL}/${product.type}s/${product._id}`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(comments),
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch(addComment({ _id: product._id!.toString(), comment: { ...comments, _id: data.commentID } }));
			});
	};

	const handleDeleteComment = (event: React.BaseSyntheticEvent) => {
		const userNotValiUserComment = product.comments.find((comment) => comment._id === event.target.id);
		if (userNotValiUserComment?.fromUser.username !== user?.username) {
			alert("YOU CANNOT DELETE OTHER PEOPLE'S COMMENTS");
			return;
		}

		fetch(`${WEBSHOP_URL}/${product.type}s/${product._id}/${event.target.id}`, {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then(() => {
				dispatch(removeComment({ productId: product._id, commentId: event.target.id }));
			});
	};

	return (
		<div>
			<h1>Comments</h1>
			<div className="comment-container">
				{product.comments &&
					product.comments.map((item) => (
						<div key={item._id} className="comment">
							<img className="avatar" src={item.fromUser.avatar} />
							<div>
								<h5>{item.fromUser.username}</h5>
								<p className="comment-text">{item.content}</p>
								<p className="comment-time">{item.date}</p>
							</div>
							{/* need to fix this render */}
							{user && (
								<button
									id={item._id}
									className="delete-comment-button"
									onClick={(event) => {
										handleDeleteComment(event);
									}}
								>
									Delete Comment
								</button>
							)}
						</div>
					))}
			</div>
			{user ? (
				<form className="comment-something-form" onSubmit={(event) => handleCommentSubmit(event)}>
					<label>Comment something {user.username}: </label>
					<div className="comment-something-wrapper">
						<input spellCheck={false} required minLength={3} maxLength={30}></input>
						<button className="post-button" type="submit">
							Post
						</button>
					</div>
				</form>
			) : (
				<div>YOU MUST BE LOGGED IN TO COMMENT</div>
			)}
		</div>
	);
};
