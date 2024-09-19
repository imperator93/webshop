import { useDispatch, useSelector } from "react-redux";
import { setFiftyFifty, setGameState } from "../../../redux/slices/millionaire/gameState";
import { State } from "../../../redux/store";
import { lifelinesEnum } from "../../enums/lifelinesEnum";

import "./lifelinesScreen.css";

export const LifelinesScreen = () => {
	const gameState = useSelector((state: State) => state.gameState);
	const questions = useSelector((state: State) => state.questions);
	const dispatch = useDispatch();

	const handleLifelinesClicked = (event: React.BaseSyntheticEvent) => {
		switch (event.target.id) {
			case "fifty-fifty-button":
				dispatch(setFiftyFifty({ isUsed: true }));
		}
	};

	return (
		<div className="millionaire-lifelines-div">
			{Object.values(lifelinesEnum).map((value) => (
				<button
					onClick={(event) => {
						dispatch(setGameState({ ...gameState, lifelinesOnScreen: false }));
						handleLifelinesClicked(event);
					}}
					key={value}
					id={value}
					className={value}
				></button>
			))}
		</div>
	);
};
