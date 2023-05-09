import { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
	const [birthday, setBirthday] = useState(data);
	return (
		<main>
			<section className="container">
				<h3>{birthday.length} people have birthdays today</h3>
				<List people={birthday} />
				<button onClick={() => setBirthday([])}>Clear All</button>
			</section>
		</main>
	);
}

export default App;
