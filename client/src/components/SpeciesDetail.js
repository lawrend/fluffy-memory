import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default props => (
  <Card id={props.id} >

<Link to='/'>
    <Card.Content>
      <Card.Header>
      Name: {props.name}
      </Card.Header>
        Having Trubbs!
    </Card.Content>

</Link>
  </Card>
)
