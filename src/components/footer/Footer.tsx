import { BiCopyright } from "react-icons/bi";

function Footer() {
	return (
		<footer>
			<h1 className="flex items-center gap-2 font-medium text-gray-200 text-sm my-5 dark:text-blue-gray-100">
				<div className=" text-blue-600 ml-2">[Footer]</div>
				<BiCopyright />
				<div className="">Ezequiel Fortuna 2024</div>
			</h1>
		</footer>
	);
}

export default Footer;
