import Image from "next/image";

import F1Logo from "../public/images/f1-logo.png";

const Navbar = () => {
	return (
		<div className="bg-f1-black w-full py-4 flex justify-between items-center text-white">
			{/*F1 Logo*/}
			<Image
				src={F1Logo}
				width={250}
				height={250}
				alt="Formula One Logo"
				className="px-4"
			/>
			{/*Placeholder until other pages are implemented*/}
			<h1>F1 App</h1>
		</div>
	);
};

export default <Navbar />;
