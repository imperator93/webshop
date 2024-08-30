export const Navbar = () => {
	const categories = ["All", "Cars", "Computers", "Phones"];
	return (
		<div style={{ marginInlineStart: "20px" }}>
			<ul
				style={{
					display: "flex",
					gap: "10px",
					fontSize: "20px",
					listStyle: "none",
				}}
			>
				{categories.map((item) => (
					<li key={Math.random()}>{item}</li>
				))}
			</ul>
		</div>
	);
};
