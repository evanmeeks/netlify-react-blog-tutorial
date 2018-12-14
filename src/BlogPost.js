import React, { Component } from 'react';
import { Link } from 'react-router';
import Butter from 'buttercms';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import marked from 'marked';

const butter = Butter('f1cab14794d33eadb2cde1165c2651e8872f2942');

class BlogPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			tags: []
		};
	}

	componentDidMount() {
		ReactGA.initialize('UA-130580903-1'); //Unique Google Analytics tracking number
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	componentWillMount() {
		let slug = this.props.params.slug;

		butter.post.retrieve(slug).then((resp) => {
			this.setState({
				loaded: true,

				post: resp.data.data
			});
		});
		const readmePath = require('./README.md');
		fetch(readmePath)
			.then((response) => {
				console.log();
				return response.text();
			})
			.then((text) => {
				this.setState({
					markdown: marked(text)
				});
			});
	}

	render() {
		if (this.state.loaded) {
			const post = this.state.post;
			const tags = this.state.post.tags;

			const { classes } = this.props;

			return (
				<>
					<Helmet>
						<title>{post.seo_title}</title>
						<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
					</Helmet>

					<Paper className={classes.root} style={{ fontFamily: "'Lato', sans-serif" }} elevation={1}>
						<Link className={classes.link} to='/'>
							{' '}
							Home
						</Link>
						<h1 style={{ fontFamily: "'Lato', sans-serif" }}>{post.seo_title}</h1>

						<Typography component='p' style={{ fontFamily: "'Lato', sans-serif", margin: '20px', display: 'flex' }}>
							{/* <article dangerouslySetInnerHTML={{ __html: this.state.markdown }} /> */}
							{tags &&
								tags.map((tag) => {
									const { name, slug } = tag;
									return (
										<section>
											<Chip className='Tags' href='' label={name} key={slug} />
										</section>
									);
								})}
						</Typography>

						<article dangerouslySetInnerHTML={{ __html: post.body }} />
					</Paper>
				</>
			);
		} else {
			return <div>Loading...</div>;
		}
	}
}

BlogPost.propTypes = {
	classes: PropTypes.object.isRequired
};

const styles = (theme) => ({
	root: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2
	},
	link: {
		textDecoration: 'none',
		color: '#4d5ebd'
	}
});

export default withStyles(styles)(BlogPost);
