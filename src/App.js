import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
			<div>New App</div>
		</ThemeProvider>
	);
}

export default App;
