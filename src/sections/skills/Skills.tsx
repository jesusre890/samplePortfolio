import { Chip } from "@material-tailwind/react";

function Skills() {
	return (
		<div>
			<div id="skills" className="mb-28">
				{/*RUNS ubicacion */}
				<div className="flex items-center ml-2 mb-5">
					<Chip
						value="RUNS"
						className="w-12 bg-amber-500 rounded-none text-gray-800 h-4 flex text-xs justify-center"
					/>
					<p className="ml-4 text-sm">src/pages</p>
					<p className=" font-bold text-blue-gray-50 text-sm">/skills</p>
				</div>
				<div className=" flex flex-col md:flex-row gap-14">
					<div className=" md:ml-7 ml-4 flex flex-col gap-4">
						<p className="text-2xl mb-2">Skills</p>

						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold"> - Java</p>
						</div>
						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold"> - html / css</p>
						</div>
						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold"> - Autodesk Revit</p>
						</div>
						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold"> - Sketchup + VRAY</p>
						</div>
						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold">- Adobe Photoshop</p>
						</div>
						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold">- Adobe Illustrator</p>
						</div>
						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold">- Microsoft office</p>
						</div>
					</div>
					<div className=" md:ml-7 ml-4 flex flex-col gap-4">
						<p className="text-2xl mb-2">Soft skills</p>

						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold"> - Critical thinking</p>
						</div>
						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold"> - Communication</p>
						</div>
						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold">- Teamwork</p>
						</div>
						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold">- Organization and management of resources</p>
						</div>
						<div className="flex flex-col md:flex-row md:gap-4 md:items-center">
							<p className=" font-bold">- Problem solving</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
