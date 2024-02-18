import classNames from "classnames";
import { useQuestions } from "../../../utils/questions_context";
import { useSharedStates } from "../../../utils/shared_state";
import { DropdownSelect, DropdownSelectOption } from "../form_parts/Dropdown";
import {
	QuestionNumHeading,
	QuestionParagraph,
} from "../form_parts/QuestionParts";
import { SET_SELECT } from "../../../reducers";
import { Error } from "../Error";
import { QuestionButton } from "../form_parts/Btn";
import { ObjectType, QuestionType } from "../../../types/typings";

export function Select({ num, q }: { num: number; q: QuestionType }) {
	const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
	const { state, dispatch } = useQuestions();

	const errorMsg = error.select ?? "";
	const { select } = state;

	function handleDropdownOptionClick(_selection: string) {
		setErrorMsg &&
			setErrorMsg((prevValue) => {
				delete prevValue.role;
				return prevValue;
			});

		if (_selection === select) {
			dispatch({ type: SET_SELECT, payload: "" });
		} else {
			dispatch({ type: SET_SELECT, payload: _selection });
			setTimeout(() => handleOkClick(), 600);
		}
	}

	return (
		<>
			<QuestionNumHeading questionNum={num}>
				{q.question} {q.required && "*"}
			</QuestionNumHeading>

			{q.description && <QuestionParagraph>{q.description}</QuestionParagraph>}

			<DropdownSelect className={"s-dropdown"}>
				<div>
					{q.answers &&
						Object.keys(q.answers).map((selectkey) => {
							if (!q.answers) return null;
							const _selection = q.answers[selectkey];

							return (
								<DropdownSelectOption
									key={selectkey}
									className={"s-option"}
									onClick={() => handleDropdownOptionClick(_selection)}
									isSelected={_selection === select}
								>
									<span
										className={classNames({
											["selected"]: _selection === select,
										})}
									>
										{selectkey}
									</span>
									{_selection}
								</DropdownSelectOption>
							);
						})}
				</div>
			</DropdownSelect>

			{errorMsg && <Error message={errorMsg} />}

			{select && errorMsg === "" && (
				<QuestionButton
					className={classNames("btn-container")}
					showEnter={false}
					onClick={handleOkClick}
				>
					OK
				</QuestionButton>
			)}
		</>
	);
}
