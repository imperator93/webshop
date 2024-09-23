import { useDispatch, useSelector } from "react-redux";
import { setFiftyFifty, setGameState, setPhoneFriend } from "../../../redux/slices/millionaire/gameState";
import { State } from "../../../redux/store";

import "./lifelinesScreen.css";
import { setQuestions } from "../../../redux/slices/millionaire/questionsSlice";
import { Lifelines } from "../../models/GameState.model";

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
			case "phone-friend-button": {
				dispatch(setPhoneFriend({ isUsed: true, isCurrentlyOnScreen: true }));
			}
		}
	};
	return (
		<div className="millionaire-lifelines-div">
			{/* SUCH AN UGLY FIX FOR SIMPLE TUPLES */}
			{(Object.entries(gameState.lifelines) as [keyof Lifelines, Lifelines[keyof Lifelines]][]).map(([key, value]) => (
				<button
					disabled={gameState.lifelines[key].isUsed}
					onClick={(event) => {
						dispatch(setGameState({ ...gameState, lifelinesOnScreen: false }));
						handleLifelinesClicked(event);
					}}
					key={value.online}
					id={value.online}
					className={value.isUsed ? value.disabled : value.online}
				></button>
			))}
		</div>
	);
};
