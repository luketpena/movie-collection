import React, {Component} from 'react';
import MovieCard from '../MovieCard/MovieCard';

class AddEntry extends Component {

  state = {
    name: '',
    genre: '',
    date: '',
    runtime: '',
  }

  handleChange = (event,prop)=> {
    this.setState({
      [prop]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Add Movie</h2>
        <form>
          <input type='text' placeholder='Name' value={this.state.name} onChange={(event)=>this.handleChange(event,'name')}/>
          <select value='Genre'>
            <option disabled>Genre</option>
          </select>
          <label>
            Release Date:
            <input type='date' />
          </label>
          <label>
            <input type='number' placeholder='Duration (in minutes)' />
          </label>
          <button>Submit</button>
        </form>
        <h2>Movies</h2>
        <div className="cardBox">
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    )
  }
}

export default AddEntry;