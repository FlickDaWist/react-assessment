import Navigation from "./components/Navigation";
import Home from "./components/Home";
import "./assets/styles/index.css";
import Footer from "./components/Footer";
function App() {
	return (
		<div className="bg-gray-100">
			<Navigation></Navigation>
			<Home></Home>
			<Footer></Footer>
		</div>
	);
}

export default App;
