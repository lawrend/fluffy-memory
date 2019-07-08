import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  selectedProtectedArea: state.locations.selectedProtectedArea,
})

// const mapDispatchToProps = dispatch => ({
//   selectedStSpeciesGetter(st) {
//     return dispatch(getSelectedStSpecies(st))
//   },
// })


class LocationDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("protected area" + this.props.selectedProtectedArea)

    return(
      <div>
        <h1>STILL HERE BRUH!!!!</h1>
        <h3>{this.props.selectedProtectedArea.name}</h3>
        <h4><a href='/home'>Home</a></h4>
      </div>
    )
  }
}




export default connect(mapStateToProps)(LocationDetail);
