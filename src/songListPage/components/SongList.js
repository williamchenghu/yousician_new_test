//flow
import React, { PureComponent } from 'react';
import SongGridCmp from './SongGridCmp';
import styled from 'styled-components';

const Logo = styled.div`
  background-color: ${props => props.theme.color.background.black};
  height: ${props => props.theme.space.single.s};
`;

class getSongList extends PureComponent {
  componentDidMount() {
    const { getSongList } = this.props;
    getSongList();
  }

  render() {
    const { songList } = this.props;
    return (
      <Logo>
        {songList.valueSeq().map(song => (
          <SongGridCmp key={song.title} songDetails={song} />
        ))}
      </Logo>
    );
  }
}

export default getSongList;
