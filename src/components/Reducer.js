import React from "react";
import { BsExclamationLg, BsCheckLg } from "react-icons/bs";

const Reducer = (state, action) => {
	if (action.type === "CLEAR_ALL") {
		return {
			...state,
			cart: [],
			icon: <BsExclamationLg />,
			color: "danger",
			message: "cart cleared",
			quantity: 0,
		};
	}

	if (action.type === "DELETE_ITEM") {
		return {
			...state,
			message: "item deleted",
			icon: <BsExclamationLg />,
			color: "danger",
			cart: state.cart.filter((cartItem) => cartItem !== state.payload),
		};
	}

	if (action.type === "ADD_CART") {
		const newCart = {};
		return {
			...state,
			newCart,
		};
	}
	if (action.type === "ADD_TO_CART") {
		return {
			...state,
			message: "item added to cart",
			icon: <BsCheckLg />,
			color: "success",
			quantity: state.quantity + 1,
		};
	}
};

export default Reducer;
