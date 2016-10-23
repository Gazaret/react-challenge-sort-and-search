import React, { Component } from 'react';
import SortName from './Toolbar/SortName';
import SortAge from './Toolbar/SortAge';

export default class Toolbar extends Component {
  constructor() {
    super();
    this.nameReverse = false;
    this.ageReverse = false;
  }

  handleSortByName() {
    let sortedUsers = this.props.users.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if(nameA < nameB)
        return -1;
      if(nameA > nameB)
        return 1;

      return 0;
    })

    if(this.nameReverse)
      sortedUsers = sortedUsers.reverse();

    this.nameReverse = !this.nameReverse;

    return this.props.sort(sortedUsers);
  }

  handleSortByAge() {
    let sortedUsers = this.props.users.sort((a, b) => {
      const ageA = a.age;
      const ageB = b.age;

      if(ageA < ageB)
        return -1;
      if(ageA > ageB)
        return 1;

      return 0;
    })

    if(this.ageReverse)
      sortedUsers = sortedUsers.reverse();

    this.ageReverse = !this.ageReverse;

    return this.props.sort(sortedUsers);
  }

  render() {
    return (
      <div className="toolbar">
        <SortName onClick={this.handleSortByName.bind(this)} />
        <SortAge onClick={this.handleSortByAge.bind(this)} />
      </div>
    );
  }
}