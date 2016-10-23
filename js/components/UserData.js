import React, { Component } from 'react';
import ActiveUser from './ActiveUser';

export default class UserData extends Component {
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
    return (
      <tr className="userData" onClick={ this.props.onClick }>
        <td>
          <img className="userData__avatar" src={ this.getImage(this.props.image) } alt=""/>
        </td>
        <td>{ this.props.name }</td>
        <td>{ this.props.age }</td>
        <td>{ this.props.phone }</td>
      </tr>
    );
  }
}