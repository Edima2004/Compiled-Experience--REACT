import React from 'react';
import { Link } from 'react-router-dom';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { useGlobalContext } from '../../context';

const HomeContent = () => {
	const { darkMode, changeMode } = useGlobalContext();
	return (
		<div className="home space-top">
			<div className="dark-mode" onClick={changeMode}>
				{/*{darkMode ? <BsToggleOn /> : <BsToggleOff />}*/}
			</div>
			<div className={`${darkMode ? 'home-title dark-home ' : 'home-title'}`}>
				<h1>
					<em>Welcome to Marvel's Kitchen</em>
				</h1>
				<img
					className="chef-logo"
					src="./images/chef-logo1.png"
					alt="chef logo"
				/>
			</div>
			<Link to="/Food">
				<div className="home1 first-home">
					<div className="home-head">
						<h2>
							Fancy a dinner with your date, friends or family? Then check out
							our exciting, mouth-watering menu
						</h2>
					</div>
					<div>
						<img
							className="img"
							src="./images/food1.jpg"
							alt="Bacon Overflow"
						/>
					</div>
				</div>
			</Link>
			<Link to="/Cocktails">
				<div className="home1 second-home">
					<div>
						<img
							className="img"
							src="./images/cock1.jpg"
							alt="Cocktail"
						/>
					</div>
					<div className="home-head">
						<h2>
							Need a Cocktail to go with any occasion? Well worry less, our
							cocktail menu is just a click away{' '}
						</h2>
					</div>
				</div>
			</Link>

			<Link to="/About">
				<div className="home1 third-home">
					<div className="home-head">
						<h2>
							Or better still, just want to know more about us and how we
							deliver a first class service?{' '}
						</h2>
					</div>
					<div>
						<img
							className="img"
							src="./images/about-us.jpg"
							alt="cocktail"
						/>
					</div>
				</div>
			</Link>
			<div className="home1 fourth-home">
				<div>
					<img className="img" src="./images/family.jpg" alt="all" />
				</div>
				<div className="home-head">
					<h2>Whatever you need, we've got you covered!</h2>
				</div>
			</div>
		</div>
	);
};
export default HomeContent;
