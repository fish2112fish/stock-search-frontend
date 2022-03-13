import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/details">Details</NavLink>
			<NavLink to="/watchlist">Watchlist</NavLink>
		</>
	);
};

export default Header;
