import React from "react";
import Categories from "../Categories";
import { useGlobalContext } from "../context";

const Menu = () => {
	// eslint-disable-next-line no-unused-vars
	const { menuItems, add_to_cart } =
		useGlobalContext();
	return (
		<div>
			<h1 className="head-menu navbar-full">Our Menu</h1>
			<Categories />

			<div className="all-menu">
				{menuItems.map((menu) => {
					const { id, desc, title, price, img } = menu;
					return (
						<div className="main-menu" key={id}>
							<section className="menu">
								<img className="menu-img" src={img} alt={title} />
								<div className="sub-menu">
									<p className="menu-price">${price}</p>
									<p className="menu-title">{title} </p>
									<br />
									<p className="menu-desc">
										<span className="desc">Description: </span>
										{desc}
									</p>
									<br />
									<div className="cart_btns">
										 
											<button
												className="add-cart menu-cart menu-cart1"
												onClick={() => add_to_cart(id, img, price, title)}
											>
												Add to cart
											</button>
										 {/*{changeBtn && (
											<button 
												className="add-cart menu-cart menu-cart2"
												onClick={()=>remove_from_cart(id)}
											>
												Delete from cart
											</button>
										)}*/}
									</div>
								</div>
							</section>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Menu;
