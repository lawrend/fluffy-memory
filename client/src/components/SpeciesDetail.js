import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

export default props => (
  <Grid.Row columns={1}>
    <Grid.Column>
  <Card id={props.id} >
    <Card.Content>
      <Card.Header>
      Name: {props.name}
      </Card.Header>
        Having Trubbs!
    </Card.Content>
  </Card>
</Grid.Column>
</Grid.Row>
)
