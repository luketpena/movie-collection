import React, {Component} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import {connect} from 'react-redux';

class AddEntry extends Component {

  state = {
    name: '',
    genre: 'Genre',
    date: '',
    img_url: '',
    runtime: '',
  }

  handleChange = (event,prop)=> {
    this.setState({
      [prop]: event.target.value
    })
  }

  handleSubmit = (event)=> {
    event.preventDefault();
    console.log('SUBMIT',this.state);
    this.props.dispatch({type: 'ADD_MOVIE', payload: this.state})
    // this.setState({
    //   name: '',
    //   genre: 'Genre',
    //   date: '',
    //   img_url: '',
    //   runtime: '',
    // })
  }

  populateGenre = ()=> {
    return this.props.genreList.map( (item,i)=>{
      return <option key={i} value={item.id}>{item.name}</option>
    })
  }

  populateCardBox = ()=> {
    return this.props.movieList.map( (item,i)=>{
      return <MovieCard movie={item} key={i}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Add Movie</h2>
        <form onSubmit={this.handleSubmit}>
          {JSON.stringify(this.state)}
          <input type='text' placeholder='Name' value={this.state.name} onChange={(event)=>this.handleChange(event,'name')}/>
          <input type='text' placeholder='Image URL' value={this.state.image_url} onChange={(event)=>this.handleChange(event,'img_url')}/>
          <select value={this.state.genre} onChange={(event)=>this.handleChange(event,'genre')}>
            <option disabled>Genre</option>
            {this.populateGenre()}
          </select>
          <label>
            Release Date:
            <input type='date' value={this.state.date} onChange={(event)=>this.handleChange(event,'date')}/>
          </label>
          <label>
            <input type='number' placeholder='Duration (in minutes)' />
          </label>
          <button>Submit</button>
        </form>
        <h2>Movies</h2>
        <div className="cardBox">
          {this.populateCardBox()}
        </div>
      </div>
    )
  }
}

export default connect(reduxState=>({
  genreList: reduxState.genreReducer,
  movieList: reduxState.movieReducer
}))(AddEntry);