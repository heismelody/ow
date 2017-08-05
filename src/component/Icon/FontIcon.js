import React from 'react';
import ProTypes from 'prop-types';

// require('./styles/Avatar.default.less');
// $fa-font-path: "./font-awesome/fonts/";
// @import './font-awesome/scss/font-awesome.scss';

export default class FontIcon extends React.Component {
	static propTypes = {
		icon: ProTypes.string.isRequired,
		size: ProTypes.number,
		rotate: ProTypes.oneOf([
			ProTypes.string,
			ProTypes.number,
		]),
		flip: ProTypes.string,
		pull: ProTypes.string,
		fixed: ProTypes.bool,
		border: ProTypes.bool,
		spin: ProTypes.bool,
		pulse: ProTypes.bool,
		inverse: ProTypes.bool,
	};

	static defaultProps = {
		fixed: false,
		border: false,
		spin: false,
		pulse: false,
		inverse: false,
	};

	render() {
		const {
			icon,
			size,
			rotate,
			flip,
			pull,
			fixed,
			border,
			spin,
			pulse,
			inverse,

			...other
		} = this.props;

		let classes = ['fa', 'fa-' + icon];

		if (size) {
			classes.push('fa-' + size);
		}
		if (fixed) {
			classes.push('fa-fw');
		}
		if (border) {
			classes.push('fa-border');
		}
		if (spin) {
			classes.push('fa-spin');
		}
		if (pulse) {
			classes.push('fa-pulse');
		}
		if (inverse) {
			classes.push('fa-inverse');
		}
		if (rotate) {
			classes.push('fa-rotate-' + rotate);
		}
		if (flip) {
			classes.push('fa-flip-' + flip);
		}
		if (pull) {
			classes.push('fa-pull-' + pull);
		}

		return (
			<i
				className={classes}
				aria-hidden="true">
			</i>
		);
	}
}
