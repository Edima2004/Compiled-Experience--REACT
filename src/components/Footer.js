import React from "react";
import { Link } from "react-router-dom";
import { social } from "./data";

const Footer = () => {
	return (
		<div className="footer">
			{social.map((item) => {
				const { id, url, icon } = item;
				return (
					<footer key={id} className="footer-item">
						<button className="footer-btn">
							<a href={url}>
								<aside>{icon}</aside>
							</a>
						</button>
					</footer>
				);
			})}
			<p className="footer-p">
				For more information please send a mail to edimavthompson@gmail.com or
				call +234 7012708221
			</p>
		</div>
	);
};

export default Footer;
