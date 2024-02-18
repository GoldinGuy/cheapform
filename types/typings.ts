import { Dispatch, SetStateAction } from "react";
import { QuestionsActionsType, QuestionsStateType } from "../reducers";

export type QuestionProps = {
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
		| "email";
};

export type IndustriesProps = {
	readonly showIndustriesList: boolean;
	readonly setShowIndustriesList: Dispatch<SetStateAction<boolean>>;
};

export type QuestionsContextType = {
	readonly state: QuestionsStateType;
	readonly dispatch: Dispatch<QuestionsActionsType>;
	readonly percentComplete: number;
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
};

export type ObjectType = {
	[key: string]: string;
};
