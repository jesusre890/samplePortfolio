import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
	Collapse,
	IconButton,
	Navbar as NavbarComponent,
	Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import NavList from "../nav-list";

function Navbar() {
	const [openNav, setOpenNav] = useState(false);

	const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);
	return (
		<header className=" text-blue-gray-100">
			<NavbarComponent
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
				className="mx-auto w-full px-4 py-1 rounded-none bg-gray-800 border-0"
			>
				<div className="flex items-center justify-between text-blue-gray-900">
					<Typography
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						as="a"
						href="#"
						variant="h6"
						className="mr-4 cursor-pointer py-1.5 text-gray-200"
					>
						E.Fortuna
					</Typography>
					<div className="hidden lg:block">
						<NavList />
					</div>
					<IconButton
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						variant="text"
						className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-gray-200"
						ripple={false}
						onClick={() => setOpenNav(!openNav)}
					>
						{openNav ? (
							<XMarkIcon className="h-6 w-6" strokeWidth={2} />
						) : (
							<Bars3Icon className="h-6 w-6" strokeWidth={2} />
						)}
					</IconButton>
				</div>
				<Collapse open={openNav}>
					<NavList />
				</Collapse>
			</NavbarComponent>
		</header>
	);
}

export default Navbar;
