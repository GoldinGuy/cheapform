import classNames from "classnames";
import { ChangeEventHandler } from "react";
import { SET_FIRST_NAME } from "../../../reducers";
import { useQuestions } from "../../../utils/questions_context";
import { useSharedStates } from "../../../utils/shared_state";
import { QuestionButton } from "../form_parts/Btn";
import {
	QuestionNumHeading,
	QuestionInputText,
} from "../form_parts/QuestionParts";
import { Error } from "../Error";
import { QuestionType } from "../../../types/typings";

export function FirstName({ num, q }: { num: number; q: QuestionType }) {
	const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
	const { state, dispatch } = useQuestions();

	const errorMsg = error.firstName ?? "";
	const { firstName } = state;

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		errorMsg &&
			setErrorMsg &&
			setErrorMsg((prevValue) => {
				delete prevValue.firstName;
				return prevValue;
			});

		dispatch({ type: SET_FIRST_NAME, payload: event.target.value });
	};

	return (
		<>
			<QuestionNumHeading questionNum={num}>
				What&apos;s your first name? {q.required && "*"}
			</QuestionNumHeading>

			<QuestionInputText
				placeholder="Harry..."
				value={firstName}
				onChange={handleInputChange}
			/>

			{errorMsg && <Error message={errorMsg} />}

			{errorMsg === "" && (
				<QuestionButton
					showEnter={true}
					className={classNames("btn-container")}
					onClick={handleOkClick}
				>
					OK
				</QuestionButton>
			)}
		</>
	);
}
