import React from "react";
import Footer from "./Home/Footer";

const About = () => {
	return (
		<div>
			<div className="about space-top">
				<h2>
					<u>About Us</u>
				</h2>
				<p className="about-p">Hello, i'm glad you are here. <p>I'm Vincent-Thompson Edima a Professional React Frontend Developer with over 3 years of experience in the field.</p></p>
				<p className="about-p">
					A brief info about the site goes thus:
					<br />
					<p>
						Hello once again dearest user 😊, a couple of clicks and scrolls must have
						revealed, that while most of the site has been fully built,
						only a few sections remain to be updated.
						<p>
							Majorly,the <b>review section</b>,
							<b> dark mode</b> and <b>a tiny bit of backend implementation</b>.
						</p>
					</p>
					<p>
						Well, I wouldn't want to bore you with the full details of what will
						be done but generally, the random words in the <u>review section and menu description </u> will be replaced with{" "}
						<u>meaningful text</u> and backend will be created to reduce drag on the web app.
					</p>
					<p>One last thing, the "pay with card" button leads to a checkout page but doesn't actually take your money. I've tried it, so no worries😂😏. However, here are a few test data you can use to keep your mind at ease:
						<p>
							<b>Card Number:</b> 4242424242424242<br/>
							<b>CVC:</b> 123
						</p>
					</p>
					<p>That being said, have a splendid user experience 😉.</p>
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default About;
