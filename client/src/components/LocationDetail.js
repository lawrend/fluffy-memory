import React from 'react';
import { List, Container, Card } from 'semantic-ui-react';

import MapsContainer from '../containers/MapsContainer';

export default props => (
    <MapsContainer center={props.center}  />
)

