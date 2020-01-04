import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieCard extends Component {

  handleDelete = ()=> {
    this.props.dispatch({type: 'DELETE_MOVIE', payload: this.props.movie.id})
  }

  render () {
    return (
      <div className="card">
        <img src={this.props.movie.img_url} alt={this.props.movie.name}/>
        <h3>{this.props.movie.name}</h3>
        <p>{this.props.movie.genre} - {this.props.movie.date.split('T')[0].replace(/-/g,'/')}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default connect()(MovieCard);