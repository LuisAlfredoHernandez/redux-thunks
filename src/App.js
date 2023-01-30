import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import miThunk from './thunk'


class App extends Component {
  constructor(props) {
    super(props)
    const { miThunk } = props
    miThunk('lala')
    console.log( props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  miThunk: payload => dispatch(miThunk(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
