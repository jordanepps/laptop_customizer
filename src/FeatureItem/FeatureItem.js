import React, { Component } from 'react';
import './FeatureItem.css';

class FeatureItem extends Component {
	render() {
		return (
			<li className="feature__item">
				<div
					className={this.props.featureClassName}
					onClick={e => this.props.updateFeature(this.props.updateFeatureKey, this.props.updateFeatureItem)}
				>
					{this.props.itemName}(
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD'
					}).format(this.props.itemCost)}
					)
				</div>
			</li>
		);
	}
}

export default FeatureItem;
