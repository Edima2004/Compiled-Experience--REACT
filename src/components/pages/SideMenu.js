import React from "react";
import { NavData, social } from "../data";
import { useGlobalContext } from "../context";

const SideMenu = () => {
	const { } = useGlobalContext();
	return (
		<div className="scroll-menu space-top">
			<div className="sidemenu">
				{NavData.map((sidebar) => {
					const { id, name, link, icon } = sidebar;
					return (
						<section key={id}>
							<div className="icon-name">
								<a href={link}>
									<aside>{icon}</aside>
									<span>{name}</span>
								</a>
							</div>
						</section>
					);
				})}
			</div>
			<div>
				{social.map((social) => {
					const { id, url, icon } = social;
					return (
						<div className="top-social" key={id}>
							<a href={url} className="top-social-icon">
								<aside>{icon}</aside>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SideMenu;
