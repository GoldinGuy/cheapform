import classNames from "classnames";
import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { questrialFont } from "../../utils/questrial";

type BtnContainerProps = {
	readonly children: ReactNode;
	readonly showPressEnter: boolean;
	readonly className?: string;
	readonly onClick?: MouseEventHandler;
};

export function BtnContainer({
	children,
	showPressEnter,
	className,
	onClick,
}: BtnContainerProps) {
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
				className={`${questrialFont.className} bg-primary-color border border-transparent rounded text-btn-text-color cursor-pointer text-2xl font-bold py-2.5 px-3.5 hover:bg-primary-light-color active:bg-primary-dark-color focus:outline-none`}
			>
				{children}
			</button>
			{isOnMobile || !showPressEnter || (
				<span className="text-btn-text-color text-lg md:text-xl">
					press{" "}
					<strong className="font-extrabold tracking-wide">Enter ↵</strong>
				</span>
			)}
		</div>
	);
}
