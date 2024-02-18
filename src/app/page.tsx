"use client";

import Image from "next/image";
import { useQuestions } from "../../utils/questions_context";
import { ProgressBar } from "../components/ProgressBar";
import { SharedStatesProvider } from "../../utils/shared_state";
import { CheapForm } from "../components/Form";
import JSONEditor from "@/components/JSONeditor";
import defaultConfig from "../../utils/config";
import { useState } from "react";

export default function Form() {
	const { percentComplete } = useQuestions();
	const [CONFIG, setCONFIG] = useState(defaultConfig);

	return (
		<>
			<header className="fixed top-0 left-0 right-0 overflow-hidden">
				<ProgressBar width={percentComplete} />
				<Image
					src="/cheapform_logo.png"
					alt="Cheapform logo"
					width={150}
					height={30}
					className="animate-slide-up m-4" // Custom animation class
				/>
			</header>
			<main
				className={`flex flex-col items-center justify-center min-h-screen min-w-full antialiased font-sans`}
			>
				<SharedStatesProvider>
					<CheapForm config={CONFIG} />
					<JSONEditor config={CONFIG} setConfig={setCONFIG} />
				</SharedStatesProvider>
			</main>
		</>
	);
}
