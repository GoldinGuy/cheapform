import classNames from "classnames";
import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { LuCheck } from "react-icons/lu";

type QuestionButtonProps = {
	readonly children: ReactNode;
	readonly className?: string;
	readonly onClick?: MouseEventHandler;
	readonly showEnter?: boolean;
};

export function QuestionButton({
	children,
	className,
	showEnter,
	onClick,
}: QuestionButtonProps) {
	const [isOnMobile, setIsOnMobile] = useState(false);

	useEffect(() => {
		if (navigator?.userAgent.toLowerCase().includes("mobile")) {
			setIsOnMobile(true);
		}

		const handleResizeEvent = () => {
			setIsOnMobile(navigator?.userAgent.toLowerCase().includes("mobile"));
		};

		window.addEventListener("resize", handleResizeEvent);

		return () => {
			window.removeEventListener("resize", handleResizeEvent);
		};
	}, []);

	return (
		<div
			className={classNames("flex items-center gap-3 mt-8 w-full", className, {
				"flex-col gap-4 items-start": isOnMobile,
			})}
		>
			<button
				onClick={onClick}
				className={`bg-yellow-500 border border-transparent rounded text-btn-text-color cursor-pointer text-xl md:text-2xl font-bold py-2.5 px-4 hover:bg-primary-light-color active:bg-yellow-600 focus:outline-none flex justify-between items-center`}
			>
				{children}
				<LuCheck className="ml-2" />
				{/* <span className="ml-3">↵</span> */}
			</button>
			{isOnMobile || !showEnter || (
				<span className="text-btn-text-color text-sm md:text-md">
					press{" "}
					<strong className="font-extrabold tracking-wide">Enter ↵</strong>
				</span>
			)}
		</div>
	);
}
