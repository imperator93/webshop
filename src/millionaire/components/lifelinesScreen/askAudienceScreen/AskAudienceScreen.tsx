import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../../redux/store";

import "./askAudienceScreen.css";
import { setAskAudience } from "../../../../redux/slices/millionaire/gameState";

export const AskAudienceScreen = () => {
	const gameState = useSelector((state: State) => state.gameState);
	const questions = useSelector((state: State) => state.questions);
	const dispatch = useDispatch();

	return (
		<div className="ask-audience-screen">
			<div className="ask-audience-screen-image"></div>
			<div className="statistics-div">
				{questions[gameState.currentQuestionNumber].answers.map((answer) => (
					<div key={answer._id} className="stat">
						<div
							style={answer.isCorrect ? { top: "20%", height: "80%" } : { top: "50%", height: "50%" }}
							className="real-stat"
						></div>
					</div>
				))}
			</div>
			<button
				className="ask-audience-close-button"
				onClick={() => dispatch(setAskAudience({ isCurrentlyOnScreen: false }))}
			>
				Close
			</button>
		</div>
	);
};
