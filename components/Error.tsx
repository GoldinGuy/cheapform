import { LuAlertTriangle } from "react-icons/lu";

type ErrorProps = {
	readonly message: string;
};
export function Error({ message }: ErrorProps) {
	return (
		<div
			className={`flex items-end bg-error-background-color text-error-text-color rounded px-3 py-2 animate-slide-up-error font-medium ${"max-w-max mt-4"} md:font-semibold md:mt-6 w-full md:max-w-max`}
		>
			<LuAlertTriangle width={18} height={18} className="mr-1" />
			{message}
		</div>
	);
}
