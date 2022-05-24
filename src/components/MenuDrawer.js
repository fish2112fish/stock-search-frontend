import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuList from './MenuList';
import { useDispatch, useSelector } from 'react-redux';
import { menuToggle } from '../store/menu';

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	position: 'absolute',
	left: 0,
	top: 0,
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}));

export default function MenuDrawer(props) {
	const dispatch = useDispatch();
	const menuOpen = useSelector((state) => state.menu.open);

	const toggleDrawer = (status) => {
		dispatch(
			menuToggle({
				status: status
			})
		)
	};

	return (
		<Drawer
			PaperProps={{
				style: {
					position: 'fixed',
					background: '#ddd'
				},
			}}
			variant="permanent"
			open={menuOpen}
			onMouseEnter={() => toggleDrawer(true)}
			onMouseLeave={() => toggleDrawer(false)}
			onClick={() => toggleDrawer(false)}
			
		>
			<DrawerHeader>
				<IconButton>
					{menuOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</DrawerHeader>
			<Divider />
				<MenuList open={menuOpen} />
			<Divider />
		</Drawer>
	);
}
