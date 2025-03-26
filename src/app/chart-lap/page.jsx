"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import fetchOpenF1 from "../utils/fetchOpenF1";

import LineChart from "../components/charts/LineChart";
import NumberInput from "../components/inputs/NumberInput";

export default function Page() {
	const today = new Date();
	const currentYear = today.getFullYear();

	const [year, setYear] = useState(currentYear || 2025);
	const [round, setRound] = useState(1);
	const [driverNumber, setDriverNumber] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();
		{
			/* Make a call to meetings API so we can get a meeting key for the round we want*/
		}
		const {
			data: meetingsData = [],
			meetingsLoading,
			meetingsError,
		} = useQuery({
			queryKey: ["meetings", `year=${year}`],
			queryFn: fetchOpenF1,
		});

		{
			/* Make a call to sessions API to get the session key of the race we want laps for*/
		}
	};

	return (
		<div className="flex flex-col items-center">
			<form
				className="flex flex-col items-center my-4 bg-f1-black text-white p-2 rounded-lg px-20 py-4"
				onSubmit={handleSubmit}
			>
				{/* Min year set as 2023 as openF1 currently only has data 2023 onwards*/}
				<NumberInput
					label="Select year:"
					value={year}
					onChange={setYear}
					min={2023}
					max={currentYear}
					placeholder={year}
				/>
				<NumberInput
					label="Select Round:"
					value={round}
					onChange={setRound}
					min={1}
					max={100}
					placeholder={round}
				/>
				{/* TODO: Select session type as well*/}
				{/* TODO: be a clickable list of all drivers present in that round*/}
				<NumberInput
					label="Select Driver Number:"
					value={driverNumber}
					onChange={setDriverNumber}
					min={1}
					max={100}
					placeholder={driverNumber}
				/>
				<button
					className="my-4 px-10 py-2 bg-white hover:bg-f1-red text-black hover:text-white rounded-md transition cursor-pointer"
					type="submit"
				>
					Submit
				</button>
			</form>
			<LineChart
				xLabel="xLabel"
				yLabel="yLabel"
				datasets={[1, 2, 3, 4, 5, 6]}
			/>
		</div>
	);
}
