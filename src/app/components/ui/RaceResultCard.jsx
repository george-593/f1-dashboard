import DriverCard from "./DriverCard";
import fetchOpenF1 from "../../utils/fetchOpenF1";
import { useQuery } from "@tanstack/react-query";

const RaceResultCard = ({ _, race }) => {
	{
		/* This request will be cached as we have just called it in DriverList (on load)*/
	}
	const {
		data: driverData,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["drivers", "session_key=latest"],
		queryFn: fetchOpenF1,
	});
	const driver = driverData.find(
		(driver) => driver.driver_number === race.winner.driver_number
	);

	console.log(race);
	return (
		<div className="py-2 px-4 rounded-lg my-2 flex mx-2 bg-f1-black text-white flex-col">
			<h1 className="font-bold text-xl">
				{race.country_name} - {race.circuit_short_name}
			</h1>
			<h2 className="font-black text-lg my-1"> {race.session_name}</h2>
			<h3>Winner:</h3>
			<div>
				<DriverCard driver={driver} />
			</div>
		</div>
	);
};

export default RaceResultCard;
