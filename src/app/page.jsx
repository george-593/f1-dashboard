import DriverList from "./components/DriverList";

export default function Home() {
	return (
		//Split the screen into 2 halves
		<div className="h-screen grid md:grid-cols-2 grid-cols-1 mx-auto">
			<div>
				{/* Driver List */}
				<DriverList />
			</div>
			<div>{/* Race List and Info */}Race List</div>
		</div>
	);
}
