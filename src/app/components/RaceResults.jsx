"use client";
import { useQuery, useQueries } from "@tanstack/react-query";
import fetchOpenF1 from "../utils/fetchOpenF1";
import RaceResultCard from "./ui/RaceResultCard";

const RaceResults = () => {
	// Get the year so we can display the races for the current year
	const today = new Date();
	const year = today.getFullYear();

	// Make request to get all meetings data, so we can get the session key of the race
	const {
		data: sessionData = [],
		sessionsLoading,
		sessionsError,
	} = useQuery({
		queryKey: ["sessions", `year=${year}&session_type=Race`],
		queryFn: fetchOpenF1,
		staleTime: 1000 * 60 * 5,
		retry: (failureCount, error) =>
			error.status === 429 && failureCount < 3,
		retryDelay: (attempt) => Math.pow(2, attempt) * 1000,
	});
	// Loading/error logic to prevent the next request erroring out because it doesn't have data
	if (sessionsLoading) return <p>Loading sessions...</p>;
	if (sessionsError) return <p>Error loading sessions...</p>;

	console.log(sessionData);
	var raceData = sessionData;

	const lapsQueries = useQueries({
		queries: raceData.map((race) => ({
			queryKey: ["laps", `session_key=${race.session_key}`],
			queryFn: fetchOpenF1,
		})),
	});
	const lapsLoading = lapsQueries.some((query) => query.isLoading);
	const lapsError = lapsQueries.some((query) => query.isError);

	if (lapsLoading) return <p>Loading Laps...</p>;
	if (lapsError) return <p>Error loading Laps...</p>;

	console.log(lapsQueries);
	raceData = raceData.map((meeting, index) => {
		const lapData = lapsQueries[index].data || [];
		const highestLapNum = Math.max(
			...lapData.map((lap) => lap.lap_number),
			0
		);

		const finalLaps = lapData.filter(
			(lap) => lap.lap_number === highestLapNum
		);

		const winner = finalLaps.reduce((prev, current) => {
			const prevFinishTime =
				new Date(prev.date_start).getTime() + prev.lap_duration * 1000;
			const curFinishTime =
				new Date(current.date_start).getTime() +
				current.lap_duration * 1000;

			return curFinishTime < prevFinishTime ? current : prev;
		});

		return { ...meeting, winner };
	});

	return (
		<div className="grid grid-cols-1 px-2">
			{/* Create a RaceResultCard for each Race */}
			{raceData.map((race) => (
				<RaceResultCard key={race.session_key} race={race} />
			))}
		</div>
	);
};

export default RaceResults;
