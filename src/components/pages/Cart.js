import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";

const Cart = () => {
	const { color, message, icon, closeCartMsg } = useGlobalContext();

	return (
		<div>
			<div className="cart-message">
				<p>
					<span className={`cartmsg-${color}`}>{icon}</span> {message}
				</p>
            <button className="close-sidemenu cart-exit-btn" onClick={closeCartMsg}>
				<FaTimes />
			</button>
			</div>
			
		</div>
	);
};

export default Cart;
