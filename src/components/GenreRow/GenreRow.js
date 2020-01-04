import React, {Component} from 'react';

class GenreRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.genre.name}</td>
        <td>{this.props.genre.count}</td>
        <td><button>DELETE</button></td>
      </tr>
    )
  }
}

export default GenreRow;