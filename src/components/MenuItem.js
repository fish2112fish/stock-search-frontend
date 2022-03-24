import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';


const MenuItem = (props) => {
	const location = useLocation();

	return (
		<NavLink
			to={`${props.menuSlug}`}
			style={{ textDecoration: 'none', boxShadow: 'none' }}
		>
			<ListItemButton
				sx={{
					minHeight: 48,
					justifyContent: props.open ? 'initial' : 'center',
					px: 2.5,
				}}
			>
				<ListItemIcon
					sx={{
						minWidth: 0,
						mr: props.open ? 3 : 'auto',
						justifyContent: 'center',
                        padding: '10px',
                        borderRadius: '25px',
                        ...(location.pathname === `${props.menuSlug}` && {
                            backgroundColor: '#82befb',
                        }),
					}}
				>
					{props.icon}
				</ListItemIcon>
				<ListItemText
					sx={{ opacity: props.open ? 1 : 0 }}
					primary={
						<Typography
							type="body2"
							style={{ color: '#000' }}
						>
							{props.menuTitle}
						</Typography>
					}
				/>
			</ListItemButton>
		</NavLink>
	);
};

export default MenuItem;
