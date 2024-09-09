import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/store";

import { ProductType } from "../../types/Product";
import { Comment } from "../../types/Comment";

import "./comments.css";
import { addComment } from "./../../redux/slices/productsSlice";

export const Comments = ({ product }: { product: ProductType }) => {
	const user = useSelector((state: State) => state.user.user);
	const dispatch = useDispatch();

	const handleCommentSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const getDate = () => {
			const time = new Date(Date.now());
			const date = `${time.getHours}:${time.getMinutes()} on ${time.getDate} ${time.getFullYear}`;
			return date;
		};
		const comments: Comment = {
			content: ((event.target as HTMLFormElement)[0] as HTMLInputElement).value,
			date: getDate(),
			fromUser: { avatar: user!.avatar, username: user!.username },
			__id: user?.__id,
		};

		dispatch(addComment({ __id: product.__id!.toString(), comment: comments }));
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
						</div>
					))}
			</div>
			{user ? (
				<form onSubmit={(event) => handleCommentSubmit(event)}>
					<label>Comment something</label>
					<input required minLength={3} maxLength={30} type="text"></input>
					<button type="submit">Post</button>
				</form>
			) : (
				<div>YOU MUST BE LOGGED IN TO COMMENT</div>
			)}
		</div>
	);
};
