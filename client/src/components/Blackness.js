import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import '../css/front-page.css';

//spent time messing with transitions; does not work yet and i had other stuff to do but may come back to it.
function Blackness() {

  // const timeout = 200;

  // const [inProp, setInProp] = useState(true);

  // console.log(inProp)
  // return (
  //   <CSSTransition in={inProp} timeout={timeout} className="landing-transitions" unmountOnExit onEnter={() => {setInProp(true)}} onExited={() => {setInProp(false)}}>
  //     <div>
  return (
    <div className="landing-page">
      <div className="landing-page-text-div">
        <Link className="landing-page-text" to="/home">
            end anger ed
        </Link>
      </div>
    </div>
    // </div>
    //     </CSSTransition>
  )
}

export default Blackness;

