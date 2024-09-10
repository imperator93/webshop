import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/store";

import { ProductType } from "../../types/Product";
import { Comment } from "../../types/Comment";

import "./comments.css";
import { addComment, removeComment } from "./../../redux/slices/productsSlice";

export const Comments = ({ product }: { product: ProductType }) => {
	const user = useSelector((state: State) => state.user.user);
	const dispatch = useDispatch();

	//missing in typescript lib FormEvent<T> {target: T} have to do it manually or I'm missing something obvious??
	const handleCommentSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		let inputValue = ((event.target as HTMLFormElement)[0] as HTMLInputElement).value;

		const getDate = () => {
			const time = new Date(Date.now());
			const date = `${time.getHours()}:${time.getMinutes()} on ${time.getDate()} ${time.getFullYear()}`;
			return date;
		};
		const comments: Comment = {
			content: inputValue,
			fromUser: { avatar: user!.avatar, username: user!.username },
			date: getDate(),
			_id: user!._id,
		};
		inputValue = "";

		dispatch(addComment({ _id: product._id!.toString(), comment: comments }));
	};

	const handleDeleteComment = (event: React.BaseSyntheticEvent) => {
		dispatch(removeComment({ productId: product._id, commentId: event.target.id }));
	};
	return (
		<div className="comments-wrapper">
			<h1>Comments</h1>
			<div className="comment-container">
				{product.comments &&
					product.comments.map((item) => (
						<div key={Math.random()} className="comment">
							<img className="avatar" src={item.fromUser.avatar} />
							<div>
								<h5>{item.fromUser.username}</h5>
								<p className="comment-text">{item.content}</p>
								<p className="comment-time">{item.date}</p>
							</div>
							<button id={user?._id} className="delete-comment-button" onClick={(event) => handleDeleteComment(event)}>
								Delete Comment
							</button>
						</div>
					))}
			</div>
			{user ? (
				<form onSubmit={(event) => handleCommentSubmit(event)}>
					<label>Comment something {user.username}: </label>
					<input required minLength={3} maxLength={30} type="text"></input>
					<button type="submit">Post</button>
				</form>
			) : (
				<div>YOU MUST BE LOGGED IN TO COMMENT</div>
			)}
		</div>
	);
};
