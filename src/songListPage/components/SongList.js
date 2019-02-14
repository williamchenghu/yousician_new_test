// @flow
import React, { PureComponent } from 'react';
import SongGridCmp from './SongGridCmp';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import type { Songs } from '../../common/type/songs';

const SongPage = styled.div`
  padding:${props => props.theme.space.inline.l}
  max-width: 80%;
  margin: auto;
`;

const StyledSearchBar = styled(InputBase)`
  width: 80%;
  background: ${props => props.theme.color.background.light};
  padding: ${props => props.theme.space.square.s};
  margin: ${props => props.theme.space.inline.s};
`;

type Props = {
  getSongList: Function,
  songList: Songs
};
type State = {
  searchMsg: string
};
class getSongList extends PureComponent<Props, State> {
  state: State = {
    searchMsg: ''
  };

  componentDidMount() {
    const { getSongList } = this.props;
    getSongList();
  }

  render() {
    const { songList } = this.props;
    const { searchMsg } = this.state;
    return (
      <SongPage>
        <StyledSearchBar
          placeholder="Search your favourite songs here..."
          onChange={e => this.setState({ searchMsg: e.target.value })}
        />
        {songList
          .valueSeq()
          .map(
            song =>
              song.title.toUpperCase().includes(searchMsg.toUpperCase()) && (
                <SongGridCmp key={song.title} songDetails={song} onChangeRating={() => {}} />
              )
          )}
      </SongPage>
    );
  }
}

export default getSongList;
