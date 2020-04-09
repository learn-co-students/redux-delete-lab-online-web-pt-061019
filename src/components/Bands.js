import React, { Component } from 'react';
import Band from "./Band";

export default class Bands extends Component {
  render() {
    const bands = this.props.bands.map((band) => (
      <Band name={band.name} id={band.id} deleteBand={this.props.deleteBand} />
    ));
    return (
      <div>
        <ul>{bands}</ul>
      </div>
    );
  }
}