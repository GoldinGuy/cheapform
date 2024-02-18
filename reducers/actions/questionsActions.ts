export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_DROPDOWN = "SET_DROPDOWN";
export const SET_SELECT = "SET_SELECT";
export const SET_MULTISELECT = "SET_MULTISELECT";
export const REMOVE_SELECT = "REMOVE_SELECT";
export const SET_EMAIL = "SET_EMAIL";

export type QuestionsActionsType =
	| { type: "SET_FIRST_NAME"; payload: string }
	| {
			type: "SET_LAST_NAME";
			payload: string;
	  }
	| {
			type: "SET_DROPDOWN";
			payload: string;
	  }
	| { type: "SET_SELECT"; payload: string }
	| { type: "SET_MULTISELECT"; payload: string }
	| { type: "REMOVE_SELECT"; payload: string }
	| { type: "SET_EMAIL"; payload: string };
