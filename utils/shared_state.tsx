"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import {
	SharedStatesContextType,
	QuestionNumType,
	ObjectType,
} from "../types/typings";
import config from "./config.json";

const SharedStatesContext = createContext<SharedStatesContextType>({
	questionNum: { prev: null, now: 0 },
	setQuestionNum: () => {},
	errorMsg: {},
	setErrorMsg: () => {},
	showIndustriesList: false,
	setShowIndustriesList: () => {},
	handleQuestionNumUpdate: () => {},
	handleOkClick: () => {},
});

type SharedStatesProviderType = {
	readonly children: ReactNode;
};

export function SharedStatesProvider({ children }: SharedStatesProviderType) {
	const [questionNum, setQuestionNum] = useState<QuestionNumType>({
		prev: null,
		now: 0,
	});

	const [errorMsg, setErrorMsg] = useState<ObjectType>({});
	const [showIndustriesList, setShowIndustriesList] = useState(false);

	function handleQuestionNumUpdate() {
		setQuestionNum((prevValue) =>
			prevValue.now + 1 >= config.total_questions + 1
				? { ...prevValue }
				: { prev: prevValue.now, now: prevValue.now + 1 }
		);
	}

	function handleOkClick() {
		document.dispatchEvent(
			new KeyboardEvent("keypress", {
				key: "Enter",
			})
		);
	}

	const value = {
		questionNum,
		setQuestionNum,
		errorMsg,
		setErrorMsg,
		showIndustriesList,
		setShowIndustriesList,
		handleQuestionNumUpdate,
		handleOkClick,
	};

	return (
		<SharedStatesContext.Provider value={value}>
			{children}
		</SharedStatesContext.Provider>
	);
}

export function useSharedStates(): SharedStatesContextType {
	const context = useContext(SharedStatesContext);

	if (context) {
		return context;
	}

	throw new Error("useSharedStates must be use inside SharedStatesProvider");
}
