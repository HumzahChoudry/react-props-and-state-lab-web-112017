import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    console.log('i am in petbrowser now!');
    let pets = this.props.allPets.map(pet =>
      <Pet pet={pet} key={pet.id} adoptPet={this.props.adoptPet}/>)
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

export default PetBrowser;
