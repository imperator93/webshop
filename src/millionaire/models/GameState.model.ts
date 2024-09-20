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

type Lifelines = Record<
	"fiftyFifty" | "phoneFriend" | "askAudience",
	{ isUsed: boolean; isCurrentlyOnScreen: boolean }
>;
