import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import MenuDrawer from './components/MenuDrawer';
import Header from './components/Header';
import Details from './pages/Details';
import Watchlist from './pages/Watchlist';
import Home from './pages/Home';
import MobileMenuDrawer from './components/MobileMenuDrawer';
import store from './store';

//const store = configureStore();

const theme = createTheme({
	palette: {
		primary: {
			main: '#5d00d7',
		},
		secondary: {
			main: '#5d00d7',
		},
	},
});

export default function App() {
	const isMobile = window.innerWidth < 500;

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Box sx={{ display: 'flex' }}>
					<BrowserRouter>
						<CssBaseline />
						<Header isMobile={isMobile} />
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
			</ThemeProvider>
		</Provider>
	);
}
