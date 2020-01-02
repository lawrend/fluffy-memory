import React from 'react';
import {List} from 'semantic-ui-react';
import '../css/location-listing.css';

export default props => (
  <List>
    <List.Item>
      <List.Content> <a className="location-listing-name" href={'/location-detail/' + props.name}>{props.name}</a>
      </List.Content>
      <List.Content>
    <List.Icon name='marker' />
      {props.st}
    </List.Content>
  </List.Item>
  </List>

)
