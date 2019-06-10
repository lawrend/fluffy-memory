import React from 'react';
import {List, Item, Card } from 'semantic-ui-react';
import '../css/location-item.css';

export default props => (
  <div className="location-detail-card">
  <Card onClick={() => props.handleClick(props.id)}>
    <Card.Content>
      <Card.Header>{props.loc}</Card.Header>
      <Card.Meta>{props.st}</Card.Meta>
      <Card.Description>things that live here in trubbs
    </Card.Description>
    </Card.Content>
  </Card>
</div>
)
