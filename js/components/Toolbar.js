import React, { Component } from 'react';
import SortName from './Toolbar/SortName';
import SortAge from './Toolbar/SortAge';

export default class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <SortName/>
        <SortAge/>
      </div>
    );
  }
}