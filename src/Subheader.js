import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';

class Subheader extends Component {
  render() {
    var componentClassNames = classNames('App-intro', this.props.customClassNames);
    var componentContent = <h3>{this.props.text}</h3>;
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

export default Subheader;
