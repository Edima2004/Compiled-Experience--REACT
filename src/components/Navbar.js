import { NavData } from "./data";
import { FaBars, FaTrash } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const Navbar = () => {
	const { openSMenu, quantity, clear_cart } = useGlobalContext();
	return (
		<div className="navbar">
			{NavData.map((nav) => {
				const { id, name, link, icon } = nav;
				return (
					<nav className="nav-content" key={id}>
						<a className="nav-item" href={link}>
							<aside>{icon}</aside>
							<span>{name}</span>
						</a>
					</nav>
				);
			})}
			<div className="all-cart">
				<div>
					<button className="cart">
						<a href="/CartItem">
							<TiShoppingCart />
						</a>
					</button>
				</div>

				{quantity > 0 && (
					<div>
						<p className="cart-quantity">{quantity}</p>
						<button className="trash" onClick={clear_cart}>
							<FaTrash />
						</button>
					</div>
				)}
			</div>
			<button className="fabars" onClick={openSMenu}>
				<FaBars />
			</button>
		</div>
	);
};

export default Navbar;
