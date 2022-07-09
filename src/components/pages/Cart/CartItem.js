import React from "react";
import { useGlobalContext } from "../../context";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import StripeCheckout from "react-stripe-checkout";

const CartItem = () => {
	const {
		clear_cart,
		total,
		cart,
		increase,
		reduce,
		remove_from_cart,
	} = useGlobalContext();

	if (cart.length === 0) {
		return <h2 className="section-title space-top">Cart Empty!</h2>;
	}

	const handleToken = (token) => {
		//console.log({ token });
	};

	return (
		<div className="cartI-all space-top">
			{cart.map((item) => {
				const { id, image, price, title, amount } = item;
				return (
					<div key={id} className="cartI">
						<img className="cartI-img" src={image} alt="item" />
						<div className="cartI-second">
							<h3>{title}</h3>
							<h3 className="cartI-p">${price}</h3>
							<button onClick={() => remove_from_cart(id)}>remove</button>
						</div>
						<div className="cartI-second cartI-third">
							<button
								onClick={() => {
									increase(id, amount, price);
								}}
							>
								<BsPlus />
							</button>
							<span>{amount}</span>
							<button
								onClick={() => {
									reduce(id, amount, price);
								}}
							>
								<FiMinus />
							</button>
						</div>
					</div>
				);
			})}

			<section className="cart-total cartI">total= ${total}</section>
			<div className="cart-btns">
				<button className="cartI cart-btn-clear" onClick={clear_cart}>
					clear cart
				</button>
				<StripeCheckout
					className="cartI cart-btn-checkout"
					stripeKey="pk_test_51LJRV0CBBsy8TG2HJ8NzSmgy0EOB2ILiSRuATjreNcL1v3Ko2jkFdvmUt2qtfob0LolyqA4iZTHgkYgeCoIXUA5j00C7n2QmOV"
					token={handleToken}
					amount={total * 100}
					shippingAddress
					billingAddress
					name="Your Menu"
				/>
			</div>
		</div>
	);
};

export default CartItem;
