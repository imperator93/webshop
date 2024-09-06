import "./comments.css";

export const Comments = () => {
	//placeholder
	const comments = ["first", "second", "third", "first", "second", "third"];
	return (
		<div className="comments-wrapper">
			<h1>Comments</h1>
			<div className="comment-container">
				{comments.map((item) => (
					<div key={item} className="comment">
						<img className="avatar" />
						<div>
							<h4>username</h4>
							<p className="comment-text">{item}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
