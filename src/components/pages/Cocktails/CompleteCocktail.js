import React from "react";
import Cocktail from "./Cocktails";
import Loading from "./Loading";
import { useGlobalContext } from "../../context";

const CocktailList = () => {
	const { cocktails, loading } = useGlobalContext();

	if (loading) {
		return <Loading />;
	}
	if (cocktails.length === 0) {
		return <h2 className="section-title">No cocktails match your search</h2>;
	}
	return (
		<section className="section">
			<h2 className="section-title">Cocktails</h2>

			<div className="cocktails-center">
				{cocktails.map((item) => {
					return <Cocktail key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
};

export default CocktailList;
