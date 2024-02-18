import { LuAlertTriangle } from "react-icons/lu";

type ErrorProps = {
	readonly message: string;
};
export function Error({ message }: ErrorProps) {
	return (
		<div
			className={`flex items-center bg-red-500 text-white rounded px-3 py-2 animate-slide-up-error font-medium ${"max-w-max mt-4"} md:font-semibold md:mt-6 w-full md:max-w-max`}
		>
			<LuAlertTriangle width={18} height={18} className="mr-1" />
			{message}
		</div>
	);
}
