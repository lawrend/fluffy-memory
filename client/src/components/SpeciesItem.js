import React from 'react';
import { Image, Card } from 'semantic-ui-react';

export default props => (
  <Card key={props.id}>
    <Image src={props.imgsrc} />
    <Card.Content>
      <Card.Header as='a' href='/'><h2>{props.name}</h2></Card.Header>
      <Card.Description><h3>{props.desc}</h3></Card.Description>
    </Card.Content>
  </Card>
)
