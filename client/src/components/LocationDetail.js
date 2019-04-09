import React from 'react';
import { Card } from 'semantic-ui-react';

export default props => (
  <div>
    <Card>
        Detail:
      Name: {props.loc} - State: {props.state}
    </Card>
  </div>
)

