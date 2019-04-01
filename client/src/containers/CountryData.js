import React, { Component } from 'react';
import CountryItem from '../containers/CountryData.js'

class CountryData extends Component {
  render(){
    return(
      <div>
          this is the country item container
        <CountryItem />
      </div>
    )
  }
}

export default CountryData
