(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a(237)},237:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(106),c=a.n(r),i=a(10),l=a(26),m=a(27),o=a(29),p=a(28),h=a(30),d=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header"}),n.a.createElement("div",null,this.props.children))}}]),t}(s.Component),u=a(46),v=a.n(u),y=v()("f1cab14794d33eadb2cde1165c2651e8872f2942"),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={loaded:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"fetchPosts",value:function(e){var t=this;y.post.list({page:e,page_size:10}).then(function(e){t.setState({loaded:!0,resp:e.data})})}},{key:"componentWillMount",value:function(){var e=this.props.params.page||1;this.fetchPosts(e)}},{key:"componentWillReceiveProps",value:function(e){this.setState({loaded:!1});var t=e.params.page||1;this.fetchPosts(t)}},{key:"render",value:function(){if(this.state.loaded){var e=this.state.resp.meta,t=e.next_page,a=e.previous_page;return n.a.createElement("div",null,this.state.resp.data.map(function(e){return n.a.createElement("div",{key:e.slug},n.a.createElement(i.b,{to:"/post/".concat(e.slug)},e.title))}),n.a.createElement("br",null),n.a.createElement("div",null,a&&n.a.createElement(i.b,{to:"/p/".concat(a)},"Prev"),t&&n.a.createElement(i.b,{to:"/p/".concat(t)},"Next")))}return n.a.createElement("div",null,"Loading...")}}]),t}(s.Component),E=a(69),x=a(111),g=v()("f1cab14794d33eadb2cde1165c2651e8872f2942"),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={loaded:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){E.a.initialize("UA-130580903-1"),console.log("rcg"),E.a.pageview(window.location.pathname+window.location.search)}},{key:"componentWillMount",value:function(){var e=this,t=this.props.params.slug;g.post.retrieve(t).then(function(t){e.setState({loaded:!0,post:t.data.data})})}},{key:"render",value:function(){if(this.state.loaded){var e=this.state.post;return n.a.createElement("div",{style:{marginTop:"-50px"}},n.a.createElement(x.Helmet,null,n.a.createElement("title",null,e.seo_title),n.a.createElement("link",{rel:"stylesheet",href:"https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/style.css",media:"screen"}),n.a.createElement("link",{rel:"pingback",href:"https://hdremixstats.com/evan-meeks/xmlrpc.php"}),n.a.createElement("link",{rel:"dns-prefetch",href:"//s.w.org"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Rancho",rel:"stylesheet"}),n.a.createElement("link",{rel:"alternate",type:"application/rss+xml",title:"Evan Meeks \xbb Feed",href:"https://hdremixstats.com/evan-meeks/feed/"}),n.a.createElement("link",{rel:"alternate",type:"application/rss+xml",title:"Evan Meeks \xbb Comments Feed",href:"https://hdremixstats.com/evan-meeks/comments/feed/"}),n.a.createElement("link",{rel:"alternate",type:"application/rss+xml",title:"Evan Meeks \xbb Portfolio Feed",href:"https://hdremixstats.com/evan-meeks/portfolio-items/feed/"}),n.a.createElement("link",{rel:"stylesheet",id:"crayon-css",href:"https://hdremixstats.com/evan-meeks/wp-content/plugins/crayon-syntax-highlighter/css/min/crayon.min.css?ver=_2.7.2_beta",media:"all"}),n.a.createElement("link",{rel:"stylesheet",id:"crayon-theme-classic-css",href:"https://hdremixstats.com/evan-meeks/wp-content/plugins/crayon-syntax-highlighter/themes/classic/classic.css?ver=_2.7.2_beta",media:"all"}),n.a.createElement("link",{rel:"stylesheet",id:"crayon-font-monaco-css",href:"https://hdremixstats.com/evan-meeks/wp-content/plugins/crayon-syntax-highlighter/fonts/monaco.css?ver=_2.7.2_beta",media:"all"}),n.a.createElement("link",{rel:"stylesheet",id:"woo-layout-css",href:"https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/css/layout.css?ver=4.7.11",media:"all"}),n.a.createElement("link",{rel:"stylesheet",id:"prettyPhoto-css",href:"https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/css/prettyPhoto.css?ver=4.7.11",media:"all"}),n.a.createElement("script",{type:"text/javascript",src:"https://hdremixstats.com/evan-meeks/wp-includes/js/jquery/jquery.js?ver=1.12.4"}),n.a.createElement("script",{type:"text/javascript",src:"https://hdremixstats.com/evan-meeks/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1"}),n.a.createElement("script",{type:"text/javascript",src:"https://hdremixstats.com/evan-meeks/wp-content/plugins/crayon-syntax-highlighter/js/min/crayon.min.js?ver=_2.7.2_beta"}),n.a.createElement("script",{type:"text/javascript",src:"https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/js/third-party.js?ver=4.7.11"}),n.a.createElement("script",{type:"text/javascript",src:"https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/js/general.js?ver=4.7.11"}),n.a.createElement("script",{type:"text/javascript",src:"https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/js/jquery.prettyPhoto.js?ver=4.7.11"}),n.a.createElement("script",{type:"text/javascript",src:"https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/js/portfolio.js?ver=4.7.11"}),n.a.createElement("script",{type:"text/javascript",src:"https://hdremixstats.com/evan-meeks/wp-content/themes/pixelpress/includes/js/uniform.js?ver=4.7.11"}),n.a.createElement("link",{rel:"https://api.w.org/",href:"https://hdremixstats.com/evan-meeks/wp-json/"}),n.a.createElement("link",{rel:"EditURI",type:"application/rsd+xml",title:"RSD",href:"https://hdremixstats.com/evan-meeks/xmlrpc.php?rsd"}),n.a.createElement("meta",{name:"generator",content:"WordPress 4.7.11"}),n.a.createElement("link",{rel:"stylesheet",href:"https://hdremixstats.com/evan-meeks/wp-content/plugins/wp-synhighlight/themes/default/wp-synhighlighter.css",media:"screen"}),n.a.createElement("script",{type:"text/javascript",src:"https://hdremixstats.com/evan-meeks/wp-content/plugins/wp-synhighlight/themes/default/wp-synhighlighter.js"}),n.a.createElement("meta",{name:"description",content:e.meta_description}),n.a.createElement("meta",{name:"og:image",content:e.featured_image})),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.body}}))}return n.a.createElement("div",null,"Loading...")}}]),t}(s.Component),j=function(e){return n.a.createElement(i.d,e,n.a.createElement(i.c,{path:"/",component:d},n.a.createElement(i.a,{component:f}),n.a.createElement(i.c,{path:"/p/:page",component:f}),n.a.createElement(i.c,{path:"/post/:slug",component:k})))};c.a.render(n.a.createElement(j,{history:i.e}),document.getElementById("root"))}},[[112,2,1]]]);
//# sourceMappingURL=main.39a5feb8.chunk.js.map