import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, title, id, info, glass }) => {
	return (
		<div className="cocktail">
			<div className="img-container">
				<img src={image} alt={title} />
			</div>
			<div className="cocktail-footer">
				<h3>{title}</h3>
				<h4>{glass}</h4>
				<p>{info}</p>
				<Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
					Details
				</Link>
			</div>
		</div>
	);
};

export default Cocktail;
