import { Typography } from "@material-tailwind/react";
import React from "react";

function NavList() {
	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium text-gray-200"
			>
				<a
					href="#experience"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Experience
				</a>
			</Typography>
			<Typography
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium text-gray-200"
			>
				<a
					href="#education"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Education
				</a>
			</Typography>
			<Typography
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium text-gray-200"
			>
				<a
					href="#projects"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Languages
				</a>
			</Typography>
			<Typography
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium text-gray-200"
			>
				<a
					href="#skills"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Skills
				</a>
			</Typography>
			<Typography
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium text-gray-200"
			>
				<a
					href="#contact"
					className="flex items-center hover:text-blue-500 transition-colors"
				>
					Contact
				</a>
			</Typography>
		</ul>
	);
}
export default NavList;
