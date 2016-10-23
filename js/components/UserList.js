import React, { Component } from 'react';
import UserData from './UserData';

export default class UserList extends Component {
  handleChange(id) {
    this.props.setActive(id);
  }

  render() {
    const users = this.props.list.map(user => {
      return <UserData key={user.id} image={user.image} name={user.name} age={user.age} phone={user.phone} onClick={ this.handleChange.bind(this, user.id) } />
    });

    return (
      <div className="userList">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            { users }
          </tbody>
        </table>
      </div>
    );
  }
}