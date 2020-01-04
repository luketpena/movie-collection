import React, {Component} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import {connect} from 'react-redux';

class AddEntry extends Component {

  state = {
    name: '',
    genre: 'Genre',
    date: '',
    runtime: '',
  }

  handleChange = (event,prop)=> {
    this.setState({
      [prop]: event.target.value
    })
  }

  populateGenre = ()=> {
    return this.props.genreList.map( (item,i)=>{
      return <option key={i} value={item.id}>{item.name}</option>
    })
  }

  render() {
    return (
      <div>
        <h2>Add Movie</h2>
        {JSON.stringify(this.state)}
        <form>
          <input type='text' placeholder='Name' value={this.state.name} onChange={(event)=>this.handleChange(event,'name')}/>
          <select value={this.state.genre} onChange={(event)=>this.handleChange(event,'genre')}>
            <option disabled>Genre</option>
            {this.populateGenre()}
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

export default connect(reduxState=>({
  genreList: reduxState.genreReducer
}))(AddEntry);