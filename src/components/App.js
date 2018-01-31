import React from 'react';
import {allPets} from '../data/pets.js'
import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      pets: allPets,
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  render() {
    console.log('i am rendering app')
    console.log(this.state.adoptedPets);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser allPets={this.state.pets} adoptPet={this.adoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  adoptPet = (pet) => {

    let previousPets = this.state.adoptedPets;
    if (previousPets.includes(pet)) {
      previousPets.splice(previousPets.indexOf(pet), 1)
      this.setState({
        adoptedPets: previousPets
      })

    } else {
      this.setState({
        adoptedPets: [...previousPets, pet]
      })
    }
  }
}

export default App;
