import React from "react";
import Loading from "./Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
	const { add_to_cart } = useGlobalContext();
	const { id } = useParams();
	const [loading, setLoading] = React.useState(false);
	const [cocktail, setCocktail] = React.useState(null);

	React.useEffect(() => {
		setLoading(true);
		const getCocktail = async () => {
			try {
				const response = await fetch(`${url}${id}`);
				const data = await response.json();
				if (data.drinks) {
					const {
						strDrink: title,
						strDrinkThumb: img,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						strInstructions: instructions,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					} = data.drinks[0];
					const ingredients = [
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					];
					const newCocktail = {
						title,
						img,
						info,
						category,
						glass,
						instructions,
						ingredients,
					};
					setCocktail(newCocktail);
				} else {
					setCocktail(null);
				}
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};
		getCocktail();
	}, [id]);

	if (loading) {
		return <Loading />;
	}
	if (!cocktail) {
		return <h2 className="section-title">no cocktail to display</h2>;
	}
	const { title, img, info, category, glass, instructions, ingredients } =
		cocktail;
		const price = 15.99;
	return (
		<section className="section cocktail-section space-top">
			<Link to="/cocktails" className="btn btn-primary">
				back
			</Link>
			<h2 className="section-title">{title} </h2>
			<div className="drink">
				<img className="single-cock-img" src={img} alt={title} />
				<div className="drink-info">
					<p>
						<span className="drink-data">name :</span>
						{title}
					</p>
					<p>
						<span className="drink-data">category :</span>
						{category}
					</p>
					<p>
						<span className="drink-data">info :</span>
						{info}
					</p>
					<p>
						<span className="drink-data">glass :</span>
						{glass}
					</p>
					<p>
						<span className="drink-data">instructions :</span>
						{instructions}
					</p>
					<p>
						<span className="drink-data">Price: </span>${price}
					</p>
					<p>
						<span className="drink-data">ingredients :</span>
						{ingredients.map((ingredient, index) => {
							return ingredient ? <span key={index}>{ingredient}</span> : null;
						})}
					</p>
					<button
						className="add-cart menu-cart menu-cart1 cock-btn"
						onClick={() => add_to_cart(id, img,  price, title,)}
					>
						Add to cart
					</button>
				</div>
			</div>
		</section>
	);
};

export default SingleCocktail;
