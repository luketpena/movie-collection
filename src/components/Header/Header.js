import React, {Component} from 'react';

class Header extends Component {
  render () {
    return (
      <header>
        <h1>Movie Database</h1>
        <div>
          <button>Add Entry</button>
          <button>Manage Genres</button>
        </div>
      </header>
    )
  }
}

export default Header;