import theme from "../../Theme";

const {light: purpleLight, main: purpleMain} = theme.palette.purple

const styles = {
	img: {
		width: '100%',
		height: '280px',
		'&:hover': {
			transform: "translateY(-4px)",
			transition: 'all 0.3s'
		}
	},
	txt: {
		textAlign: 'center',
		'& h5': {
			color: 'red'
		}
	},
	button: {
		justifyContent: 'center'
	},
	btnDetail: {
		color: purpleLight,
	}
	
}

export default styles;