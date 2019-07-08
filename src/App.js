import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import fetchCats from './actions/fetchCats';
import {connect} from "react-redux";
import CatList from './CatList';
import fetchMoreCats from './saga/fetchMoreCats'


class App extends React.Component {
  render(){
    return (
        <div className="App">
          <button
          className="btn btn-primary"
          onClick = {this.props.fetchCats}
          >
              Fetch cats
          </button>
            <button
                className = "btn btn-secondary"
                onClick = {this.props.fetchMoreCats}
            >
                Fetch more cats
            </button>
            <br/>
          <header>
            <CatList cats = {this.props.cats}/>
          </header>
        </div>
    );
  }

}

const mapStateToProps = (state, ownProp) => ({
    cats: state.cats
})


export default connect(mapStateToProps,{fetchCats, fetchMoreCats})(App);
