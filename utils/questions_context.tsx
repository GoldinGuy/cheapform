"use client";
import {
	createContext,
	ReactNode,
	useContext,
	useMemo,
	useReducer,
} from "react";
import { QuestionsContextType } from "../types/typings";
import { questionsInitialState, questionsReducerFunc } from "../reducers";
import config from "./config";

const QuestionsContext = createContext<QuestionsContextType>({
	state: questionsInitialState,
	dispatch: () => {},
	percentComplete: 0,
});

type QuestionsProviderType = {
	readonly children: ReactNode;
};

export function QuestionsProvider({ children }: QuestionsProviderType) {
	const [state, dispatch] = useReducer(
		questionsReducerFunc,
		questionsInitialState
	);

	const percentComplete = useMemo(
		function () {
			let answered = 0;
			const { firstName, lastName, dropdown, select, multiselect, email } =
				state;

			if (firstName) answered += 1;
			if (lastName) answered += 1;
			if (email) answered += 1;
			// if (dropdown) answered += 1;
			if (select) answered += 1;
			if (multiselect.length !== 0) answered += 1;

			return (answered * 100) / config.total_questions;
		},
		[state]
	);

	const value = { state, dispatch, percentComplete };

	return (
		<QuestionsContext.Provider value={value}>
			{children}
		</QuestionsContext.Provider>
	);
}

export function useQuestions(): QuestionsContextType {
	const context = useContext(QuestionsContext);

	if (context) {
		return context;
	}

	throw new Error("useQuestions must be use inside QuestionsProvider");
}
