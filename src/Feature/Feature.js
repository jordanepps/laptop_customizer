import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
	render() {
		return (
			<div className="feature">
				<div className="feature__name">{this.props.featureName}</div>
				<ul className="feature__list">{this.props.options}</ul>
			</div>
		);
	}
}

export default Feature;
