import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  // renderBands = () => this.props.bands.map(band => <Band band={band} />)

  render() {
    return(
      <div>
        {this.props.bands.map(band => <Band key={band.name} band={band} />)}
      </div>
    );
  }
};

export default Bands;
