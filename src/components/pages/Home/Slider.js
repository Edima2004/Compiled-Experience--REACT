import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import { reviews } from "../../data";

const Slider = () => {
	const { openSideMenu } = useGlobalContext()

	const [index, setIndex] = useState(0);
	// eslint-disable-next-line no-unused-vars
	const [people, setPeople] = useState(reviews[index]);

	const checkNum = (num) => {
		if (num > reviews.length - 1) {
			return 0;
		}
		if (num < 0) {
			return reviews.length - 1;
		}

		return num;
	};

	const prev = () => {
		setIndex((index) => {
			let newNum = index - 1;
			return checkNum(newNum);
		});
	};
	const next = () => {
		setIndex((index) => {
			let newNum = index + 1;
			return checkNum(newNum);
		});
	};

	useEffect(() => {
		let interval = setInterval(() => {
			setIndex(checkNum(index + 1));
		}, 3000);
		return () => {
			clearInterval(interval);
		};
	}, [index]);

	return (
		<section className={`review-section ${openSideMenu && 'zindex'}`}>
			{reviews.map((person, personIndex) => {
				const { id, name, image, text } = person;

				let position = "nextSlide";
				if (personIndex === index) {
					position = "activeSlide";
				}
				if (
					person.index === index - 1 ||
					(index === 0 && person.index === people.length - 1)
				) {
					position = "prevSlide";
				}
				return (
					<article key={id} className={position}>
						<div className="review-container">
							<button className="quote">
								<FaQuoteRight />
							</button>
							<img className="review-img" src={image} alt={name} />
							<div className="review-name">{name}</div>
							<p className="review-text">{text} </p>
							<button className="btn btn-left" onClick={prev}>
								<FaChevronLeft />
							</button>
							<button className="btn btn-right" onClick={next}>
								<FaChevronRight />
							</button>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Slider;
