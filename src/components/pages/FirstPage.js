import React from "react";
import Footer from "./Home/Footer";
import HomeContent from "./Home/HomeContent";

import Slider from "./Home/Slider";

const FirstPage = () => {
	return (
		<div className=" first-page ">
			<HomeContent />
			<Slider />
			<Footer />
		</div>
	);
};

export default FirstPage;
