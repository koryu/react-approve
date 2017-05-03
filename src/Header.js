import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';

class Header extends Component {
  render() {
    var componentClassNames = classNames('App-header', this.props.customClassNames);
    var componentContent = <h2>{this.props.text}</h2>;
    if (this.props.children) {
      componentContent = this.props.children;
    }
    return (
      <div className={componentClassNames}>
        {componentContent}
      </div>
    );
  }
}

export default Header;
