import { withStyles ,Container, Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Courseitem from '../../components/CoursItem';
import Header from '../../components/Header';
import styles from './style'


class Home extends Component {
	render() {
		return (
			<>
				<Header />
				<Typography component="h1" variant="h2" className={this.props.classes.title} >Course List</Typography>
				<Container maxWidth="lg" >
					<Grid container spacing={3} >
						<Grid item xs={12} lg={4} >
							<Courseitem ></Courseitem>
						</Grid>
						<Grid item xs={12} lg={4} >
							<Courseitem ></Courseitem>
						</Grid>
						<Grid item xs={12} lg={4} >
							<Courseitem ></Courseitem>
						</Grid>
					</Grid>
				</Container>
			</>
		);
	}
}

export default withStyles(styles)(Home);