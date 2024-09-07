import { ProductType } from "../../types/Product";
import "./comments.css";

export const Comments = ({ product }: { product: ProductType }) => {
	//placeholder
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
		</div>
	);
};
