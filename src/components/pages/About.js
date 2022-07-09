import React from "react";
import Footer from "./Home/Footer";

const About = () => {
	return (
		<div>
			<div className="about space-top">
				<h2>
					<u>About Us</u>
				</h2>
				<p className="about-p">
					A brief info about the site are as follows:
					<br />
					<p>
						Hello dearest user 😊, a couple of clicks and scrolls must have
						revealed, that while most of the site has been completely built,
						only a few sections remain to be updated.
						Majorly, the <b>review section </b> 
						<b>dark mode</b> and <b>a tinny bit of backend implementation</b>.
					</p>
					<p>
						Well, I wouldn't want to bore you with the full details of what will
						be done but generally, the random words in the <u>review section </u> will be replaced with{" "}
						<u>meaningful text</u> and a backend will be created to reduce drag on the site <b>Jumia</b>
					</p>
					<p>That being said, have a splendid user experience 😉😉</p>
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default About;
