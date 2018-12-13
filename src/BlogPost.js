import React, { Component } from 'react';
import Butter from 'buttercms';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import marked from 'marked';

const butter = Butter('f1cab14794d33eadb2cde1165c2651e8872f2942');

class BlogPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false
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

			return (
				<div>
					<Helmet>
						<title>{post.seo_title}</title>
						<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
						{/* <link rel='stylesheet' href='https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/style.css' media='screen' /> */}
					</Helmet>
					<section style={{ fontFamily: 'Roboto', margin: '20px' }}>
						{/* <h1>React Blog - ButterCMS Posts</h1> */}
						{/* <article dangerouslySetInnerHTML={{ __html: this.state.markdown }} /> */}
						<div dangerouslySetInnerHTML={{ __html: post.body }} />
					</section>
				</div>
			);
		} else {
			return <div>Loading...</div>;
		}
	}
}

export default BlogPost;
