import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MainPortal from '../containers/MainPortal.js';
import { CSSTransition } from 'react-transition-group';
import '../containers/css/front-page.css';

function Blackness() {

  const timeout = 200;

  const [inProp, setInProp] = useState(false);

    console.log(inProp)
  return (
      <CSSTransition in={inProp} timeout={timeout} className="landing-transitions" unmountOnExit onEnter={() => {setInProp(true)}} onExited={() => {setInProp(false)}}>
        <div >
          <MainPortal />

                 </div>
      </CSSTransition>

  )
}


export default Blackness;




// export default props => (
//   <Transition in={inProp} duration={duration}>
//     <div className="landing-page">
//       <div className="landing-page-text-div" >
//         <Link className="landing-page-text" to="/home">
//             end anger ed
//         </Link>
//       </div>
//     </div>
//   </Transition>
//     )

//
//
// class Blackness extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       active: true,
//     }
//   }
//   componentDidMount() {
//   }

//   render() {
//     return (
//       <div className= {this.state.end ? 'hidden':'shown'}>
//         <div className="landing-page">
//           <Container>
//             <div className="landing-page-text-div">
//               <Link className="landing-page-text" to="/home">
//                   end anger ed
//               </Link>
//             </div>
//           </Container>
//         </div>
//       </div>
//         )
// }
// }

// export default Blackness;


