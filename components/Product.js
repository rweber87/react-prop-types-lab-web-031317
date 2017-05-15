import React from 'react';

class Product extends React.Component {
	render() {
		return(
			<div>
				<h1>{this.props.name}</h1>
				<h2>{this.props.producer}</h2>
				<ul>
					{this.props.hasWatermark &&
						<li>{this.props.hasWatermark}</li>
					}
					<li>Color: {this.props.color}</li>
					<li>Weight: {this.props.weight}</li>
				</ul>
			</div>

		)
	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: (props, propName) => {
    	const weight = props[propName];

	    if (weight === undefined) {
	      return new Error('The `weight` prop is required.');
	    }

	    if (isNaN(weight)) {
	      return new Error('The `weight` prop is not a number.');
	    }

	    const isValidWeight = weight > 80 && weight < 300;

	    if (!isValidWeight) {
	      return new Error('The `weight` prop should range between 80 and 300.');
	    }
	}
}

export default Product