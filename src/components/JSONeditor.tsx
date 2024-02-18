// import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
	LuCheck,
	LuCopy,
	LuFileEdit,
	LuRefreshCcw,
	LuSave,
	LuTrash,
} from "react-icons/lu";
import { formConfig } from "../../types/typings";

export default function JSONEditor({
	config,
	setConfig,
}: {
	config: formConfig;
	setConfig: Function;
}) {
	const [showEditor, setShowEditor] = useState(false);
	const [configText, setConfigText] = useState(JSON.stringify(config, null, 2));

	const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setConfigText(event.target.value);
	};

	return (
		<>
			<div className="fixed bottom-3 right-3 flex flex-1 flex-col items-center justify-center z-50">
				<button
					className="bg-gray-900 rounded p-3 transform focus:scale-105 hover:bg-gray-800"
					onClick={() => {
						if (showEditor) {
							setConfig(JSON.parse(configText));
							setShowEditor(false);
						} else {
							setShowEditor(true);
						}
					}}
				>
					{showEditor ? (
						<LuSave width={50} height={50} />
					) : (
						<LuFileEdit width={50} height={50} />
					)}
				</button>
			</div>
			{showEditor && (
				<div className="fixed right-0 top-0 bottom-0 w-screen sm:w-96">
					<div className="">
						<div className="grid gap-2 overflow-hidden">
							<pre className="font-mono text-sm w-full ">
								<textarea
									value={configText}
									onChange={handleTextChange} // Add the onChange event handler
									className="items-start border flex md:w-full flex-col min-h-screen z-30 bg-gray-100/40 border-gray-200 shadow-sm px-4 overflow-y-scroll dark:bg-gray-800/40 dark:border-gray-800 w-screen sm:w-96"
								/>
							</pre>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
