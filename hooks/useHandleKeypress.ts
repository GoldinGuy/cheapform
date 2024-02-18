import { useEffect } from "react";
import { useQuestions } from "../utils/questions_context";
import { useSharedStates } from "../utils/shared_state";
import { isNotValidEmail, isTaskSpecificEmail } from "../utils/utils";

export function useHandleKeypress() {
	const { questionNum, setErrorMsg, handleQuestionNumUpdate } =
		useSharedStates();

	const { now } = questionNum;
	const { state } = useQuestions();
	const { firstName, lastName, dropdown, select, multiselect, email } = state;

	useEffect(() => {
		function handleKeypress(event: KeyboardEvent) {
			if (event.key === "Enter") {
				event.preventDefault();

				if (now + 1 === 2 && firstName === "") {
					setErrorMsg((prevValue) => ({
						...prevValue,
						firstName: "Please fill in all required fields",
					}));
					return;
				} else if (now + 1 === 3 && lastName === "") {
					setErrorMsg((prevValue) => ({
						...prevValue,
						lastName: "Please fill in all required fields",
					}));
					return;
				} else if (now + 1 === 4 && dropdown === "") {
					setErrorMsg((prevValue) => ({
						...prevValue,
						dropdown: "Please select an option",
					}));
					return;
				} else if (now + 1 === 5 && select === "") {
					setErrorMsg((prevValue) => ({
						...prevValue,
						select: "Please select an option",
					}));
					return;
				} else if (now + 1 === 6 && multiselect.length === 0) {
					setErrorMsg((prevValue) => ({
						...prevValue,
						multiselect: "Please select an option",
					}));
					return;
				} else if (now + 1 === 6 && multiselect.length === 1) {
					setErrorMsg((prevValue) => ({
						...prevValue,
						multiselect: "Please select more choices",
					}));
					return;
				} else if (now + 1 === 7 && email === "") {
					setErrorMsg((prevValue) => ({
						...prevValue,
						email: "Please fill in all required fields",
					}));
					return;
				} else if (now + 1 === 7 && email && isNotValidEmail(email)) {
					setErrorMsg((prevValue) => ({
						...prevValue,
						email: "Please enter a valid email",
					}));
					return;
				} else if (
					now + 1 === 7 &&
					email &&
					!isNotValidEmail(email) &&
					isTaskSpecificEmail(email)
				) {
					setErrorMsg((prevValue) => ({
						...prevValue,
						email: "Please use a non-task specific email",
					}));
					return;
				}

				handleQuestionNumUpdate();
			}
		}

		document.addEventListener("keypress", handleKeypress);

		return function () {
			document.removeEventListener("keypress", handleKeypress);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [firstName, dropdown, lastName, now, select, multiselect, email]);
}
