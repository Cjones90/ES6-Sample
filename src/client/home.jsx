'use strict';

import React from 'react';
import DOM from 'react-dom';
import Add from './addLocation.jsx';
import Map from './map.jsx';
import Search from './searchLocation.jsx';

import './styles/home.less';

class Component extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        Locations
        <Map />
        <Add />
        <Search />
      </div>
    )
  }
}

export default Component


DOM.render(<Component />, document.getElementById('index'))
