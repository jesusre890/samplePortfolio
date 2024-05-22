import { Chip } from "@material-tailwind/react";

export default function Education() {
	return (
		<div id="education" className="mb-28">
			{/*RUNS ubicacion */}
			<div className="flex items-center ml-2 mb-5">
				<Chip
					value="RUNS"
					className="w-12 bg-amber-500 rounded-none text-gray-800 h-4 flex text-xs justify-center"
				/>
				<p className="ml-4 text-sm">src/pages</p>
				<p className=" font-bold text-blue-gray-50 text-sm">/Academic Background</p>
			</div>
			<div className=" md:ml-7 ml-4 flex flex-col gap-5">
				<p className="text-2xl mb-2">Academic Background</p>

				{/*arc*/}
				<div className="flex flex-col md:flex-row md:gap-7 md:items-center">
					<p className=" font-bold">Facultad de Arquitectura</p>
					<p>National University of Rosario</p>
					<p className="text-sm ">Architect</p>
				</div>

				{/*java*/}
				<div className="flex flex-col md:flex-row md:gap-7 md:items-center">
					<p className=" font-bold">Java Introduction</p>
					<p>IT Education</p>
					<p className="text-sm text-light-green-700">[2024]</p>
				</div>

				{/*sql*/}
				<div className="flex flex-col md:flex-row md:gap-7 md:items-center">
					<p className=" font-bold">SQL Database</p>
					<p>IT Education</p>
					<p className="text-sm text-light-green-700">[2024]</p>
				</div>

				{/*inspeccion*/}
				<div className="flex flex-col md:flex-row md:gap-7 md:items-center">
					<p className=" font-bold">Construction Management and Inspection Course</p>
					<p>Central Society of Architects </p>
					<p className="text-sm text-light-green-700">[2021]</p>
				</div>

				{/*patalogias*/}
				<div className="flex flex-col md:flex-row md:gap-7 md:items-center">
					<p className=" font-bold">Construction Pathology Course</p>
					<p>National Technological University</p>
					<p className="text-sm text-light-green-700">[2020]</p>
				</div>

				{/*tasacion*/}
				<div className="flex flex-col md:flex-row md:gap-7 md:items-center">
					<p className=" font-bold">Estate Appraisal Course</p>
					<p>Center for Architecture and Design</p>
					<p className="text-sm text-light-green-700">[2018]</p>
				</div>

				{/*BIM*/}
				<div className="flex flex-col md:flex-row md:gap-7 md:items-center">
					<p className=" font-bold">BIM Course: Architecture</p>
					<p>Freedom Foundation</p>
					<p className="text-sm text-light-green-700">[2017]</p>
				</div>
			</div>
		</div>
	);
}
