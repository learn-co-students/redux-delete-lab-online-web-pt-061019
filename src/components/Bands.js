import React, { Component } from 'react';
import Band from './Band'
// import {manageBand} from '../reducers/manageBand'

// class Bands extends Component {
//
//   // renderBands = () => this.props.bands.map(band => <Band band={band} />)
//
//   render() {
//     return(
//       <div>
//         {this.props.bands.map(band => <Band key={band.name} band={band} deleteBand={props.deleteBand} />)}
//       </div>
//     );
//   }
// };

const Bands = props => {
  const bands = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand} />)

  return (
    <div>{bands}</div>
  )
}

export default Bands;
