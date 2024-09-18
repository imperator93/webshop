export type GameState = {
	intro: boolean;
	currentQuestionNumber: number;
	answerPending: boolean;
	clickedQuestionID: string;
	youAreCorrect: boolean;
	lifelinesOnScreen: boolean;
};
