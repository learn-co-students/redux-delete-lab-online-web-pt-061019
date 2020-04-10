import React, { Component } from 'react';

class Band extends Component {

  const allBands = band =+ {
    <div>
    {band.text} - <button onSubmit={() => this.props.handleOnSubmit}>Delete</button>
    </div>
  }

  render() {
    return(
      <div>
        Band Component
      </div>
    );
  }
};

export default Band;
