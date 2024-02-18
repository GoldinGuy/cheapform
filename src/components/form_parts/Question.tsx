import classNames from "classnames";
import { QuestionProps } from "../../../types/typings";
import { useSharedStates } from "../../../utils/shared_state";
import { QuestionButton } from "./Btn";
import { QuestionHeading, QuestionParagraph } from "./QuestionParts";
import { LuCheckCircle, LuCheckCircle2 } from "react-icons/lu";
import { FirstName } from "../question_types/FirstName";
import { LastName } from "../question_types/LastName";
import { Email } from "../question_types/Email";

export function Question({
	inView,
	inViewSlide,
	outView,
	outViewSlide,
	isRendered,
	type,
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
			{type === "intro" && <Intro />}
			{type === "firstName" && <FirstName />}
			{type === "lastName" && <LastName />}
			{type === "email" && <Email />}
			{/*{type === "industry" && <IndustryInput />}
			{type === "role" && <RoleInput />}
			{type === "goal" && <GoalInput />}
			 */}
		</div>
	);
}

export function Intro() {
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
