import { useEffect, useState } from "react";

import { IntroScreen } from "./components/introScreen/IntroScreen";
import { PlayScreen } from "./components/playScreen/PlayScreen";
import { MILLIONAIRE_URL, TRUE_MILLIONAIRE_URL } from "./constants/MILLIONAIRE_URL";

import "./millionaire.css";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store";
import { setQuestions } from "../redux/slices/millionaire/questionsSlice";
import { Question } from "./models/Question.model";
import { setGameState } from "../redux/slices/millionaire/gameState";

export const Millionaire = () => {
	const gameState = useSelector((state: State) => state.gameState);
	const dispatch = useDispatch();

	const [background, setBackground] = useState({
		background: "URL(``)",
	});

	const [secretQuestions, setSecretQuestions] = useState({
		keyWords: ["korač", "kruno", "zvonko", "zvonimir", "mulj", "dario", "ashow", "dado"],
		canProceed: false,
	});

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
		<div className="millionaire-main-div" style={secretQuestions.canProceed ? {} : {}}>
			{gameState.intro ? <IntroScreen handleSecretQuestions={handleSecretQuestions} /> : <PlayScreen />}
		</div>
	);
};
