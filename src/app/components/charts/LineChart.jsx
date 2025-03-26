"use client";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const LineChart = ({ xLabel, yLabel, datasets }) => {
	// The data (lines) to be displayed in the chart
	const data = {
		labels: [1, 2, 3, 4, 5],
		datasets: [
			{
				label: "Dataset 1 Label",
				data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				fill: false,
				borderColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
			// more datasets
		],
	};

	// Configuration for chart
	const options = {
		scales: {
			y: {
				title: {
					display: true,
					text: "Lap Time",
				},
				display: true,
				min: 1,
			},
			x: {
				title: {
					display: true,
					text: "Lap Number",
				},
				display: true,
			},
		},
	};

	return (
		<div className="w-full mx-auto">
			<Line data={data} options={options} />
		</div>
	);
};

export default LineChart;
