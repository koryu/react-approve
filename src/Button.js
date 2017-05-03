import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';

class Button extends Component {
  render() {
    var componentClassNames = classNames('pure-button', this.props.customClassNames);
    var componentContent = this.props.text;
    if (this.props.children) {
      componentContent = this.props.children;
    }
    return (
        <button className={componentClassNames} onClick={(e) => this.props.handleClick(e)}>{componentContent}</button>
    );
  }
}

export default Button;
