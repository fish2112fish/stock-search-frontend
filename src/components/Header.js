import { Box } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/img/sm-logo.png';

const Header = (props) => {
	const location = useLocation();

	const isNotHomepage = location.pathname !== '/'

	return (
		<Box
			sx={{
				width: '100%',
				height: '40px',
				display: 'block',
				background: '#fff',
				margin: 0,
				position: 'fixed',
			}}
		>
      
			{isNotHomepage && (
				<img
					src={logo}
					alt="Stock Monkey Logo"
					style={{
						...(props.isMobile
							? {
									// Logo layout on Mobile screens:
									margin: '7px 50px',
									display: 'inline',
									width: '150px',
									float: 'left',
							  }
							: {
									// Logo layout on Desktop screens:
									margin: '15px 80px',
									display: 'inline',
									width: '150px',
									float: 'left',
							  }),
					}}
				/>
			)}

			<div
				style={{
					position: 'absolute',
					top: '0px',
					right: '0px',
					margin: '7px',
				}}
			>
				Login
			</div>
		</Box>
	);
};

export default Header;
