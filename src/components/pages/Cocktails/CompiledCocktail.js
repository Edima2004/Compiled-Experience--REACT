import React from "react";
import CompleteCocktail from "./CompleteCocktail";
import SearchForm from "./SearchForm";

const Compiled = () => {
	return (
		<div className="space-top">
			<SearchForm />
			<CompleteCocktail />
		</div>
	);
};

export default Compiled;
