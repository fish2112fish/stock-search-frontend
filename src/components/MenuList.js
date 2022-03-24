import { List } from '@mui/material';
import React from 'react';
import MenuItem from './MenuItem';

import ShowChartIcon from '@mui/icons-material/ShowChart';
import SearchIcon from '@mui/icons-material/Search';
import AddchartIcon from '@mui/icons-material/Addchart';

const MenuList = (props) => {
	return (
		<List>
			<MenuItem menuTitle="Home" menuSlug="/" open={props.open} icon={<SearchIcon />}/>
			<MenuItem menuTitle="Details" menuSlug="/details" open={props.open}  icon={<ShowChartIcon />}/>
			<MenuItem menuTitle="Watchlist" menuSlug="/watchlist" open={props.open}  icon={<AddchartIcon />}/>
		</List>
	);
};

export default MenuList;
