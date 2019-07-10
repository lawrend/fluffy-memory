import React from 'react';
import { Card } from 'semantic-ui-react';

export default props => (
  <Card id={props.id}>
    <Card.Content>
      <Card.Header>
      Name: {props.name}
      </Card.Header>
        Having Trubbs!
    </Card.Content>
  </Card>
)
