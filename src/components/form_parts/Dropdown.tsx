import React, { MouseEventHandler, ReactNode } from "react";
import Image from "next/image";
import { LuCheckCircle2 } from "react-icons/lu";

type DropdownSelectProps = {
	readonly className?: string;
	readonly children: ReactNode;
};

type DropdownSelectOptionProps = {
	readonly isSelected?: boolean;
	readonly onClick?: MouseEventHandler;
	readonly className?: string;
	readonly children: ReactNode;
};

const DropdownSelectOption = ({
	isSelected,
	onClick,
	className,
	children,
}: DropdownSelectOptionProps) => {
	return (
		<span
			className={`${className} flex items-center border border-transparent rounded px-2 min-h-10 w-full cursor-pointer mb-1 transition-colors duration-300 ${
				isSelected
					? "border-2 border-btn-text-color bg-placeholder-color"
					: "border-para-text-color bg-dropdown-background-color"
			} hover:bg-placeholder-color`}
			onClick={onClick}
			style={{
				fontSize: isSelected ? "2rem" : "1.9rem", // Handling responsive font size
			}}
		>
			{children}
			{isSelected && (
				<LuCheckCircle2 className="ml-auto" width={30} height={30} />
				// <Image
				// 	src="/check-small.svg"
				// 	alt="check small"
				// 	width={30}
				// 	height={30}
				// 	className="ml-auto" // Margin left auto to align the image to the right
				// />
			)}
		</span>
	);
};

const DropdownSelect = ({ className, children }: DropdownSelectProps) => {
	return (
		<div className={`${className} bg-body-background-color mt-2`}>
			{children}
		</div>
	);
};

export { DropdownSelectOption, DropdownSelect };
