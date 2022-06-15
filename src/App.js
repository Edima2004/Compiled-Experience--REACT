import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/pages/FirstPage";
import Navbar from "./components/Navbar";
import Menu from "./components/pages/Menu";
import ErrorPage from "./components/pages/ErrorPage";
import About from "./components/pages/About";
import SideMenu from "./components/pages/SideMenu";
import { useGlobalContext } from "./components/context";
import CompiledTest from "./components/pages/CompiledCocktail";
import SingleCocktail from "./components/pages/SingleCocktail";
import Cart from "./components/pages/Cart";

function App() {
	const { openSideMenu, cartMsg } = useGlobalContext();

	return (
		<>
			<Navbar />
			{cartMsg ? <Cart /> : ""}
			{openSideMenu && <SideMenu />}
			<Router>
				<Routes>
					<Route path="/" element={<FirstPage />} />
					<Route path="/Food" element={<Menu />} />
					<Route path="/Cocktails" element={<CompiledTest />} />
					<Route path="*" element={<ErrorPage />} />
					<Route path="/cocktail/:id" element={<SingleCocktail />} />
					<Route path="/Cart" element={<Cart />} />
					<Route path="/About" element={<About />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
