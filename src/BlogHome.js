import React, { Component } from 'react';
import { Link } from 'react-router';
import Butter from 'buttercms';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const butter = Butter('f1cab14794d33eadb2cde1165c2651e8872f2942');

class BlogHome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false
		};
	}

	fetchPosts(page) {
		butter.post.list({ page: page, page_size: 40, category_slug: 'mainblog' }).then((resp) => {
			this.setState({
				loaded: true,
				resp: resp.data
			});
		});
	}

	componentWillMount() {
		let page = this.props.params.page || 1;

		this.fetchPosts(page);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ loaded: false });

		let page = nextProps.params.page || 1;

		this.fetchPosts(page);
	}

	render() {
		if (this.state.loaded) {
			const { next_page, previous_page } = this.state.resp.meta;
			const { classes } = this.props;
			console.log('this.state.resp', this.state.resp);
			return (
				<>
					<h2 style={{ fontFamily: "'Lato', sans-serif", color: '#4d5ebd' }}>Evan Meeks Blog and Portfolio - Serverless ButterCMS Content </h2>
					<Paper className={classes.root} elevation={0}>
						{this.state.resp.data.map((post) => {
							return (
								<div className={classes.cardContainer} button key={post.slug}>
									<Link className={classes.link} to={`/post/${post.slug}`}>
										<Card className={classes.card}>
											<CardActionArea>
												<CardMedia className={classes.media} image={post.featured_image} title='Contemplative Reptile' />
												<CardContent>
													<h2 className={classes.header}>{post.seo_title}</h2>
													<p className={classes.p} component='p'>
														{post.summary}
													</p>
												</CardContent>
											</CardActionArea>
											<CardActions>
												<Button size='small' color='primary'>
													<Link className={classes.link} to={`/post/${post.slug}`}>
														{post.title}
													</Link>
												</Button>
											</CardActions>
										</Card>
									</Link>
								</div>
							);
						})}
					</Paper>
					<div>
						{previous_page && <Link to={`/p/${previous_page}`}>Prev</Link>}

						{next_page && <Link to={`/p/${next_page}`}>Next</Link>}
					</div>
				</>
			);
		} else {
			return <div>Loading...</div>;
		}
	}
}

BlogHome.propTypes = {
	classes: PropTypes.object.isRequired
};

const styles = (theme) => ({
	card: {
		maxWidth: 345,
		fontFamily: "'Lato', sans-serif",
		margin: '0 0 0 14px',
		textDecoration: 'none',
		cursor: 'pointer'
	},
	link: {
		maxWidth: 345,
		color: '#4d5ebd',
		textDecoration: 'none',
		textAlign: 'left',
		fontFamily: "'Lato', sans-serif",
		marginBottom: '20px',
		textDecoration: 'none'
	},
	media: {
		height: '153px',
		fontFamily: "'Lato', sans-serif",
		border: '1px solid #5f5dd624',
		margin: '7px'
	},
	header: {
		fontFamily: "'Lato', sans-serif",
		color: '#4d5ebd',
		fontSize: '1.8em'
	},
	p: {
		color: '#5482bf',
		fontSize: '1.25em'
	},
	cardContainer: {
		display: 'flex',
		flex: '1 2 calc(31% - 3px)'
	},
	root: {
		...theme.mixins.gutters(),
		fontFamily: "'Lato', sans-serif",
		background: '#edeef3',
		maxWidth: '59vw',
		display: 'flex',
		flexFlow: 'row wrap',
		flex: '1 2 calc(31% - 3px)',
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2
	}
});

export default withStyles(styles)(BlogHome);
