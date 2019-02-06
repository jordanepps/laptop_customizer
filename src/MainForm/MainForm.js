import React, { Component } from 'react';
import Feature from '../Feature/Feature';
import FeatureItem from '../FeatureItem/FeatureItem';
import './MainForm.css';

class MainForm extends Component {
	render() {
		const features = Object.keys(this.props.features).map(key => {
			const options = this.props.features[key].map((item, index) => {
				const selectedClass =
					item.name === this.props.selected[key].name
						? 'feature__selected'
						: '';
				const featureClass = 'feature__option ' + selectedClass;
				return (
					<FeatureItem key={index} featureClassName={featureClass} updateFeature={this.props.updateFeature} updateFeatureKey={key} updateFeatureItem={item} itemName={item.name} itemCost={item.cost}/>
				);
			});

			return <Feature key={key} featureName={key} options={options} />;
		});

		return (
			<section className="main__form">
				<h3>TECH SPECS AND CUSTOMIZATIONS</h3>
				{features}
			</section>
		);
	}
}

export default MainForm;
