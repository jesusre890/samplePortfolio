import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./App.css";
import { useEffect, useState } from "react";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/Education";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import { BiCopyright } from "react-icons/bi";
import ScrollUp from "./components/scrollUp/ScrollUp";

function App() {
	function NavList() {
		return (
			<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
				<Typography
					placeholder={undefined}
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

	const [openNav, setOpenNav] = useState(false);

	const handleWindowResize = () =>
		window.innerWidth >= 960 && setOpenNav(false);

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<div className="text-blue-gray-100 lg:mx-14">
			<header className=" text-blue-gray-100">
				<Navbar
					placeholder={undefined}
					className="mx-auto w-full px-4 py-1 rounded-none bg-gray-800 border-0"
				>
					<div className="flex items-center justify-between text-blue-gray-900">
						<Typography
							placeholder={undefined}
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
				</Navbar>
			</header>
			<main>
				<Profile />
				<Experience />
				<Education />
				<Projects />
				<Skills />
				<Contact />
			</main>
			<footer>
				<h1 className="flex items-center gap-2 font-medium text-gray-200 text-sm my-5 dark:text-blue-gray-100">
					<div className=" text-blue-600 ml-2">[Footer]</div>
					<BiCopyright />
					<div className="">Ezequiel Fortuna 2024</div>
				</h1>
			</footer>
			<ScrollUp />
		</div>
	);
}

export default App;
