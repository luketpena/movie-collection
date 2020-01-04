import React, {Component} from 'react';

class MovieCard extends Component {
  render () {
    return (
      <div className="card">
        <img src={this.props.movie.img_url} alt={this.props.movie.name}/>
        <h3>{this.props.movie.name}</h3>
        <p>{this.props.movie.genre} - {this.props.movie.date.split('T')[0].replace(/-/g,'/')}</p>
        <button>Delete</button>
      </div>
    )
  }
}

export default MovieCard;