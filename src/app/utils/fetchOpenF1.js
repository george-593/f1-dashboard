//Util function called by react-query to fetch openF1 data
const fetchOpenF1 = async ({ queryKey }) => {
	const [endpoint, params] = queryKey;
	const res = await fetch(`https://api.openf1.org/v1/${endpoint}?${params}`);
	if (!res.ok) throw new Error("Failed to fetch");
	return res.json();
};

export default fetchOpenF1;
