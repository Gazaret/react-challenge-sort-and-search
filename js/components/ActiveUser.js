import React, { Component } from 'react';

export default class ActiveUser extends Component {
  render() {
    return (
      <div className="thumbnail activeUser">
        <img src="images/owl.svg" alt="profile avatar"/>
        <div className="activeUser__info">
          <h3>Chad Snyder</h3>
          <table className="activeUser__table">
            <tbody>
            <tr>
              <td className="activeUser__table--cell">Age:</td>
              <td className="activeUser__table--cell">28</td>
            </tr>
            <tr>
              <td className="activeUser__table--cell">Favorite animal:</td>
              <td className="activeUser__table--cell">owl</td>
            </tr>
            <tr>
              <td className="activeUser__table--cell">Phone:</td>
              <td className="activeUser__table--cell">8 (629) 653-9041</td>
            </tr>
            </tbody>
          </table>
          <p>
            <strong>Favorite phrase:</strong>
            <span>Owmeco jen be tezpoksim vojuz parro vuri da ce wioveis ko hojmaso ahe civ bapdedam.</span>
          </p>
        </div>
      </div>
    );
  }
}