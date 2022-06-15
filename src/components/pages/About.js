import React from "react";
import Footer from "../Footer";

const About = () => {
	return (
		<div>
			<div className="about">
				<h2>
					<u>About Us</u>
				</h2>
				<p className="about-p">
					A brief info about the site are as follows:
					<br />
					<p>
						Hello dearest user 😊, a couple of clicks and scrolls must have
						revealed, that while most of the site has been completely built,
						only a few components are near to completion or not yet implemented.
						Such as: the <b>cart component </b> the presence of{" "}
						<b>random words</b> and <b>dark mode</b>.
					</p>
					<p>
						Well, I wouldn't want to bore you with the full details of what will
						be done but generally, the <u>random words</u> will be replaced with{" "}
						<u>meaningful text</u> and the cart component will be fully built
						having more functions enabling you to delete specific cart items,
						and other functions in similar apps like <b>Jumia</b>
					</p>
					<p>That being said, have a splendid user experience 😉😉</p>
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default About;
