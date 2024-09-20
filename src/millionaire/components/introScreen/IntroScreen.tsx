import { useDispatch, useSelector } from "react-redux";
import { setGameState } from "../../../redux/slices/millionaire/gameState";
import { State } from "../../../redux/store";

import "./introScreen.css";
import { SecretQuestions } from "../../models/SecretQuestions.model";

export const IntroScreen = ({
	handleSecretQuestions,
	secretQuestions,
}: {
	handleSecretQuestions: (event: React.BaseSyntheticEvent) => void;
	secretQuestions: SecretQuestions;
}) => {
	const gameState = useSelector((state: State) => state.gameState);
	const dispatch = useDispatch();

	return (
		<div className="millionaire-intro-screen">
			<button
				style={secretQuestions.canProceed ? { top: "0" } : {}}
				className="millionaire-start-button"
				onClick={() => {
					dispatch(setGameState({ ...gameState, intro: false }));
				}}
			>
				Start
			</button>
			{!secretQuestions.canProceed && (
				<div className="true-questions-wrapper">
					<p>Ako si dio tronožca ili živiš prekoputa utipkaj svoje ime otkrij prava pitanja</p>
					<input onChange={(event) => handleSecretQuestions(event)} type="text"></input>
				</div>
			)}{" "}
		</div>
	);
};
