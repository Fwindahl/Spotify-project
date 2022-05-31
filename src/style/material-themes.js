import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
	palette: {
		primary: {
			main: '#1db954',
			light: '#1ed760',
			dark: '#3b5249',
			contrastText: '#ffffff'
		},
		background: {
			default: '#121212',
			paper: '#1d1d1d'
		},
		text: {
			primary: '#ffffff',
			secondary: '#b3b3b3'
		},
		divider: '#292929'
	}
});
