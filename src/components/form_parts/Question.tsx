import classNames from "classnames";
import { QuestionProps } from "../../../types/typings";
import { useSharedStates } from "../../../utils/shared_state";
import { QuestionButton } from "./Btn";
import { QuestionHeading, QuestionParagraph } from "./QuestionParts";
import { LuCheckCircle, LuCheckCircle2 } from "react-icons/lu";
import { FirstName } from "../question_types/FirstName";
import { LastName } from "../question_types/LastName";
import { Email } from "../question_types/Email";
import { Select } from "../question_types/Select";
import { Multiselect } from "../question_types/MultiSelect";

export function Question({
	num,
	inView,
	inViewSlide,
	outView,
	outViewSlide,
	isRendered,
	type,
	questionData,
}: QuestionProps) {
	return (
		<div
			className={classNames("question-box", {
				"slide-out": outView,
				"slide-in": inView,
				"out-view__up": outViewSlide === "up",
				"out-view__down": outViewSlide === "down",
				"in-view__up": inViewSlide === "up",
				"in-view__down": inViewSlide === "down",
				rendered: isRendered,
			})}
		>
			{type === "intro" && <Intro num={num} />}
			{type === "firstName" && <FirstName num={num} q={questionData} />}
			{type === "lastName" && <LastName num={num} q={questionData} />}
			{type === "email" && <Email num={num} q={questionData} />}
			{type === "select" && <Select num={num} q={questionData} />}
			{type === "multiselect" && <Multiselect num={num} q={questionData} />}
		</div>
	);
}

export function Intro({ num }: { num: number }) {
	const { handleOkClick } = useSharedStates();

	return (
		<>
			<QuestionHeading className="flex justify-between items-center">
				Welcome to CheapForm <LuCheckCircle2 />
			</QuestionHeading>
			<QuestionParagraph>
				Are you ready to explore the best way to build forms?
				<br />
				Then click below!
			</QuestionParagraph>
			<QuestionButton showEnter={true} onClick={handleOkClick}>
				Start
			</QuestionButton>
		</>
	);
}
