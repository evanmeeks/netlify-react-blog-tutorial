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
				<div style={{ marginTop: '-50px' }}>
					<Helmet>
						<title>{post.seo_title}</title>
						<link rel='stylesheet' href='https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/style.css' media='screen' />
						<link rel='pingback' href='https://hdremixstats.com/evan-meeks/xmlrpc.php' />
						<link rel='dns-prefetch' href='//s.w.org' />
						<link href='https://fonts.googleapis.com/css?family=Rancho' rel='stylesheet' />
						<link rel='alternate' type='application/rss+xml' title='Evan Meeks » Feed' href='https://hdremixstats.com/evan-meeks/feed/' />
						<link rel='alternate' type='application/rss+xml' title='Evan Meeks » Comments Feed' href='https://hdremixstats.com/evan-meeks/comments/feed/' />
						<link rel='alternate' type='application/rss+xml' title='Evan Meeks » Portfolio Feed' href='https://hdremixstats.com/evan-meeks/portfolio-items/feed/' />
						<link
							rel='stylesheet'
							id='crayon-css'
							href='https://hdremixstats.com/evan-meeks/wp-content/plugins/crayon-syntax-highlighter/css/min/crayon.min.css?ver=_2.7.2_beta'
							media='all'
						/>
						<link
							rel='stylesheet'
							id='crayon-theme-classic-css'
							href='https://hdremixstats.com/evan-meeks/wp-content/plugins/crayon-syntax-highlighter/themes/classic/classic.css?ver=_2.7.2_beta'
							media='all'
						/>
						<link
							rel='stylesheet'
							id='crayon-font-monaco-css'
							href='https://hdremixstats.com/evan-meeks/wp-content/plugins/crayon-syntax-highlighter/fonts/monaco.css?ver=_2.7.2_beta'
							media='all'
						/>
						<link rel='stylesheet' id='woo-layout-css' href='https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/css/layout.css?ver=4.7.11' media='all' />
						<link
							rel='stylesheet'
							id='prettyPhoto-css'
							href='https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/css/prettyPhoto.css?ver=4.7.11'
							media='all'
						/>
						<script type='text/javascript' src='https://hdremixstats.com/evan-meeks/wp-includes/js/jquery/jquery.js?ver=1.12.4' />
						<script type='text/javascript' src='https://hdremixstats.com/evan-meeks/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1' />

						<script
							type='text/javascript'
							src='https://hdremixstats.com/evan-meeks/wp-content/plugins/crayon-syntax-highlighter/js/min/crayon.min.js?ver=_2.7.2_beta'
						/>
						<script type='text/javascript' src='https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/js/third-party.js?ver=4.7.11' />
						<script type='text/javascript' src='https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/js/general.js?ver=4.7.11' />
						<script type='text/javascript' src='https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/js/jquery.prettyPhoto.js?ver=4.7.11' />
						<script type='text/javascript' src='https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/js/portfolio.js?ver=4.7.11' />
						<script type='text/javascript' src='https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/js/uniform.js?ver=4.7.11' />
						<link rel='https://api.w.org/' href='https://hdremixstats.com/evan-meeks/wp-json/' />
						<link rel='EditURI' type='application/rsd+xml' title='RSD' href='https://hdremixstats.com/evan-meeks/xmlrpc.php?rsd' />
						<meta name='generator' content='WordPress 4.7.11' />
						<link rel='stylesheet' href='https://hdremixstats.com/evan-meeks/wp-content/plugins/wp-synhighlight/themes/default/wp-synhighlighter.css' media='screen' />
						<script type='text/javascript' src='https://hdremixstats.com/evan-meeks/wp-content/plugins/wp-synhighlight/themes/default/wp-synhighlighter.js' />
						<meta name='description' content={post.meta_description} />
						<meta name='og:image' content={post.featured_image} />
					</Helmet>

					<div dangerouslySetInnerHTML={{ __html: post.body }} />
				</div>
			);
		} else {
			return <div>Loading...</div>;
		}
	}
}

export default BlogPost;
