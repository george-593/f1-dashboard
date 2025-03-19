"use client";
import { useQuery } from "@tanstack/react-query";

import fetchFlag from "../../utils/fetchFlag";

const DriverCard = ({ number, driver }) => {
	{
		/* Using react-query as it has automatic caching to reduce the amount of API calls*/
	}
	const { data: flagData } = useQuery({
		queryKey: [driver.country_code],
		queryFn: fetchFlag,
	});

	return (
		<div
			style={{ backgroundColor: `#${driver.team_colour}` }}
			className="py-2 px-4 rounded-lg my-2 flex mx-2"
		>
			{/* Overlay the drivers number over their headshot because of the poor quality of headshots from OpenF1 */}
			<div className="relative text-center">
				<img
					src={driver.headshot_url}
					alt={`${driver.full_name} headshot`}
					className="w-32"
				/>
				<div className="w-full h-full absolute top-0 left-0 text-center text-white font-black text-9xl bg-black opacity-20 rounded-lg flex items-center justify-center">
					{driver.driver_number}
				</div>
			</div>
			<div className="ml-4 flex flex-col justify-between">
				<div>
					<h2 className="font-bold text-lg">
						{driver.full_name.toUpperCase()}
					</h2>
					<h2 className="font-black text-lg">{driver.team_name}</h2>
				</div>
				{/* Only show the flag image if the driver has a country code as rookies do not have one as of 19/03/2025 (after round 1)*/}
				{driver.country_code ? (
					<img
						src={flagData?.flags?.png}
						alt={`${driver.country_code} flag`}
						className="w-8 h-5"
					/>
				) : null}
			</div>
		</div>
	);
};

export default DriverCard;
