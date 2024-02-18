import { useEffect } from "react";
import { useSharedStates } from "../../utils/shared_state";
import { useHandleKeypress } from "../../hooks/useHandleKeypress";
import { useHandleScroll } from "../../hooks/useHandleScroll";
import { Question } from "./form_parts/Question";
import { formConfig } from "../../types/typings";

export function CheapForm({ config }: { config: formConfig }) {
	const { questionNum, setShowIndustriesList } = useSharedStates();
	const { prev, now } = questionNum;

	useEffect(() => {
		console.log("now", now);
		console.log("prev", prev);
	}, [prev, now]);

	useHandleKeypress();
	useHandleScroll();

	useEffect(() => {
		function handleClick() {
			setShowIndustriesList(false);
		}

		document.addEventListener("click", handleClick);

		return function () {
			document.removeEventListener("click", handleClick);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className="mx-3 max-w-screen-sm md:max-w-screen-md">
			<div>
				<Question
					type={config.questions[0].type}
					outView={now - 1 === 0 || now > 1}
					outViewSlide="up"
					inView={now === 0}
					inViewSlide={prev === 1 ? "down" : ""}
					isRendered={prev === null}
					questionData={config.questions[0]}
					num={0}
				/>
				{config.questions.map((question, index) => {
					let shouldRender =
						index > 0 &&
						[index - 1, index + 1].includes(prev ?? (index === 1 ? -1 : 0)) &&
						[now - 1, now, now + 1].includes(index);
					console.log("shouldRender", index);
					return (
						<>
							{shouldRender && (
								<Question
									key={index}
									type={question.type}
									outView={[now - 1, now + 1].includes(index)}
									outViewSlide={now - 1 === index ? "up" : "down"}
									inView={now === index}
									inViewSlide={prev === index + 1 ? "down" : ""}
									questionData={question}
									num={index}
								/>
							)}
						</>
					);
				})}
			</div>
		</section>
	);
}
