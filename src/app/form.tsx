import Image from "next/image";
import { useQuestions } from "../../utils/questions_context";
import { questrialFont } from "../../utils/questrial";
import { ProgressBar } from "../../components/ProgressBar";
import { SharedStatesProvider } from "../../utils/shared_state";

export default function Form() {
	const { percentComplete } = useQuestions();

	return (
		<>
			<header className="fixed top-0 left-0 right-0 overflow-hidden">
				<ProgressBar width={percentComplete} />
				<Image
					src="/cheapform_logo.png"
					alt="Cheapform logo"
					width={96}
					height={24}
					className="animate-slide-up m-4" // Custom animation class
				/>
			</header>
			<main
				className={`flex flex-col items-center justify-center min-h-screen min-w-full antialiased ${questrialFont.className}`}
			>
				<SharedStatesProvider>
					<div>TBD</div>
				</SharedStatesProvider>
			</main>
		</>
	);
}
