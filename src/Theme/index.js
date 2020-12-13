import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#D92A21',
			main: '#EC2029',
			dark: '#6F0000',
			constrastText: '#ffffff'
		},
		secondary: {
			light: '#FFDD00',
			main: '#FBB612',
			dark: '#F9A51A',
			contrastText: '#000000'
		},
		purple: {
			light: "#ff00ff",
			main: '#800080',
			dark: '#5d005d',
		},
		text: {
			primary: '#ff0000',
			secondary: '#ffff00'
		}
	},
	typography: {
		fontSize: 16,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 600,
		h1: {
			fontSize: "4rem",
			fontWeight: 400,
		},
		h2: {
			fontSize: "3.5rem",
			fontWeight: 500,
		}
	},
	spacing: 20
})

export default theme;