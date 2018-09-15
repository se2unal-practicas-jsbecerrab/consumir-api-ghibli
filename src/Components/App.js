import React, { Component } from 'react';
import logo from '../Resources/logo.svg';
import '../Styles/App.css';
import EmpleadoList from '../Components/FilmList'

class App extends Component {

  constructor(props) {
    	super(props)
        this.state = { films: [] }
    }
    componentWillMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => {
        return response.json()
      })
      .then((films) => {
        console.log(films)
        this.setState({ films: films })
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Render studio Ghibli API</h1>
        </header>

          <EmpleadoList listado={this.state.films}/>
        </div>
    );
  }
}

export default App;
