import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import MenuList from './MenuList';

export default function MobileMenuDrawer() {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (v) => {
		setOpen(v);
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
			<Drawer open={open} onClose={() => toggleDrawer(false)} onClick={() => toggleDrawer(false)}>
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
				<MenuList open={open} />
			</Drawer>
		</>
	);
}
