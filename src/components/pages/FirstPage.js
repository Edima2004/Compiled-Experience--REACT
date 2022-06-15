import React from "react";
import Footer from "../Footer";
import HomeContent from "../HomeContent";

import Slider from "./Slider";

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
