import "./App.css";
import Sidebar from "./components/Sidebar";
import Teams from "./pages/Teams"

function App() {
	return (
		<div className="App">
			<Sidebar children={<Teams />} />
		</div>
	);
}

export default App;
