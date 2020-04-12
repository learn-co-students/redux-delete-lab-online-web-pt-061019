import React, { Component } from 'react';

class Band extends Component {

  // renderBands = band => {
  //   <li>
  //   {band.name} - <button onSubmit={() => this.props.handleOnSubmit}>Delete</button>
  //   </li>
  // }

  render() {
    return(
      <div>
        {this.props.band.name}
      </div>
    );
  }
};

export default Band;
