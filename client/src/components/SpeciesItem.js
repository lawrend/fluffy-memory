import React from 'react';
import { Item } from 'semantic-ui-react';

export default props => (
  <Item id={props.id}>
    <Item.Content>
      <Item.Header as='a' href='/'>{props.name}</Item.Header>
      <Item.Description>This is having some trubbs!</Item.Description>
    </Item.Content>
  </Item>
)
