import classNames from "classnames";
import { ChangeEventHandler } from "react";
import { SET_FIRST_NAME } from "../../../reducers";
import { useQuestions } from "../../../utils/questions_context";
import { useSharedStates } from "../../../utils/shared_state";
import { BtnContainer } from "../form_parts/Btn";
import {
	QuestionNumHeading,
	QuestionInputText,
} from "../form_parts/QuestionParts";
import { Error } from "../Error";

export function FirstName() {
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
			<QuestionNumHeading questionNum={1}>
				What&apos;s your first name?
			</QuestionNumHeading>

			<QuestionInputText
				placeholder="Kyler..."
				value={firstName}
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
