import React, {Component} from 'react';
import {connect} from 'react-redux';

class GenreRow extends Component {

  handleDelete = ()=> {
    
    
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