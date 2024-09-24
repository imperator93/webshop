import { useEffect, useState } from "react";
import "./phoneFriend.css";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../../redux/store";
import { setPhoneFriend } from "../../../../redux/slices/millionaire/gameState";

export const PhoneFriend = () => {
	const questions = useSelector((state: State) => state.questions);
	const gameState = useSelector((state: State) => state.gameState);
	const dispatch = useDispatch();
	const [timer, setTimer] = useState(10);

	useEffect(() => {
		setTimeout(() => {
			if (timer > 0) setTimer((prev) => prev - 1);
			else dispatch(setPhoneFriend({ isCurrentlyOnScreen: false }));
		}, 1000);
	}, [timer, dispatch]);

	return (
		<div className="phone-friend-screen">
			<div className="phone-friend-screen-pic"></div>
			<div className="phone-friend-answer">
				<div>I think its:</div>
				<p>{questions[gameState.currentQuestionNumber].answers.find((item) => item.isCorrect)?.content}</p>
			</div>
			<p className="time">{timer}</p>
		</div>
	);
};
