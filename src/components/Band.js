import React, { Component } from 'react';

class Band extends Component {

  // renderBands = band => {
  //   <li>
  //   {band.name} - <button onSubmit={() => this.props.handleOnSubmit}>Delete</button>
  //   </li>
  // }

  handleOnClick = (event) => {
    event.preventDefault();
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <li>
        {this.props.name} - <button onClick={this.handleOnClick}>Delete</button>
      </li>
    );
  }
};

export default Band;
