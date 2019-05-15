import React from 'react';
import { Card } from 'semantic-ui-react';

import MapsContainer from '../containers/MapsContainer';

export default props => (
    <MapsContainer center={props.center} />
)

