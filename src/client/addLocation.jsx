'use strict';

import React from 'react';
import DOM from 'react-dom';

class Component extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  submitInfo(){
      let addr = DOM.findDOMNode(this.refs.addr).value
      let city = DOM.findDOMNode(this.refs.city).value
      let state = DOM.findDOMNode(this.refs.state).value



      let location = {addr: addr, city: city, state: state}
      //do something
      $(document.body).trigger('infosubmit', location)
  }

  render() {
    return (
      <div>
        <input placeholder="Address" ref="addr" defaultValue="" type="text"/>
        <input placeholder="City" ref="city" defaultValue="Simi Valley" type="text"/>
        <input placeholder="State" ref="state" defaultValue="CA" type="text"/>
        <button onClick={this.submitInfo.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default Component
