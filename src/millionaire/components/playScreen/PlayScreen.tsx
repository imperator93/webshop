import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/store";

import { FaHeart } from "react-icons/fa";
import { LifelinesScreen } from "../lifelinesScreen/LifelinesScreen";

import { resetGameState, setGameState } from "../../../redux/slices/millionaire/gameState";

import "./playScreen.css";

export const PlayScreen = () => {
	const gameState = useSelector((state: State) => state.gameState);
	const questions = useSelector((state: State) => state.questions);
	const dispatch = useDispatch();

	const handleAnswerClicked = (event: React.BaseSyntheticEvent) => {
		dispatch(setGameState({ ...gameState, answerPending: true, clickedQuestionID: event.target.id }));
	};

	const handleYesClicked = () => {
		const correctAnswer = questions[gameState.currentQuestionNumber].answers.find((answer) => answer.isCorrect);
		if (correctAnswer?._id == gameState.clickedQuestionID) {
			dispatch(setGameState({ ...gameState, intermission: true, youAreCorrect: true }));
			setTimeout(() => {
				dispatch(
					setGameState({
						...gameState,
						answerPending: false,
						youAreCorrect: false,
						intermission: false,
						currentQuestionNumber: gameState.currentQuestionNumber + 1,
					})
				);
			}, 2000);
		} else {
			dispatch(setGameState({ ...gameState, intermission: true }));
			setTimeout(() => {
				dispatch(setGameState({ ...gameState, intermission: false }));
				dispatch(resetGameState());
			}, 2000);
		}
	};

	const handleNoClicked = () => {
		dispatch(setGameState({ ...gameState, answerPending: false }));
	};
	if (questions?.length == 0) {
		return <></>;
	}
	return (
		<div className="millionaire-play-screen-wrapper">
			<div className="millionaire-play-screen">
				{gameState.intermission ? (
					gameState.youAreCorrect ? (
						<div>GOOD JOB</div>
					) : (
						<div>WRONG ANSWER</div>
					)
				) : (
					<div className="millionaire-text-div">{questions![gameState.currentQuestionNumber].content}</div>
				)}
				{gameState.lifelinesOnScreen && <LifelinesScreen />}
				<button
					disabled={gameState.answerPending}
					onClick={() => dispatch(setGameState({ ...gameState, lifelinesOnScreen: !gameState.lifelinesOnScreen }))}
					className="millionaire-open-lifelines-button"
				>
					<FaHeart />
				</button>
			</div>
			<div className="millionaire-play-screen-answer-wrapper">
				{gameState.answerPending && (
					<div className="millionaire-play-screen-are-you-sure-div">
						<h2>Are you sure</h2>
						<div className="are-you-sure-yes-no-wrapper">
							<button onClick={handleYesClicked}>Yes</button>
							<button onClick={handleNoClicked}>No</button>
						</div>
					</div>
				)}
				{questions![gameState.currentQuestionNumber].answers.map((answer) => (
					<button
						disabled={gameState.answerPending || gameState.lifelinesOnScreen}
						onClick={(event) => handleAnswerClicked(event)}
						style={
							answer._id == gameState.clickedQuestionID && gameState.answerPending ? { backgroundColor: "orange" } : {}
						}
						className="millionaire-play-screen-answer-button"
						id={answer._id}
						key={answer._id}
					>
						{answer.content}
					</button>
				))}
			</div>
		</div>
	);
};
