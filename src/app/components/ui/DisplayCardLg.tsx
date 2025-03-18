"use client";
import { useQuery } from "@tanstack/react-query";

async function fetchAPI() {
	const res = await fetch(
		"https://api.openf1.org/v1/intervals?results=latest"
	);
	if (!res.ok) throw new Error("Failed to fetch");
	return res.json();
}

interface DisplayCardLgProps {}

const DisplayCardLg = () => {
	const {
		data: resData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["data"],
		queryFn: fetchAPI,
		gcTime: 0,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error fetching data</p>;
	console.log(resData);

	return <div>hi</div>;
};

export default DisplayCardLg;
