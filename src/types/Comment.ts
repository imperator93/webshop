import { User } from "./User";

export type Comment = {
	content: string;
	fromUser: Pick<User, "avatar" | "username">;
	date: string;
	__id?: string;
};
