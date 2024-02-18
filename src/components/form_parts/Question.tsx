import classNames from "classnames";
import { QuestionProps } from "../../../types/typings";
import { useSharedStates } from "../../../utils/shared_state";
import { BtnContainer } from "./Btn";
import { QuestionBoxHeading, QuestionBoxPara } from "./QuestionParts";
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
			<QuestionBoxHeading className="flex justify-between items-center">
				Welcome to CheapForm <LuCheckCircle />
			</QuestionBoxHeading>
			<QuestionBoxPara>
				To get started, we need to know a few things about you.
				<br />
				<br />
				Do you
				<br />- dogs or cats?
				<br />- coffee or boba?
			</QuestionBoxPara>
			<BtnContainer showEnter={true} onClick={handleOkClick}>
				Start
			</BtnContainer>
		</>
	);
}
