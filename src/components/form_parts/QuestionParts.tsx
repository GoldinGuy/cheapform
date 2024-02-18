import {
	ChangeEventHandler,
	ForwardedRef,
	ReactNode,
	forwardRef,
	useEffect,
	useRef,
} from "react";
import classNames from "classnames";
// import { questrialFont } from "../../utils/questrial";
import { LuArrowRight, LuHash, LuNut } from "react-icons/lu";

type QuestionHeadingProps = {
	readonly children: ReactNode;
	readonly className?: string;
};

export function QuestionHeading({ children, className }: QuestionHeadingProps) {
	return (
		<h1
			className={classNames(
				"text-btn-text-color font-semibold text-5xl",
				className
			)}
		>
			{children}
		</h1>
	);
}

type QuestionParagraphProps = {
	readonly children: ReactNode;
};

export function QuestionParagraph({ children }: QuestionParagraphProps) {
	return (
		<p className="text-para-text-color font-normal text-4xl leading-snug mt-3">
			{children}
		</p>
	);
}

type QuestionNumHeadingProps = {
	readonly children: ReactNode;
	readonly questionNum: number;
};

export function QuestionNumHeading({
	children,
	questionNum,
}: QuestionNumHeadingProps) {
	return (
		<QuestionHeading className="relative">
			<span
				className="absolute text-lg -ml-9 mt-1.5 flex justify-center items-center"
				style={{ fontSize: "16px", marginLeft: "-36px", marginTop: "5px" }}
			>
				{questionNum}
				<LuArrowRight width={16} height={16} />
				{/* <LuArrowRight className="mb-[-3px]" width={16} height={16} /> */}
			</span>
			{children}
		</QuestionHeading>
	);
}

type QuestionInputTextProps = {
	readonly placeholder?: string;
	readonly className?: string;
	readonly value?: string;
	readonly onChange?: ChangeEventHandler<HTMLInputElement>;
	readonly type?: string;
};

const QuestionInputText = forwardRef(
	(
		{ placeholder, className, value, onChange, type }: QuestionInputTextProps,
		passedRef: ForwardedRef<HTMLInputElement>
	) => {
		const inputTextRef = useRef<HTMLInputElement>(null);

		useEffect(() => {
			setTimeout(() => {
				inputTextRef.current?.focus();
			}, 500);
		}, []);

		return (
			<input
				ref={passedRef}
				className={classNames(
					"bg-transparent border-none border-b border-placeholder-color text-btn-text-color text-6xl mt-9 pb-2 w-full focus:border-b-2 focus:border-btn-text-color focus:outline-none",
					// questrialFont.className,
					className
				)}
				type={type ?? "text"}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		);
	}
);

QuestionInputText.displayName = "QuestionInputText";

export { QuestionInputText };
