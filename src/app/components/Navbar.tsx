import Image from "next/image";

import F1Logo from "../public/images/f1-logo.png";

/* Component for the navbar at the top of all pages*/
const Navbar = () => {
	return (
		// Flex and justify between to space items apart, item-center to keep them in the middle
		<div className="bg-f1-black w-full py-4 px-8 flex justify-between items-center text-white">
			{/*F1 Logo*/}
			<Image
				src={F1Logo}
				width={250}
				height={250}
				alt="Formula One Logo"
			/>
			{/*Placeholder until other pages are implemented*/}
			<h1 className="text-2xl font-bold"> F1 Data Dashboard</h1>
		</div>
	);
};

export default <Navbar />;
