import { useEffect } from "react";

import { IntroScreen } from "./components/introScreen/IntroScreen";
import { PlayScreen } from "./components/playScreen/PlayScreen";
import { MILLIONAIRE_URL } from "./constants/MILLIONAIRE_URL";

import "./millionaire.css";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store";
import { setQuestions } from "../redux/slices/millionaire/questionsSlice";
import { Question } from "./models/Question.model";

export const Millionaire = () => {
	const gameState = useSelector((state: State) => state.gameState);
	const dispatch = useDispatch();

	useEffect(() => {
		fetch(`${MILLIONAIRE_URL}`)
			.then((response) => response.json())
			.then((data) => {
				const sortedData: Question[] = data.questions.sort((a: Question, b: Question) => a.num - b.num);
				dispatch(setQuestions(data.questions));
				console.log(sortedData);
			});
	}, [dispatch]);
	return <div className="millionaire-main-div">{gameState.intro ? <IntroScreen /> : <PlayScreen />}</div>;
};
