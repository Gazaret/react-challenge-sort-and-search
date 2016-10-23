import React, { Component } from 'react';

export default class ActiveUser extends Component {
  constructor() {
    super();
  }

  getImage(animal) {
    const images = new Map([
      ['cat', 'images/cat.svg'],
      ['dog', 'images/dog.svg'],
      ['fox', 'images/fox.svg'],
      ['koala', 'images/koala.svg'],
      ['lion', 'images/lion.svg'],
      ['owl', 'images/owl.svg'],
      ['penguin', 'images/penguin.svg'],
      ['pig', 'images/pig.svg'],
      ['raccoon', 'images/raccoon.svg'],
      ['sheep', 'images/sheep.svg']
    ]);

    return images.get(animal);
  }

  render() {
    this.user = this.props.users[this.props.active] || {};

    return (
      <div className="thumbnail activeUser">
        <img src={ this.getImage(this.user.image) } alt="profile avatar"/>
        <div className="activeUser__info">
          <h3>{ this.user.name }</h3>
          <table className="activeUser__table">
            <tbody>
            <tr>
              <td className="activeUser__table--cell">Age:</td>
              <td className="activeUser__table--cell">{ this.user.age }</td>
            </tr>
            <tr>
              <td className="activeUser__table--cell">Favorite animal:</td>
              <td className="activeUser__table--cell">{ this.user.image }</td>
            </tr>
            <tr>
              <td className="activeUser__table--cell">Phone:</td>
              <td className="activeUser__table--cell">{ this.user.phone }</td>
            </tr>
            </tbody>
          </table>
          <p>
            <strong>Favorite phrase:</strong>
            { this.user.phrase }
          </p>
        </div>
      </div>
    );
  }
}