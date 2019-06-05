import React from 'react';
import './css/front-page.css';
import { Link } from 'react-router-dom';

const MainPortal = (props) => {
  return(
    <div className="landing-page">
      <div className="landing-page-text-div">
        <Link className="landing-page-text" to="/home">
            end anger ed
        </Link>
      </div>
    </div>
  )
}
export default MainPortal
