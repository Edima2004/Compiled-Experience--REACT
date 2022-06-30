import React from "react";

const Reducer2 = (state, action) => {
	if (action.type === "INCREASE_CART") {
		let tempCart = state.cart.map((item) => {
			if (item.title === action.payload) {
				return { ...item, amount: item.amount + 2 };
			}
			return item;
		});
		return { ...state, cart: tempCart };
	}
	if (action.type === "DELETE_ITEM") {
		return {
			...state,
			quantity: state.quantity - 1,
			cart: state.cart.filter((item) => item.id !== action.payload),
		};
	}
};

export default Reducer2;
