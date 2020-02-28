import React, { Component } from 'react';
import firebase from './firebase';
import Header from './Header';
import Card from './Card';
import './App.css';

class App extends Component{
  constructor() {
    super ();
    this.state = {
      mushroomSpecies: []
    }
  }

  componentDidMount () {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const mushroomObj = response.val();
      // We are massaging the data to create an array of objects, that is easy to deal with, a good boy data set. looks ni
      const arr = Object.values(mushroomObj);

      let mushroomSpecies = [...this.state.mushroomSpecies]

      arr.map((mush, i) => {
         return mushroomSpecies.push({ image: mush.img, key: i, toxic: mush.toxic  });
      })

      this.setState({ mushroomSpecies: mushroomSpecies})
    });
  }

  
    


  render(){
      return (
        <div>
         <Header />
         <Card images={this.state.mushroomSpecies} />
        </div>
      );
  }
}

export default App;