import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import MenuList from './MenuList';

import { menuToggle } from '../store/menu';

export default function MobileMenuDrawer() {

	const dispatch = useDispatch();
	const menuOpen = useSelector((state) => state.menu.open);

	const toggleDrawer = (status) => {
		dispatch(
			menuToggle({
				open: status
			})
		)
	};

	return (
		<>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="menu"
				sx={{
					margin: '5px',
					width: '30px',
					height: '30px',
					position:'fixed',
				}}
				onClick={() => toggleDrawer(true)}
			>
				<MenuIcon />
			</IconButton>
			<Drawer open={menuOpen} onClose={() => toggleDrawer(false)} onClick={() => toggleDrawer(false)}>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{
						margin: 0,
						width: '30px',
						height: '30px',
					}}
					onClick={() => toggleDrawer()}
				>
					<CloseIcon />
				</IconButton>
				<MenuList open={menuOpen} />
			</Drawer>
		</>
	);
}
