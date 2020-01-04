import React, {Component} from 'react';
import {connect} from 'react-redux';

class GenreRow extends Component {

  handleDelete = ()=> {
    if (this.props.genre.count==='0') {
      this.props.dispatch({type: 'DELETE_GENRE', payload: this.props.genre.id})
    } else {
      alert('You cannot delete a genre with movies assigned to it. Remove those movies first then try again.')
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.genre.name}</td>
        <td>{this.props.genre.count}</td>
        <td><button onClick={this.handleDelete}>DELETE</button></td>
      </tr>
    )
  }
}

export default connect()(GenreRow);