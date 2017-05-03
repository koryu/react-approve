import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';

class UserItem extends Component {
  render() {
    var componentClassNames = classNames(this.props.customClassNames);
    var componentContent = <p>{this.props.text}</p>;
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

export default UserItem;
