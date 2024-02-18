import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QuestionsProvider } from "../../utils/questions_context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cheapform",
	description: "Typeform, but cheaper",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<QuestionsProvider>
			<html lang="en">
				<body className={inter.className}>{children}</body>
			</html>
		</QuestionsProvider>
	);
}
