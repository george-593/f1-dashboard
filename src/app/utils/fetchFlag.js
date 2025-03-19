//Util function called by react-query to fetch flag data*/
const fetchFlag = async ({ queryKey }) => {
	const [countryCode] = queryKey;
	const res = await fetch(
		`https://restcountries.com/v3.1/alpha/${countryCode}?fields=flags`
	);
	if (!res.ok) throw new Error("Failed to fetch");
	return res.json();
};

export default fetchFlag;
