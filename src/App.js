import { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
	const [birthday, setBirthday] = useState(data);
	return (
		<main>
			<section className="container">
				<h3>5 people have birthdays today</h3>
				<List people={birthday} />
				<button onClick={() => console.log("you clicked me")}>Clear All</button>
			</section>
		</main>
	);
}

export default App;
