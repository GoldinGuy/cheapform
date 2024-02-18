type ProgressBarProps = {
	readonly width?: number;
};

export function ProgressBar({ width }: ProgressBarProps) {
	return (
		<div className={"progress-bar-path"}>
			<div
				className={"progress-bar bg-yellow-500"}
				style={{ width: `${width ?? 0}%` }}
			/>
		</div>
	);
}
