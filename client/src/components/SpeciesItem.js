import React from 'react';
import { Item } from 'semantic-ui-react';

export default props => (
  <Item id={props.id}>
    <Item.Content>
      <Item.Header as='a' href='/'><h2>{props.name}</h2></Item.Header>
      <Item.Description><h3>This is having some trubbs! It is {props.status}!</h3></Item.Description>
    </Item.Content>
  </Item>
)
