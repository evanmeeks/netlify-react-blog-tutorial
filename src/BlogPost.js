import React, { Component } from "react";
import { Link } from "react-router";
import Butter from "buttercms";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const butter = Butter("f1cab14794d33eadb2cde1165c2651e8872f2942");

class BlogPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			tags: []
		};
	}

	componentDidMount() {
		ReactGA.initialize("UA-130580903-1"); //Unique Google Analytics tracking number
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
	}

	render() {
		if (this.state.loaded) {
			const { classes } = this.props;
			const { post } = this.state;

			return (
				<>
					<Helmet>
						<title>Evan Meeks Blog and Portfolio - {post.seo_title}</title>
						<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
					</Helmet>
					<Paper className={classes.root} style={{ fontFamily: "'Lato', sans-serif" }} elevation={1}>
						<Link className={classes.link} to="/">
							Home
						</Link>
						<h1 style={{ fontFamily: "'Lato', sans-serif" }}>{post.seo_title}</h1>

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
	chipRoot: {
		...theme.mixins.gutters(),
		margin: theme.spacing.unit
	},
	link: {
		textDecoration: "none",
		color: "#4d5ebd"
	}
});

export default withStyles(styles)(BlogPost);
