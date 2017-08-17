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
import chevronRight from './svg/lnr-chevron-right.svg';
import check from './svg/check.svg';

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
	down,
	chevronRight,
	check
};

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
			className,

			...other
		} = this.props;

		const mergedClassName = ['ow-svg-icon', size && `ow-svg-icon-${size}`, className].join(' ');

		return (
			<span
				{...other}
		    className={mergedClassName}
		    style={{ fill: color }}
				dangerouslySetInnerHTML={{__html: this.icon(name)}}
			/>
		);
	}
}
