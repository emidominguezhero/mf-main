import { Button } from "remote/Button";

export function App(): JSX.Element {
	return (
		<main className="main">
			<h1>Module Federation v2</h1>

			<Button className="button" onClick={() => alert("Clicked the button!")}>
				Click me
			</Button>
		</main>
	);
}
