// import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LuCheck, LuCopy, LuFileEdit, LuSave, LuTrash } from "react-icons/lu";

export default function JSONEditor() {
	const [showEditor, setShowEditor] = useState(false);

	return (
		<>
			<div className="absolute bottom-3 right-3 flex flex-1 flex-col items-center justify-center z-50">
				<button
					className="bg-gray-900 rounded p-3 transform focus:scale-105 hover:bg-gray-800"
					onClick={() => setShowEditor(!showEditor)}
				>
					<LuFileEdit width={50} height={50} />
				</button>
			</div>
			{showEditor && (
				<div className="fixed right-0 top-0 bottom-0 w-screen sm:w-96">
					<div className="items-start border flex w-full flex-col  min-h-screen z-30 bg-gray-100/40 border-gray-200 shadow-sm px-4 rounded-lg overflow-auto dark:bg-gray-800/40 dark:border-gray-800">
						<div className="grid gap-2">
							<div className="pt-2">
								{/* <button className="mr-2">
									<LuSave className="h-4 w-4" />
									<span className="sr-only">Save</span>
								</button> */}
								<button className="mr-2">
									<LuTrash className="h-4 w-4" />
									<span className="sr-only">Clear</span>
								</button>
								<button className="mr-2">
									<LuFileEdit className="h-4 w-4" />
									<span className="sr-only">Edit</span>
								</button>
								{/* <Button className="mr-2" size="icon" variant="outline">
							<LuCopy className="h-4 w-4" />
							<span className="sr-only">Copy</span>
						</Button>
						<Button className="mr-2" size="icon" variant="outline">
							<LuCheck className="h-4 w-4" />
							<span className="sr-only">Format</span>
						</Button> */}
							</div>
							<pre className="font-mono text-sm w-full">
								{`"{\n  "products\": [\n    {\n      \"id\": \"1\",\n      \"name\": \"Shoes\"\n    }\n  ]\n}"`}
							</pre>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
