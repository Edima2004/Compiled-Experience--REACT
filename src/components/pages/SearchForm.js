import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	const refContainer = useRef("");

	const refValue = () => {
		setSearchTerm(refContainer.current.value);
	};

	useEffect(() => {
		refContainer.current.focus();
	}, []);
	return (
		<section className="section search">
			<form action="" className="search-form">
				<div className="form-control">
					<input
						type="text"
						placeholder="search for your favorite cocktail"
						ref={refContainer}
						onChange={refValue}
						onSubmit={(e) => {
							e.preventDefault();
						}}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
