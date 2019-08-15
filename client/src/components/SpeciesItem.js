import React from 'react';
import { Item } from 'semantic-ui-react';

export default props => (
  <Item key={props.id}>
    <Item.Content>
      <Item.Header as='a' href='/'><h2>{props.name}</h2></Item.Header>
      <Item.Description><h3>{props.desc}</h3></Item.Description>
    </Item.Content>
  </Item>
)
