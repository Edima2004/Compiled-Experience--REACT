import React from "react";
import { useGlobalContext } from "./context";

const Categories = () => {
	const { filterItems, categories} = useGlobalContext();

	return (
		<div className="top-menu">
			{categories.map((category, index) => {
				return (
					<button
						className="btn-menu"
						key={index}
						onClick={() => filterItems(category)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
