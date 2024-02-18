import classNames from "classnames";
import { useMemo } from "react";
import { useQuestions } from "../../../utils/questions_context";
import { useSharedStates } from "../../../utils/shared_state";
import { DropdownSelect, DropdownSelectOption } from "../form_parts/Dropdown";
import { QuestionNumHeading } from "../form_parts/QuestionParts";
import { Error } from "../Error";
import { QuestionButton } from "../form_parts/Btn";
import { REMOVE_SELECT, SET_MULTISELECT } from "../../../reducers";
import { QuestionType } from "../../../types/typings";

export function Multiselect({ num, q }: { num: number; q: QuestionType }) {
	const { errorMsg: error, setErrorMsg, handleOkClick } = useSharedStates();
	const { state, dispatch } = useQuestions();

	const errorMsg = error.multiselect ?? "";
	const { firstName, select, multiselect } = state;

	function handleDropdownOptionClick(_multi: string) {
		setErrorMsg &&
			setErrorMsg((prevValue) => {
				delete prevValue.multiselect;
				return prevValue;
			});

		if (multiselect.includes(_multi)) {
			dispatch({ type: REMOVE_SELECT, payload: _multi });
		} else {
			dispatch({ type: SET_MULTISELECT, payload: _multi });

			if (multiselect.length === 1) {
				setTimeout(() => handleOkClick(), 600);
			}
		}
	}

	const chooseNum = 2 - multiselect.length;

	return (
		<>
			<QuestionNumHeading questionNum={num}>
				{q.question} {q.required && "*"}
			</QuestionNumHeading>

			{chooseNum === 2 && <span className={"choose-num"}>Choose 2</span>}
			{chooseNum === 1 && <span className={"choose-num"}>Choose 1 more</span>}

			<DropdownSelect
				className={classNames("s-dropdown", "multi-dropdown", {
					"remove-margin__top": chooseNum !== 0,
				})}
			>
				<div>
					{q.answers &&
						Object.keys(q.answers).map((mKey) => {
							if (!q.answers) return null;
							const _multi = q.answers[mKey];
							const isSelected = multiselect.includes(_multi);

							return (
								<DropdownSelectOption
									key={mKey}
									className={classNames("s-option", "multi-option", {
										["not-selected"]: !isSelected && multiselect.length === 2,
									})}
									onClick={() => handleDropdownOptionClick(_multi)}
									isSelected={isSelected}
								>
									<span
										className={classNames({
											["selected"]: isSelected,
										})}
									>
										{mKey}
									</span>
									<span className={"multi"}>{_multi}</span>
								</DropdownSelectOption>
							);
						})}
				</div>
			</DropdownSelect>

			{errorMsg && <Error message={errorMsg} />}

			{multiselect.length === 2 && errorMsg === "" && (
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
