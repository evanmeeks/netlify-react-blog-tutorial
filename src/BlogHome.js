import React, { Component } from "react";
import { Link } from "react-router";
import Butter from "buttercms";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import OutlinedChips from "./OutlinedChips";
import { Helmet } from "react-helmet";
import butterLogo from './butter-y.png';
const butter = Butter("f1cab14794d33eadb2cde1165c2651e8872f2942");

class BlogHome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tagCloud: [],
			loaded: false
		};
	}

	fetchPosts(page) {
		butter.post.list({ page: page, page_size: 40, category_slug: "mainblog" }).then((resp) => {
			this.setState({
				loaded: true,
				resp: resp.data
			});
		});
	}

	fetchTagPosts(tag) {
		butter.post.list({ tag_slug: tag, page_size: 40, category_slug: "mainblog" }).then((resp) => {
			this.setState({
				loaded: true,
				resp: resp.data
			});
		});
	}

	componentWillReceiveProps(nextProps) {
		let page = nextProps.params.page || 1;
		this.setState({ loaded: false });
		this.fetchPosts(page);
	}

	componentWillMount() {
		let page = this.props.params.page || 1;
		this.fetchPosts(page);
	}

	handleDelete = (tag) => () => {
		const { slug } = tag;
		let tagCloud = this.state.tagCloud;
		const tagToDelete = tagCloud.map(({ slug }) => slug).indexOf(slug);

		tagCloud.splice(tagToDelete, 1);
		this.setState({
			tagCloud
		});

		if (!tagCloud.length) {
			let page = this.props.params.page || 1;
			this.fetchPosts(page);
		}
	};

	handleClick = (tag) => {
		const { slug } = tag;
		let tagCloud = this.state.tagCloud;
		this.fetchTagPosts(slug);
		if (tagCloud.map(({ slug }) => slug).indexOf(slug) === -1) {
			tagCloud = [tag, ...this.state.tagCloud];
			this.setState({
				tagCloud
			});
		}
	};

	render() {
		if (this.state.loaded) {
			const { classes } = this.props;
			console.log("this.state.resp", this.state.resp);
			return (
        <>
          <Helmet>
            <title>Evan Meeks Blog and Portfolio</title>
            <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
          </Helmet>

          <h2>Evan Meeks Blog and Portfolio - Serverless ButterCMS Content </h2>

          <h2>
            {this.state.tagCloud.length ? (
              <Paper className={classes.chipRoot}>
                {this.state.tagCloud.map(({ slug, name }, key) => {
                  let avatar = null;

                  if (slug === "functional-programming") {
                    avatar = <Avatar>FP</Avatar>;
                  }

                  return (
                    <Chip
                      label={name}
                      onClick={() => this.fetchTagPosts(slug)}
                      avatar={avatar}
                      onDelete={this.handleDelete({ slug, name })}
                      className={classes.chip}
                      key={key + slug}
                    />
                  );
                })}
              </Paper>
            ) : null}
          </h2>
          <Paper className={classes.root} elevation={0}>
            {this.state.resp.data.map(post => {
              return (
                <div className={classes.cardContainer} button key={post.slug}>
                  <Card className={classes.card}>
                    <Link className={classes.link} to={`/post/${post.slug}`}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={post.featured_image}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <h2 className={classes.header}>{post.seo_title}</h2>
                          <p className={classes.p} component="p">
                            {post.summary}
                          </p>
                        </CardContent>
                      </CardActionArea>
                    </Link>

                    <div className={classes.postTags}>
                      {post.tags &&
                        post.tags.map((tag, key) => {
                          const { name, slug } = tag;
                          return (
                            <div onClick={() => this.handleClick(tag)} key={key + slug}>
                              <OutlinedChips label={name} />
                            </div>
                          );
                        })}
                    </div>
                  </Card>
                </div>
              );
            })}
            <img style={{ width: "200px", height: "400px" }} src={butterLogo} />
          </Paper>
        </>
      );
		} else {
			return (
        <span>
          <div>lofring...</div>
          <img style={{ width: "972px", height: "400px" }} src={butterLogo} />
        </span>
      );
			
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
		margin: "0 0 0 14px",
		textDecoration: "none",
		cursor: "pointer"
	},
	link: {
		maxWidth: 345,
		color: "#4d5ebd",
		textDecoration: "none",
		textAlign: "left",
		fontFamily: "'Lato', sans-serif",
		marginBottom: "20px"
	},
	media: {
		height: "153px",
		fontFamily: "'Lato', sans-serif",
		border: "1px solid #5f5dd624",
		margin: "7px"
	},
	header: {
		fontFamily: "'Lato', sans-serif",
		color: "#4d5ebd",
		fontSize: "1.8em"
	},
	p: {
		color: "#5482bf",
		fontSize: "1.25em"
	},
	cardContainer: {
		flex: "1 2 calc(31% - 3px)",
		color: "#4d5ebd",
		cursor: "pointer",
		display: "inline",
		marginBottom: "20px",
		mminWidth: "345px",
		width: "auto"
	},
	root: {
		...theme.mixins.gutters(),
		fontFamily: "'Lato', sans-serif",
		background: "#edeef3",
		maxWidth: "59vw",
		minWidth: "80vw",
		display: "flex",
		flexFlow: "row wrap",
		flex: "1 2 calc(31% - 3px)",
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2
	},
	chipRoot: {
		display: "flex",
		flexWrap: "wrap",
		padding: "20px"
	},
	postTags: {
		display: "flex",
		flexWrap: "wrap",
		margin: "11px"
	}
});

export default withStyles(styles)(BlogHome);
