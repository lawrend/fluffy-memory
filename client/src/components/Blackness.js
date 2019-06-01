import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default props => (
  <div className="landing-page">
    <Container>
      <div className="landing-page-text-div">
         <Link className="landing-page-text" to="/home">
      end anger ed
        </Link>
    </div>
    </Container>
  </div>
)
