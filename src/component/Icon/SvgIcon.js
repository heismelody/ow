import React from 'react';
import ProTypes from 'prop-types';

import pencil from './svg/pencil.svg';
import alignHorizontalMiddle from './svg/align-horizontal-middle.svg';
import eye from './svg/eye.svg';
import arrowLeft from './svg/arrow-left.svg';
import arrowRight from './svg/arrow-right.svg';
import settings from './svg/settings.svg';
import menuBook from './svg/book.svg';
import menuPaper from './svg/file-o.svg';
import menuTags from './svg/tags.svg';
import down from './svg/caret-down.svg';

require('./styles/SvgIcon.default.less');

const icons = {
	pencil,
	alignHorizontalMiddle,
	eye,
	arrowRight,
	arrowLeft,
	settings,
	menuBook,
	menuPaper,
	menuTags,
	down
}

export default class SvgIcon extends React.Component {
	static propTypes = {
		name: ProTypes.string.isRequired,
		size: ProTypes.string,
		color: ProTypes.string,
	};

	static defaultProps = {
		size: 'md',
		color: '#FFF'
	};

	icon(name) {
		return icons[name]
	}

	render() {
		const {
			name,
			size,
			color,

			...other
		} = this.props;

		return (
			<span
				{...other}
		    className={ size ? `ow-svg-icon-${size} ow-svg-icon` : 'ow-svg-icon' }
		    style={{ fill: color }}
				dangerouslySetInnerHTML={{__html: this.icon(name)}}
			/>
		);
	}
}
