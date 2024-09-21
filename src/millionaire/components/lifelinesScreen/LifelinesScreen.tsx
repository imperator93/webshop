import { useDispatch, useSelector } from "react-redux";
import { setFiftyFifty, setGameState } from "../../../redux/slices/millionaire/gameState";
import { State } from "../../../redux/store";
import { lifelinesEnum } from "../../enums/lifelinesEnum";

import "./lifelinesScreen.css";
import { setQuestions } from "../../../redux/slices/millionaire/questionsSlice";

export const LifelinesScreen = () => {
	const gameState = useSelector((state: State) => state.gameState);
	const questions = useSelector((state: State) => state.questions);
	const dispatch = useDispatch();

	const handleLifelinesClicked = (event: React.BaseSyntheticEvent) => {
		switch (event.target.id) {
			//jesus christ
			case "fifty-fifty-button": {
				if (!gameState.lifelines.fiftyFifty.isUsed) {
					const answers = questions[gameState.currentQuestionNumber].answers;
					const correctIndex = answers.findIndex((item) => item.isCorrect);
					const wrongAnswers = answers.filter((item) => !item.isCorrect);
					const arr = [];
					arr[correctIndex] = answers.find((item) => item.isCorrect);

					for (let i = 0; i < 2; ) {
						const randomNumber = Math.floor(Math.random() * wrongAnswers.length);
						const newAnswer = { ...wrongAnswers[randomNumber] };
						newAnswer.content = "";
						arr[answers.indexOf(wrongAnswers[randomNumber])] = newAnswer;
						wrongAnswers.splice(randomNumber, 1);
						i++;
					}
					arr[answers.indexOf(wrongAnswers[0])] = wrongAnswers[0];
					dispatch(
						setQuestions({
							...questions,
							[gameState.currentQuestionNumber]: { ...questions[gameState.currentQuestionNumber], answers: arr },
						})
					);
					dispatch(setFiftyFifty({ isUsed: true }));
				}
				break;
			}
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
					key={value.online}
					id={value.online}
					className={value.online}
				></button>
			))}
		</div>
	);
};
