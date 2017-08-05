import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Avatar.default.less');

export default class SvgIcon extends React.Component {
	static propTypes = {
		src: ProTypes.node.isRequired,
		size: ProTypes.number,
		color: ProTypes.string,
	};

	static defaultProps = {
		src: '/',
		size: 30,
		color: '#FFF'
	};

	render() {
		const {
			src,
			size,
			color,

			...other
		} = this.props;

		const s = size + 'px';

		return (
			<img
				src={src}
				style={{width: s, height: s, backgroundColor: color}}
				className="ow-avatar"
				{...other}
			/>
		);
	}
}
