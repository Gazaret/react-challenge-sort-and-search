import React, { Component } from 'react';

export default class SortName extends Component {
  render() {
    return (
      <button className="btn btn-default toolbar__button">
        <i className="icon fa fa-sort-alpha-asc"></i>
        <span>Sort by name</span>
      </button>
    );
  }
}