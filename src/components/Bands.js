import React, { Component } from 'react';

class Bands extends Component {

  const bands = this.props.bands.map(band => <Band />)

  render() {
    return(
      <div>
        {bands}
      </div>
    );
  }
};

export default Bands;
