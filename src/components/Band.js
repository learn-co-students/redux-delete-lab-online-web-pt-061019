import React, { Component } from 'react';

class Band extends Component {

  // renderBands = band => {
  //   <li>
  //   {band.name} - <button onSubmit={() => this.props.handleOnSubmit}>Delete</button>
  //   </li>
  // }

  render() {
    return(
      <li>
        {this.props.band.name}
      </li>
    );
  }
};

export default Band;
