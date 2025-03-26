"use client";

const NumberInput = ({ label, value, onChange, min, max, placeholder }) => {
	return (
		<div className="flex items-center">
			<h2 className="font-bold mx-2 my-1 text-lg">{label}</h2>
			<input
				type="number"
				className="bg-white rounded-md text-black text-center"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				min={min}
				max={max}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default NumberInput;
