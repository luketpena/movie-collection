import React, {Component} from 'react';

class MovieCard extends Component {
  render () {
    return (
      <div className="card">
        <img src="https://m.media-amazon.com/images/M/MV5BZGZkNWQ1ZDQtMjYzNy00NmYxLWEwMDEtNjY2Y2U2ZWEyOGQ5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="PLACEHOLDER"/>
        <h3>[MOVIE TITLE]</h3>
        <p><span>[GENRE]</span> - <span>01/03/20</span></p>
        <button>Delete</button>
      </div>
    )
  }
}

export default MovieCard;