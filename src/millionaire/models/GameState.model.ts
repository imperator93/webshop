export type GameState = {
	intro: boolean;
	currentQuestionNumber: number;
	answerPending: boolean;
	clickedQuestionID: string;
	youAreCorrect: boolean;
	lifelinesOnScreen: boolean;
	intermission: boolean;
	lifelines: Lifelines;
};

type Lifelines = Record<
	"fiftyFifty" | "phoneFriend" | "askAudience",
	{ isUsed: boolean; isCurrentlyOnScreen: boolean }
>;
