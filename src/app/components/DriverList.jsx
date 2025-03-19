"use client";
import { useQuery } from "@tanstack/react-query";

import DriverCard from "./ui/DriverCard";

const fetchAPI = async ({ queryKey }) => {
	const [endpoint, params] = queryKey;
	const res = await fetch(`https://api.openf1.org/v1/${endpoint}?${params}`);
	if (!res.ok) throw new Error("Failed to fetch");
	return res.json();
};

const DriverList = () => {
	const {
		data: driverData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["drivers", "session_key=latest"],
		queryFn: fetchAPI,
	});

	if (isLoading) return <p>Loading Drivers...</p>;
	if (error) return <p>Error fetching data for drives</p>;
	//console.table(driverData);

	return (
		<div className="">
			{driverData.map((driver) => (
				<DriverCard key={driver.driver_number} driver={driver} />
			))}
		</div>
	);
};

export default DriverList;
