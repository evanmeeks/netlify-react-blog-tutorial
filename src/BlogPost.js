import React, { Component } from 'react';
import Butter from 'buttercms';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

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
		console.log('rcg');
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
			const post = this.state.post;

			return (
				<div>
					<Helmet>
						<title>{post.seo_title}</title>
						<meta name='description' content={post.meta_description} />
						<meta name='og:image' content={post.featured_image} />
					</Helmet>

					{/* <h1>{post.title}</h1> */}
					<div dangerouslySetInnerHTML={{ __html: post.body }} />
				</div>
			);
		} else {
			return <div>Loading...</div>;
		}
	}
}

export default BlogPost;
