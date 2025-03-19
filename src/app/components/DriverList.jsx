"use client";
import { useQuery } from "@tanstack/react-query";

import DriverCard from "./ui/DriverCard";

import fetchOpenF1 from "../utils/fetchOpenF1";

const DriverList = () => {
	const {
		data: driverData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["drivers", "session_key=latest"],
		queryFn: fetchOpenF1,
	});
	const sortedDrivers = driverData
		? driverData.sort((driverA, driverB) =>
				driverA.team_name.localeCompare(driverB.team_name)
		  )
		: [];

	if (isLoading) return <p>Loading Drivers...</p>;
	if (error) return <p>Error fetching data for drives</p>;
	//console.table(driverData);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 px-2">
			{sortedDrivers.map((driver) => (
				<DriverCard key={driver.driver_number} driver={driver} />
			))}
		</div>
	);
};

export default DriverList;
