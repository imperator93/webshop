export type GameState = {
	intro: boolean;
	currentQuestionNumber: number;
	answerPending: boolean;
	clickedQuestionID: string;
	youAreCorrect: boolean;
	youAreWrong: boolean;
	lifelinesOnScreen: boolean;
	intermission: boolean;
	lifelines: Lifelines;
	finalScreen: boolean;
};

export type Lifelines = Record<string, { isUsed: boolean; isCurrentlyOnScreen: boolean }>;
