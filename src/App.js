import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MenuDrawer from './components/MenuDrawer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Watchlist from './pages/Watchlist';
import Home from './pages/Home';
import MobileMenuDrawer from './components/MobileMenuDrawer';

export default function App() {
	const isMobileDevice = () => {
		if (window.innerWidth < 500) return true;
		else return false;
	};

	const isMobile = isMobileDevice();

	return (
		<Box sx={{ display: 'flex' }}>
			<BrowserRouter>
				<CssBaseline />
				<Header isMobile={isMobile}/>
				{isMobile ? <MobileMenuDrawer /> : <MenuDrawer />}
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: 3,
						...(!isMobile && { paddingLeft: '85px' }),
					}}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details/" element={<Details />} />
						<Route path="/details/:id" element={<Details />} />
						<Route path="/watchlist" element={<Watchlist />} />
					</Routes>
				</Box>
			</BrowserRouter>
		</Box>
	);
}
