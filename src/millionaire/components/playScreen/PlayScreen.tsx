import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/store";

import { CiVolumeMute } from "react-icons/ci";
import { CiVolumeHigh } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { LifelinesScreen } from "../lifelinesScreen/LifelinesScreen";

import { resetGameState, setGameState } from "../../../redux/slices/millionaire/gameState";

import "./playScreen.css";
import { SecretQuestions } from "../../models/SecretQuestions.model";
import { resetAudio, setAudio } from "../../../redux/slices/millionaire/audioSlice";
import { PhoneFriend } from "../lifelinesScreen/PhoneFriend/PhoneFriend";

export const PlayScreen = ({ secretQuestions }: { secretQuestions: SecretQuestions }) => {
	const gameState = useSelector((state: State) => state.gameState);
	const questions = useSelector((state: State) => state.questions);
	const audio = useSelector((state: State) => state.audio);
	const dispatch = useDispatch();

	const handleAnswerClicked = (event: React.BaseSyntheticEvent) => {
		dispatch(setGameState({ ...gameState, answerPending: true, clickedQuestionID: event.target.id }));
		dispatch(setAudio({ ...audio, answerPendingSound: true }));
	};

	const handleYesClicked = () => {
		const correctAnswer = questions[gameState.currentQuestionNumber].answers.find((answer) => answer.isCorrect);
		if (correctAnswer?._id == gameState.clickedQuestionID) {
			if (gameState.currentQuestionNumber == 14) {
				dispatch(setGameState({ ...gameState, finalScreen: true, youAreCorrect: true, answerPending: false }));
				dispatch(setAudio({ ...audio, winner: true, answerPendingSound: false }));
			} else {
				dispatch(setGameState({ ...gameState, intermission: true, youAreCorrect: true }));
				dispatch(setAudio({ ...audio, correctAnswerSound: true, answerPendingSound: false }));
				setTimeout(
					() => {
						dispatch(
							setGameState({
								...gameState,
								answerPending: false,
								youAreCorrect: false,
								intermission: false,
								currentQuestionNumber: gameState.currentQuestionNumber + 1,
							})
						);
						dispatch(setAudio({ ...audio, correctAnswerSound: false, answerPendingSound: false }));
					},
					secretQuestions.canProceed ? 2000 : 6000
				);
			}
		} else {
			dispatch(setGameState({ ...gameState, intermission: true, youAreWrong: true }));
			if (!secretQuestions.canProceed) dispatch(setAudio({ ...gameState, wrongAnswerSound: true }));
			setTimeout(() => {
				dispatch(resetGameState());
				if (!secretQuestions.canProceed) dispatch(resetAudio());
			}, 5000);
		}
	};

	const handleNoClicked = () => {
		dispatch(setGameState({ ...gameState, answerPending: false }));
		dispatch(setAudio({ ...audio, answerPendingSound: false }));
	};
	if (questions.length == 0) return <div className="server-offline">SERVER OFFLINE PLEASE WAIT</div>;
	return (
		<div className="millionaire-play-screen-wrapper">
			<div className="millionaire-play-screen">
				{gameState.intermission ? (
					gameState.youAreCorrect ? (
						!secretQuestions.canProceed ? (
							<div className="compliments-div">GOOD JOB</div>
						) : (
							<div
								style={{
									background: "url(https://imgur.com/VaiJjQk.jpeg)",
									backgroundRepeat: "no-repeat",
									backgroundSize: "100% 100%",
								}}
								className="compliments-div"
							>
								BRAVO MAJMUNE
							</div>
						)
					) : !secretQuestions.canProceed ? (
						<div className="compliments-div">WRONG ANSWER</div>
					) : (
						<div
							style={{
								background: "url(https://imgur.com/sYH4FpJ.jpeg)",
								backgroundRepeat: "no-repeat",
								backgroundSize: "100% 100%",
							}}
							className="compliments-div"
						>
							GLUPANE!!!
						</div>
					)
				) : !gameState.finalScreen ? (
					<>
						{gameState.lifelines.phoneFriend.isCurrentlyOnScreen && <PhoneFriend />}
						<div className="millionaire-text-div">{questions![gameState.currentQuestionNumber].content}</div>
					</>
				) : (
					<div className="compliments-div">
						<h3>YOU HAVE BEATEN THE QUIZ!!!</h3>
						<button
							onClick={() => {
								dispatch(resetAudio());
								dispatch(resetGameState());
							}}
						>
							QUIT
						</button>
					</div>
				)}
				{gameState.lifelinesOnScreen && <LifelinesScreen />}
				{!secretQuestions.canProceed ? (
					<button
						disabled={
							gameState.answerPending || gameState.finalScreen || gameState.lifelines.phoneFriend.isCurrentlyOnScreen
						}
						onClick={() => dispatch(setGameState({ ...gameState, lifelinesOnScreen: !gameState.lifelinesOnScreen }))}
						className="millionaire-open-lifelines-button"
					>
						<FaHeart />
					</button>
				) : (
					<>
						<p className="millionaire-open-lifelines-button">NO LIFELINES FOR ČETNIKS</p>
						<button
							onClick={() => dispatch(setAudio({ ...audio, secretSound: !audio.secretSound }))}
							className="music-button"
						>
							{audio.secretSound ? <CiVolumeHigh /> : <CiVolumeMute />}
						</button>
					</>
				)}
			</div>
			<div className="millionaire-play-screen-answer-wrapper">
				{gameState.answerPending && (
					<div className="millionaire-play-screen-are-you-sure-div">
						<h2>Are you sure</h2>
						<div className="are-you-sure-yes-no-wrapper">
							<button disabled={gameState.intermission} onClick={handleYesClicked}>
								Yes
							</button>
							<button disabled={gameState.intermission} onClick={handleNoClicked}>
								No
							</button>
						</div>
					</div>
				)}
				{questions![gameState.currentQuestionNumber].answers.map((answer) => (
					<button
						disabled={
							gameState.answerPending ||
							gameState.lifelinesOnScreen ||
							gameState.intermission ||
							gameState.finalScreen ||
							gameState.lifelines.phoneFriend.isCurrentlyOnScreen
						}
						onClick={(event) => handleAnswerClicked(event)}
						//I wonder if this could be done without a second bool value
						style={
							(() => {
								if (answer._id == gameState.clickedQuestionID) {
									if (gameState.finalScreen && gameState.youAreCorrect) return { backgroundColor: "green" };
									if (gameState.answerPending) {
										if (gameState.youAreCorrect) return { backgroundColor: "green" };
										if (gameState.youAreWrong) return { backgroundColor: "red" };
										return { backgroundColor: "orange" };
									}
								} else return {};
							})()
							// //don't know which one I like better
							// answer._id == gameState.clickedQuestionID && gameState.answerPending && gameState.youAreCorrect
							// 	? { backgroundColor: "green" }
							// 	: answer._id == gameState.clickedQuestionID && gameState.answerPending && gameState.youAreWrong
							// 	? { backgroundColor: "red" }
							// 	: answer._id == gameState.clickedQuestionID && gameState.answerPending
							// 	? { backgroundColor: "orange" }
							// 	: {}
						}
						className={
							!gameState.finalScreen
								? "millionaire-play-screen-answer-button"
								: secretQuestions.canProceed
								? "final-animation"
								: "millionaire-play-screen-answer-button"
						}
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
