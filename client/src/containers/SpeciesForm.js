import React, { Component } from 'react';
import SpeciesData from '../components/SpeciesData.js';
import axios from 'axios';

class SpeciesForm extends Component {
  state = {
    species: [],
  }

  componentDidMount() {
    axios.get('/api/species')
      .then(resp => {
        const species = resp.data;
        this.setState({species})
      })
  }

  render(){
    console.log(this.state.species)
    return(
      <div>
          this is the species data container
        <SpeciesData species={this.state.species}/>
      </div>
    )
  }
}

export default SpeciesForm
