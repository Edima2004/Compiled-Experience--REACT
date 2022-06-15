import React, {
	useContext,
	useState,
	useEffect,
	useCallback,
	useReducer,
} from "react";
import { menu } from "./data";
import reducer from "../components/Reducer";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

//?json server 1
const getLocalStorage = () => {
	let list = localStorage.getItem("quantity");
	if (list) {
		return JSON.parse(localStorage.getItem("quantity"));
	} else {
		return [];
	}
};

const AppProvider = ({ children }) => {
	//?Cart--UseReducer
	const initialState = {
		cart: [],
		quantity: getLocalStorage(),
		message: "",
		icon: "",
		color: "",
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const [cartMsg, setCartMsg] = useState(false);

	useEffect(() => {
		const timeCartMsg = setTimeout(() => {
			setCartMsg(false);
		}, 5000);

		return () => {
			clearTimeout(timeCartMsg);
		};
	}, [state]);

	const closeCartMsg = () => {
		setCartMsg(false);
	};

	const clear_cart = (e) => {
		e.preventDefault();
		setCartMsg(true);
		dispatch({ type: "CLEAR_ALL" });
	};

	const add_to_cart = (e) => {
		e.preventDefault();
		setCartMsg(true);
		dispatch({ type: "ADD_TO_CART" });
	};

	const remove_from_cart = (id) => {
		setCartMsg(true);
		dispatch({ type: "DELETE_ITEM", payload: id });
	};

	//? json server2
	useEffect(() => {
		localStorage.setItem("quantity", JSON.stringify(state.quantity));
	}, [state]);

	//?Cocktails
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("a");
	const [cocktails, setCocktails] = useState([]);

	const fetchDrinks = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json();
			const { drinks } = data;

			if (drinks) {
				const newCocktails = drinks.map((item) => {
					const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
						item;
					return {
						id: idDrink,
						name: strDrink,
						img: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					};
				});
				setCocktails(newCocktails);
			} else {
				setCocktails([]);
			}
			setLoading(false);
		} catch (error) {
			//console.log("error");
			setLoading(false);
		}
	}, [searchTerm]);

	useEffect(() => {
		fetchDrinks();
	}, [searchTerm, fetchDrinks]);

	//?Dark mode
	const [darkMode, setDarkMode] = useState(false);
	const darkMd = () => {
		setDarkMode(true);
	};
	const lightMd = () => {
		setDarkMode(false);
	};
	const changeMode = () => {
		setDarkMode(!darkMode);
	};

	//?Error message
	const [openErrorMsg, setOpenErrorMsg] = useState(false);

	const openErrMsg = () => {
		setOpenErrorMsg(true);
	};

	useEffect(() => {
		const closeEMsg = setTimeout(() => {
			setOpenErrorMsg(false);
		}, 5000);

		return () => {
			clearTimeout(closeEMsg);
		};
	}, [openErrorMsg]);

	//?SubMenu
	const [openSideMenu, setOpenSideMenu] = useState(false);
	const openSMenu = () => {
		setOpenSideMenu(!openSideMenu);
	};
	const closeSMenu = () => {
		setOpenSideMenu(!openSideMenu);
	};

	//?Menu
	const allCategories = ["all", ...new Set(menu.map((menu) => menu.category))];
	const [menuItems, setMenuItems] = useState(menu);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === "all") {
			setMenuItems(menu);
			return;
		}
		const newItems = menu.filter((menu) => menu.category === category);
		setMenuItems(newItems);
	};

	return (
		<AppContext.Provider
			value={{
				menuItems,
				categories,
				setMenuItems,
				setCategories,
				filterItems,
				openSideMenu,
				setOpenSideMenu,
				openSMenu,
				closeSMenu,
				openErrMsg,
				openErrorMsg,
				loading,
				setSearchTerm,
				cocktails,
				darkMode,
				darkMd,
				lightMd,
				changeMode,
				...state,
				add_to_cart,
				remove_from_cart,
				clear_cart,
				cartMsg,
				setCartMsg,
				closeCartMsg,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
