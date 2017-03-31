import React, { Component, PropTypes } from 'react';

var dict = new ReactiveDict('myDict')


export default class homePage extends Component {
  render() {
    return (
      <div>
        {this.props.header ? React.cloneElement(this.props.header, { dict }) : ''}
        <div className="clear-both">{ React.cloneElement(this.props.main, { dict }) }</div>
        {this.props.footer}
      </div>
    );
  }
}