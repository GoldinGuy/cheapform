import { Dispatch, SetStateAction } from "react";
import { QuestionsActionsType, QuestionsStateType } from "../reducers";

export type QuestionProps = {
	num: number;
	readonly inView: boolean;
	readonly inViewSlide: "up" | "down" | "";
	readonly outView: boolean;
	readonly outViewSlide: "up" | "down" | "";
	readonly isRendered?: boolean;
	readonly type:
		| "intro"
		| "firstName"
		| "lastName"
		| "dropdown"
		| "select"
		| "multiselect"
		| "phone"
		| "email";
	required?: boolean;
	questionData: QuestionType;
};

export type IndustriesProps = {
	readonly showIndustriesList: boolean;
	readonly setShowIndustriesList: Dispatch<SetStateAction<boolean>>;
};

export type QuestionsContextType = {
	readonly state: QuestionsStateType;
	readonly dispatch: Dispatch<QuestionsActionsType>;
	readonly percentComplete: number;
	// readonly activeQ: QuestionType;
};

export type QuestionNumType = { prev: null | number; now: number };

export type SharedStatesContextType = {
	readonly questionNum: QuestionNumType;
	readonly setQuestionNum: Dispatch<SetStateAction<QuestionNumType>>;
	readonly errorMsg: ObjectType;
	readonly setErrorMsg: Dispatch<SetStateAction<ObjectType>>;
	readonly showIndustriesList: boolean;
	readonly setShowIndustriesList: Dispatch<SetStateAction<boolean>>;
	readonly handleQuestionNumUpdate: () => void;
	readonly handleOkClick: () => void;
	readonly activeQ: QuestionType;
};

export type ObjectType = {
	[key: string]: string;
};

export type QuestionType = {
	readonly question: string;
	readonly description?: string;
	readonly type:
		| "intro"
		| "firstName"
		| "lastName"
		| "dropdown"
		| "select"
		| "multiselect"
		| "phone"
		| "email";
	readonly answers?: ObjectType;
	required?: boolean;
};

export type formConfig = {
	total_questions: number;
	questions: QuestionType[];
};
