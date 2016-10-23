import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <input className="form-control" type="text" placeholder="Search people by name..."/>
      </div>
    );
  }
}