import React from 'react';
import ProTypes from 'prop-types';

require('./styles/Button.default.less');

export default class Button extends React.Component {
  static propTypes = {
    disabled: ProTypes.bool,
    type: ProTypes.oneOf([
      'button',
      'submit',
      'reset',
    ]),
    mode: ProTypes.oneOf([
      'primary',
      'color'
    ]),
    size: ProTypes.oneOf([
      'default',
      'sm',
      'lg',
    ]),
    classPrefix: ProTypes.string,
  };

  static defaultProps = {
    disabled: false,
    type: 'button',
    mode: 'primary',
    size: 'default',
  };

  constructor() {
    super();
  }

  clickHandler = e => {

  };

  render() {
    const {
      disabled,
      type,
      mode,
      size,
      text,

      ...other
    } = this.props;

    return (
      <button
        className="ow-btn"
        {...other}
        disabled={disabled}
        type={type}
        onClick={this.clickHandler}
      >
        {text}
      </button>
    );
  }
}
