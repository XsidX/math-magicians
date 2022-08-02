import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends Component {
  render() {
    const { className, children } = this.props;
    return <div className={`${className} bg-slate-300 font-primary flex items-center justify-center cursor-pointer`}>{children}</div>;
  }
}