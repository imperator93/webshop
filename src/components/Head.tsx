export const Head = () => {
	return (
		<div
			className="head-wrapper"
			style={{
				display: "flex",
				alignItems: "center",
				gap: "10px",
				width: "100vw",
				height: "5vh",
			}}
		>
			<h1 style={{ display: "inline" }}>Webshop</h1>
			<div>
				<input style={{ height: "fit-content" }} />
				<button>Search</button>
			</div>
			<div style={{ justifySelf: "flex-end" }}>
				<button>Sign In</button>
				<button>Register</button>
			</div>
		</div>
	);
};
