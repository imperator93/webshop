import { Answer } from "./Answer.model";

export type Question = {
	num: number;
	content: string;
	answers: Answer[];
	isCurrentQuestion: boolean;
	_id?: string;
	__v?: number;
};
