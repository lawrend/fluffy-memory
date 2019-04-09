import React from 'react';
import { Card } from 'semantic-ui-react';

export default props => (

  <Card>
    <Card.Content>
      <Card.Header>{props.loc}</Card.Header>
      <Card.Meta>{props.state}</Card.Meta>
      <Card.Description>things that live here in trubbs</Card.Description>
    </Card.Content>
  </Card>
)
