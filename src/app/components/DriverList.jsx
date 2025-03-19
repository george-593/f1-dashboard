"use client";
import { useQuery } from "@tanstack/react-query";

import DriverCard from "./ui/DriverCard";

async function fetchAPI({ queryKey }) {
	const [endpoint, params] = queryKey;
	const res = await fetch(`https://api.openf1.org/v1/${endpoint}?${params}`);
	if (!res.ok) throw new Error("Failed to fetch");
	return res.json();
}

const DriverList = () => {
	const {
		data: driverData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["drivers", "session_key=latest"],
		queryFn: fetchAPI,
		gcTime: 0,
	});

	if (isLoading) return <p>Loading Drivers...</p>;
	if (error) return <p>Error fetching data for drives</p>;
	console.table(driverData);

	return (
		<div>
			{driverData.map((driver) => {
				<DriverCard driver={driver} />;
			})}
			hi
		</div>
	);
};

export default DriverList;
