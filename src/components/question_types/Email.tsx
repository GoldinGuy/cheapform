import classNames from "classnames";
import { ChangeEventHandler } from "react";
import { SET_EMAIL } from "../../../reducers";
import { useQuestions } from "../../../utils/questions_context";
import { useSharedStates } from "../../../utils/shared_state";
import { QuestionButton } from "../form_parts/Btn";
import {
	QuestionNumHeading,
	QuestionParagraph,
	QuestionInputText,
} from "../form_parts/QuestionParts";
import { Error } from "../Error";

export function Email() {
	const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
	const { state, dispatch } = useQuestions();

	const errorMsg = error.email ?? "";
	const { email } = state;

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		errorMsg &&
			setErrorMsg &&
			setErrorMsg((prevValue) => {
				delete prevValue.email;
				return prevValue;
			});

		dispatch({ type: SET_EMAIL, payload: event.target.value });
	};

	return (
		<>
			<QuestionNumHeading questionNum={3}>Your email?</QuestionNumHeading>

			<QuestionParagraph>We promise to spam your inbox.</QuestionParagraph>

			<QuestionInputText
				type="email"
				placeholder="kyler.wang@treehacks.com"
				value={email}
				onChange={handleInputChange}
			/>

			{errorMsg && <Error message={errorMsg} />}

			{errorMsg === "" && (
				<QuestionButton
					className={classNames("btn-container")}
					showEnter={true}
					onClick={handleOkClick}
				>
					OK
				</QuestionButton>
			)}
		</>
	);
}
