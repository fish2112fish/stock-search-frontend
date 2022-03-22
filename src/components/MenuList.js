import { List } from '@mui/material';
import React from 'react';
import MenuItem from './MenuItem';

const MenuList = (props) => {
	return (
		<List>
			<MenuItem menuTitle="Home" menuSlug="/" open={props.open} />
			<MenuItem menuTitle="Details" menuSlug="/details" open={props.open} />
			<MenuItem menuTitle="Watchlist" menuSlug="/watchlist" open={props.open} />
		</List>
	);
};

export default MenuList;
