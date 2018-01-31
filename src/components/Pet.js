import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdopted: false
    }
  }

  render() {
    console.log('woah i am in pet.js');
    let adoptButton = null;

    if (this.state.isAdopted ===true){
      adoptButton = <button className="ui disabled button" onClick={this.handleAdoptPet}>Already adopted</button>
    } else {
      adoptButton = <button className="ui primary button" onClick={this.handleAdoptPet} >Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet {this.props.pet.name} {this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptButton}
        </div>
      </div>
    );
  }

  handleAdoptPet = (e) => {
    e.preventDefault()

    this.setState(previousState => {
      return {
        isAdopted: !previousState.isAdopted
      }
    })
    this.props.adoptPet(this.props.pet)
  }
}

// Should have a pet prop. Use the attributes in this data to render the pet card correctly. It should show the pet's name, type, age and weight. Based on the pet's gender, the component also needs to contain either a male (♂) or female (♀) symbol.
// Should have an isAdopted prop. Using this prop, render the correct button in the pet's card; if the pet is adopted, show the disabled button. Otherwise, show the primary button to adopt the pet.
// Should have an onAdoptPet callback prop. This callback prop gets called with the pet's id when the user clicks the adopt pet button — not when they click the disabled button!

export default Pet;
