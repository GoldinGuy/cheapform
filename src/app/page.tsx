import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QuestionsProvider } from "../../utils/questions_context";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QuestionsProvider>
			<Component {...pageProps} />
		</QuestionsProvider>
	);
}
