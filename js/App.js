import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import ActiveUser from './components/ActiveUser';
import UserList from './components/UserList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.getUsers();
    this.state = {
      users: [],
      active: 0
    };
  }

  getUsers() {
    window.fetch('./data.json', { method: 'GET' })
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({users});
      });
  }

  setActive(id) {
    this.setState({active: id});
  }

  render() {
    return (
      <div className="container-fluid app">
        <SearchBar />
        <Toolbar />
        <div className="app__info">
          <ActiveUser users={ this.state.users } active={ this.state.active } />
          <UserList list={ this.state.users } setActive={ this.setActive.bind(this) } />
        </div>
      </div>
    );
  }
}
