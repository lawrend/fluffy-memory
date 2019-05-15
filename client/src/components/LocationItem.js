import React from 'react';
import { Card } from 'semantic-ui-react';
import LocationDetail from './LocationDetail';

export default props => (

  <Card onClick={() => props.handleClick(props.id)}>
    <Card.Content>
      <Card.Header>{props.loc}</Card.Header>
      <Card.Meta>{props.st}</Card.Meta>
      <Card.Description>things that live here in trubbs
    </Card.Description>
    </Card.Content>
  </Card>

)
