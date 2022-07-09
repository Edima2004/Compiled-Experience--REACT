import { BsExclamationLg, BsCheckLg } from "react-icons/bs";

const Reducer = (state, action) => {
	if (action.type === "CLEAR_ALL") {
		return {
			...state,
			cart:[],
			icon: <BsExclamationLg />,
			color: "danger",
			message: "cart cleared",
			quantity: 0,
		};
	}
	if (action.type === "ITEM_PRESENT") {
		return {
			...state,
			icon: <BsExclamationLg />,
			color: "danger",
			message: "item is already in cart",
			quantity: state.quantity - 1,
		};
	}

	//! test
	if (action.type === "DELETE_ITEM") {
		return {
			...state,
			quantity: state.quantity - 1,
			cart: state.cart.filter((item) => item.id !== action.payload),
		};
	}

	if (action.type === "INCREASE") {
		let tempCart = state.cart.map((cartItem) => {
			if (cartItem.id === action.payload) {
				return {
					...cartItem,
					amount: cartItem.amount + 1,
					//price: cartItem.price * cartItem.amount,
				};
			}
			return cartItem;
		});
		return { ...state, cart: tempCart };
	}

	if (action.type === "REDUCE") {
		let tempCart = state.cart
			.map((cartItem) => {
				if (cartItem.id === action.payload) {
					return {
						...cartItem,
						amount: cartItem.amount - 1,
						//price: cartItem.price * cartItem.amount,
					};
				}
				return cartItem;
			})
			.filter((cartItem) => cartItem.amount !== 0);

		return { ...state, cart: tempCart };
	}
	//


	if (action.type === "ADD_TO_CART") {
		return {
			...state,
			message: "item added to cart",
			icon: <BsCheckLg />,
			color: "success",
			quantity: state.quantity + 1,
		};
	}
	if (action.type === "GET_TOTALS") {
		let { total, amount } = state.cart.reduce(
			(cartTotal, cartItem) => {
				const { price, amount } = cartItem;
				const itemTotal = price * amount;

				cartTotal.total += itemTotal;
				cartTotal.amount += amount;
				return cartTotal;
			},
			{
				total: 0,
				amount: 0,
			}
		);
		total = parseFloat(total.toFixed(2));

		return { ...state, total, amount };
	}
};

export default Reducer;
