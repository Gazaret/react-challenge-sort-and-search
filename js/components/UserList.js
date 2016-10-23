import React, { Component } from 'react';
import UserData from './UserData';

export default class UserList extends Component {
  render() {
    const users = this.props.list.map(user => {
      return <UserData image={user.image} name={user.name} age={user.age} phone={user.phone}/>
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