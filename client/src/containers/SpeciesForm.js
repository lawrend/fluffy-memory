import React, { Component } from 'react';
import SpeciesData from '../components/SpeciesData.js';
import axios from 'axios';
import { Card, Divider } from 'semantic-ui-react';

//species are stored with a name, id, and status
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
      <div className="homepage">
          this is the species data container
        <Divider />
        <Card.Group centered>
          <SpeciesData species={this.state.species}/>
        </Card.Group>
      </div>
        )
  }
}

export default SpeciesForm
