import React, { Component } from 'react';
import Header from './Header/Header';
import MainContainer from './MainContainer/MainContainer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<MainContainer />
			</div>
		);
	}
}

export default App;
