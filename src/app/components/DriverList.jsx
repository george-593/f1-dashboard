"use client";
import { useQuery } from "@tanstack/react-query";

import DriverCard from "./ui/DriverCard";
import fetchOpenF1 from "../utils/fetchOpenF1";

const DriverList = () => {
	{
		/* Using react-query as it has automatic caching to reduce the amount of API calls*/
	}
	const {
		data: driverData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["drivers", "session_key=latest"],
		queryFn: fetchOpenF1,
	});
	{
		/* Sort the drivers by team name so that teammates are next to eachother*/
	}
	const sortedDrivers = driverData
		? driverData.sort((driverA, driverB) =>
				driverA.team_name.localeCompare(driverB.team_name)
		  )
		: [];

	{
		/* Prevents errors if the data is still loading or errors out */
	}
	if (isLoading) return <p>Loading Drivers...</p>;
	if (error) return <p>Error fetching data for drives</p>;

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 px-2">
			{/* Create a DriverCard for each driver */}
			{sortedDrivers.map((driver) => (
				<DriverCard key={driver.driver_number} driver={driver} />
			))}
		</div>
	);
};

export default DriverList;
