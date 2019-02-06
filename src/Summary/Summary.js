import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {
	render() {
		return (
			<div className="summary__option">
				<div className="summary__option__label">{this.props.optionLabel} </div>
				<div className="summary__option__value">{this.props.optionValue}</div>
				<div className="summary__option__cost">
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(this.props.optionCost)}
				</div>
			</div>
		);
	}
}

export default Summary;
