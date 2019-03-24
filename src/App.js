import React, { Component } from "react";

class App extends Component {
	render() {
		return (
			<div style={{ maxWidth: "85vw", fontFamily: "'Lato', sans-serif" }} className="App">
				<div className="App-header" />
				<div>{this.props.children}</div>
			</div>
		);
	}
}

export default App;
