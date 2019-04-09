import React from 'react';
import { Card } from 'semantic-ui-react';

export default props => (
  <Card>
    <Card.Content>
      <Card.Header>
      Name: {props.name}
      </Card.Header>
    </Card.Content>
  </Card>
)
