import React from 'react';

export default props => (
  <div>
    <h3>Name: <a href={'/location-detail/' + props.name}>{props.name}</a></h3>
    <h5>{props.st}</h5>

  </div>
)
