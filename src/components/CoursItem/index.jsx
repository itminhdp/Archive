import { withStyles ,Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styles from './style'
import Cat from '../../assets/img/maxresdefault.jpg'

class Courseitem extends Component {
	render() {
		const {img, txt, button, btnDetail} = this.props.classes
		return (
			<Card>
				<CardActionArea>
					<CardMedia
						className={img}
						image={Cat}
						title="Contemplative Reptile"
					/>
					<CardContent className={txt}>
						<Typography gutterBottom variant="h5" component="h2" className="" >
							Lizard
						</Typography>
						<Typography variant="body2" color="textPrimary" component="p">
							Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
							across all continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className={this.props.classes.button}>
					<Button size="small" color="primary" className={btnDetail}>
						Share
			  		</Button>
					<Button size="small" color="primary">
						Learn More
			  		</Button>
				</CardActions>
			</Card>
		);
	}
}

export default withStyles(Styles)(Courseitem);