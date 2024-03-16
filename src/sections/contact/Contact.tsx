import { Chip } from "@material-tailwind/react";

function Contact() {
	return (
		<div id="contact" className="mb-28">
			{/*RUNS ubicacion */}
			<div className="flex items-center ml-2 mb-5">
				<Chip
					value="RUNS"
					className="w-12 bg-amber-500 rounded-none text-gray-800 h-4 flex text-xs justify-center"
				/>
				<p className="ml-4 text-sm">src/pages</p>
				<p className=" font-bold text-blue-gray-50 text-sm">/contact</p>
			</div>

			<div className="mb-5 md:ml-7 ml-4">
				<p className="text-2xl mb-6">Contact me</p>
				<div className="flex flex-col md:flex-row gap-2 text-xs md:text-sm">
					<p className=" text-deep-orange-600">[Email]</p>
					<a
						href="mailto:ezequielfortuna6@gmail.com"
						className=" text-amber-600 hover:text-light-blue-500"
						target="_blank"
					>
						ezequielfortuna6@gmail.com
					</a>
				</div>
				<div className="flex flex-col md:flex-row gap-2 text-xs md:text-sm mt-5">
					<p className=" text-light-blue-700">[Linkedin]</p>
					<a
						href="https://www.linkedin.com/in/ezequiel-emilio-fortuna-b4a80519a/"
						className=" text-amber-600 hover:text-light-blue-500"
						target="_blank"
					>
						Ezequiel Emilio Fortuna
					</a>
				</div>
				<div className="flex flex-col md:flex-row gap-2 text-xs md:text-sm mt-5">
					<p className=" text-light-blue-200">[cell phone]</p>
					<a href="" className=" text-amber-600 hover:text-light-blue-500">
						+5493416379257
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
