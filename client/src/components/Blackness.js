import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import { getLocations } from '../store/actions/getLocations.js';
import { getSpecies } from '../store/actions/getSpecies.js';
import { connect } from 'react-redux';
import '../css/front-page.css';

const mapDispatchToProps = dispatch => ({
  locationGetter() {
    return dispatch(getLocations)
  },
  speciesGetter() {
    return dispatch(getSpecies)
  },
})

//spent time messing with transitions; does not work yet and i had other stuff to do but may come back to it.
class Blackness extends Component {
  componentDidMount () {
    this.props.locationGetter()
    this.props.speciesGetter()
  }

  render() {
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

}

export default connect(null, mapDispatchToProps)(Blackness);

