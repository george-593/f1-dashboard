const DriverCard = ({ driver }) => {
	return (
		<div className={`bg-[#${driver.team_colour}]`}>{driver.full_name}</div>
	);
};

export default DriverCard;
