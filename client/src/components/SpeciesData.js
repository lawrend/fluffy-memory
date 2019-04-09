import React, { Component } from 'react';
import SpeciesItem from '../components/SpeciesItem.js'

const SpeciesData = (props) => {
  return props.species.map(spec =>
    <SpeciesItem name={spec.name} key={spec.id}/>)
};


export default SpeciesData
// class SpeciesData extends Component {
//   render(){
//     return(
//       <div>
//           this is the species item container
//         <SpeciesItem />
//       </div>
//     )
//   }
// }

// export default SpeciesData
