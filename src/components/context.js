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
		return [];//! null
	}
};
//?json server 2 cart
const getLocalStorageCart = () => {
	let item = localStorage.getItem("cart");
	if (item) {
		return JSON.parse(localStorage.getItem("cart"));
	} else {
		return [];
	}
};

const AppProvider = ({ children }) => {
	//? Cart Item
	const [cartItem, setCartItem] = useState(getLocalStorageCart([]));

	//?CartMsg--UseReducer
	const initialState = {
		cart: cartItem,
		quantity: getLocalStorage() || 0,//! possible bug
		message: "",
		icon: "",
		color: "",
		total: 0,
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const [cartMsg, setCartMsg] = useState(false);
	const [changeBtn, setChangeBtn] = useState(false);

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
		setChangeBtn(false);
		setCartItem([]);
		setCartMsg(true);
		dispatch({ type: "CLEAR_ALL" });
	};
	const remove_from_cart = (id) => {
		dispatch({ type: "DELETE_ITEM", payload: id, });
	};
	const increase = (id, price) => {
		dispatch({ type: "INCREASE", payload: id, payload2: price });
	};
	const reduce = (id, price) => {
		dispatch({ type: "REDUCE", payload: id, payload2: price });
	};
	//Get Total
	useEffect(() => {
		dispatch({ type: "GET_TOTALS" });
	}, [state.cart]);

	const add_to_cart = (id, img, price, title) => {
		const newItem = {
			id: id,
			image: img,
			price: price,
			title: title,
			amount: 1,
		};

		setChangeBtn(true);
		setCartMsg(true);
		setCartItem([...cartItem, newItem]);
		dispatch({ type: "ADD_TO_CART" });
		if (cartItem.some((item1) => item1.title === title)) {
			setCartItem([...cartItem]);
			console.log(cartItem);
			dispatch({ type: "ITEM_PRESENT" });
		}
	};

	//? json server2
	useEffect(() => {
		localStorage.setItem("quantity", JSON.stringify(state.quantity));
	}, [state]);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItem));
	}, [cartItem]);

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
						title: strDrink,
						image: strDrinkThumb,
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
			setLoading(false);
		}
	}, [searchTerm]);

	useEffect(() => {
		fetchDrinks();
	}, [searchTerm, fetchDrinks]);

	//?Dark mode
	const [darkMode, setDarkMode] = useState();
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
				cartItem,
				changeBtn,
				increase,
				reduce,
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
