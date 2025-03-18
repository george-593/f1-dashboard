import DisplayCardLg from "./components/ui/DisplayCardLg";

export default function Home() {
	return (
		//Split the screen into 2 halves
		<div className="flex h-screen justify-evenly">
			<div>
				{/* Previous Race Results */}
				<DisplayCardLg />
			</div>
			<div>{/*Championship Standings*/}</div>
		</div>
	);
}
