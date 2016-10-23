import React, { Component } from 'react';

export default class SortAge extends Component {
  render() {
    return (
      <button className="btn btn-default toolbar__button" onClick={this.props.onClick}>
        <i className="icon fa fa-sort-numeric-desc"></i>
        <span>Sort by age</span>
      </button>
    );
  }
}