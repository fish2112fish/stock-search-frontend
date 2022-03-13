import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import Details from './pages/Details';
import Watchlist from './pages/Watchlist';
import Header from './components/Header';

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#03004a',
		},
		secondary: {
			main: '#d85400',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/details/" element={<Details />} />
					<Route path="/details/:id" element={<Details />} />
					<Route path="/watchlist" element={<Watchlist />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
