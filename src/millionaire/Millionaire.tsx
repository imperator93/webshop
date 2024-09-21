import { useEffect, useRef, useState } from "react";
import { setGameState } from "../redux/slices/millionaire/gameState";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store";
import { setQuestions } from "../redux/slices/millionaire/questionsSlice";

import { IntroScreen } from "./components/introScreen/IntroScreen";
import { PlayScreen } from "./components/playScreen/PlayScreen";

import { MILLIONAIRE_URL, TRUE_MILLIONAIRE_URL } from "./constants/MILLIONAIRE_URL";

import "./millionaire.css";
import { Question } from "./models/Question.model";
import { SecretQuestions } from "./models/SecretQuestions.model";
//sounds
import serbiaStrong from "./music/(Reupload) Serbia Strong Remove Kebab meme - 5 Minute Perfect Loop.mp3";
import questionStart from "./music/question-start.mp3";
import answerPending from "./music/answer-pending.mp3";
import answerCorrect from "./music/answer-correct.mp3";
import answerWrong from "./music/answer-wrong.mp3";
import winner from "./music/winner.mp3";

export const Millionaire = () => {
	const audio = useSelector((state: State) => state.audio);
	const gameState = useSelector((state: State) => state.gameState);
	const dispatch = useDispatch();

	const [secretQuestions, setSecretQuestions] = useState<SecretQuestions>({
		keyWords: ["korač", "kruno", "zvonko", "zvonimir", "mulj", "dario", "ashow", "dado"],
		canProceed: false,
	});

	const secretRef = useRef<HTMLAudioElement>(null);
	const questionStartRef = useRef<HTMLAudioElement>(null);
	const answerCorrectRef = useRef<HTMLAudioElement>(null);
	const answerPendingRef = useRef<HTMLAudioElement>(null);
	const answerWrongRef = useRef<HTMLAudioElement>(null);
	const winnerRef = useRef<HTMLAudioElement>(null);

	//NEED TO FIGURE OUT A CLEVER WAY OF DOING THIS
	useEffect(() => {
		if (
			secretRef.current &&
			questionStartRef.current &&
			answerCorrectRef.current &&
			answerPendingRef.current &&
			answerWrongRef.current &&
			winnerRef.current
		) {
			if (!secretQuestions.canProceed) {
				if (audio.answerPendingSound) {
					answerPendingRef.current.currentTime = 0;
					answerPendingRef.current.play();
				} else {
					answerPendingRef.current.pause();
				}
				if (audio.correctAnswerSound) {
					answerCorrectRef.current.currentTime = 0;
					answerCorrectRef.current.play();
					setTimeout(() => {
						answerCorrectRef.current?.pause();
					}, 6000);
				}
				if (audio.wrongAnswerSound) {
					answerWrongRef.current.currentTime = 0;
					answerWrongRef.current.play();
				} else answerWrongRef.current.pause();
				if (audio.winner) {
					winnerRef.current.currentTime = 0;
					winnerRef.current.play();
				} else winnerRef.current.pause();
			}
			if (audio.secretSound && secretQuestions.canProceed) {
				secretRef.current.play();
				secretRef.current.loop = true;
			} else secretRef.current.pause();
		}
	}, [audio, secretQuestions]);

	const handleSecretQuestions = (event: React.BaseSyntheticEvent) => {
		secretQuestions.keyWords.forEach((item) => {
			if (item === event.target.value) {
				setSecretQuestions((prev) => ({ ...prev, canProceed: true }));
				dispatch(setGameState({ ...gameState, intro: false }));
			}
		});
	};

	useEffect(() => {
		if (!gameState.intro)
			fetch(`${!secretQuestions.canProceed ? MILLIONAIRE_URL : TRUE_MILLIONAIRE_URL}`)
				.then((response) => response.json())
				.then((data) => {
					const sortedData: Question[] = data.questions.sort((a: Question, b: Question) => a.num - b.num);
					dispatch(setQuestions(sortedData));
					console.log("fetching");
				});
	}, [dispatch, gameState.intro, secretQuestions.canProceed]);

	return (
		<div
			className="millionaire-main-div"
			style={
				secretQuestions.canProceed
					? {
							background: "URL(https://imgur.com/RbFxi6h.gif)",
							backgroundRepeat: "no-repeat",
							backgroundSize: "100% 100%",
					  }
					: {}
			}
		>
			{gameState.intro ? (
				<IntroScreen handleSecretQuestions={handleSecretQuestions} secretQuestions={secretQuestions} />
			) : (
				<PlayScreen secretQuestions={secretQuestions} />
			)}
			<audio ref={secretRef} src={serbiaStrong} preload="auto"></audio>
			<audio ref={questionStartRef} src={questionStart} preload="auto"></audio>
			<audio ref={answerCorrectRef} src={answerCorrect} preload="auto"></audio>
			<audio ref={answerPendingRef} src={answerPending} preload="auto"></audio>
			<audio ref={answerWrongRef} src={answerWrong} preload="auto"></audio>
			<audio ref={winnerRef} src={winner} preload="auto"></audio>
		</div>
	);
};
