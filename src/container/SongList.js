//flow
import React, { Component } from 'react';

export class SongsListContainer extends Component {
  componentDidMount = () => {
    this.props.getSongList();
  };

  render() {
    return <div>test</div>;
  }
}
export default SongsListContainer;
