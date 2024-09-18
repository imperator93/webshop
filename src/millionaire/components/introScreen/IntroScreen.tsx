import { useDispatch, useSelector } from "react-redux";
import { setGameState } from "../../../redux/slices/millionaire/gameState";
import { State } from "../../../redux/store";

import "./introScreen.css";

export const IntroScreen = () => {
	const gameState = useSelector((state: State) => state.gameState);
	const dispatch = useDispatch();

	return (
		<div className="millionaire-intro-screen">
			<button
				className="millionaire-start-button"
				onClick={() => dispatch(setGameState({ ...gameState, intro: false }))}
			>
				Start
			</button>
		</div>
	);
};
