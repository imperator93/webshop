import { useDispatch, useSelector } from "react-redux";
import "./lifelinesScreen.css";
import { setGameState } from "../../../redux/slices/millionaire/gameState";
import { State } from "../../../redux/store";

export const LifelinesScreen = () => {
	const gameState = useSelector((state: State) => state.gameState);
	const dispatch = useDispatch();

	const lifelinesEnum = {
		fiftyFifty: "fifty-fifty-button",
		phoneFriend: "phone-friend-button",
		askAudience: "ask-audience-button",
	};

	return (
		<div className="millionaire-lifelines-div">
			{Object.values(lifelinesEnum).map((value) => (
				<button
					key={value}
					onClick={() => dispatch(setGameState({ ...gameState, lifelinesOnScreen: false }))}
					className={value}
				></button>
			))}
		</div>
	);
};
