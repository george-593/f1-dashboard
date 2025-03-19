import DriverList from "./components/DriverList";

export default function Home() {
	return (
		//Split the screen into 2 halves
		<div className="flex h-screen justify-evenly">
			<div>
				{/* Driver List */}
				<DriverList />
			</div>
			<div>{/* Race List and Info */}</div>
		</div>
	);
}
