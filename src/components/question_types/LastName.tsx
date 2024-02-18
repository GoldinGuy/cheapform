import classNames from "classnames";
import { ChangeEventHandler } from "react";
import { SET_LAST_NAME } from "../../../reducers";
import { useQuestions } from "../../../utils/questions_context";
import { useSharedStates } from "../../../utils/shared_state";
import { BtnContainer } from "../form_parts/Btn";
import {
	QuestionNumHeading,
	QuestionInputText,
} from "../form_parts/QuestionParts";
import { Error } from "../Error";

export function LastName() {
	const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
	const { state, dispatch } = useQuestions();

	const errorMsg = error.firstName ?? "";
	const { firstName, lastName } = state;

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		errorMsg &&
			setErrorMsg &&
			setErrorMsg((prevValue) => {
				delete prevValue.lastName;
				return prevValue;
			});

		dispatch({ type: SET_LAST_NAME, payload: event.target.value });
	};

	return (
		<>
			<QuestionNumHeading questionNum={2}>
				Thanks, {firstName}. What&apos;s your last name?
			</QuestionNumHeading>

			<QuestionInputText
				placeholder="Wang..."
				value={lastName}
				onChange={handleInputChange}
			/>

			{errorMsg && <Error message={errorMsg} />}

			{errorMsg === "" && (
				<BtnContainer
					showEnter={true}
					className={classNames("btn-container")}
					onClick={handleOkClick}
				>
					OK
				</BtnContainer>
			)}
		</>
	);
}
