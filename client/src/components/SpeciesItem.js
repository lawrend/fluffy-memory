import React from 'react';
import { Image, Card } from 'semantic-ui-react';
import '../css/species.css';

export default props => (
  <Card key={props.id} className="species-card" raised={false}>
    <Image src={props.imgsrc} />
    <Card.Content>
      <Card.Header as='a' href='/'><h2>{props.name}</h2></Card.Header>
      <Card.Description>
        <h3>{props.desc}</h3>
        <h5><a target="_blank" rel="noopener noreferrer" href={"https://www.google.com/search?source=hp&q="+ props.name +"&oq=" + props.name}>Search the web for more info</a></h5>
  </Card.Description>
    </Card.Content>
  </Card>
)
