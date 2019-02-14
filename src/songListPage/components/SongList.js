// @flow
import React, { PureComponent } from 'react';
import SongGridCmp from './SongGridCmp';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import type { Songs } from '../../common/type/songs';
import LevelDropdownOptionList from '../../common/utils/list';
import StyledSelect from '../../common/styled_components/SimpleSelect';
import StyledSearchBar from '../../common/styled_components/StyledSearchBar';

const SongPage = styled.div`
  padding:${props => props.theme.space.inline.l}
  max-width: 80%;
  margin: auto;
`;

const ActionBar = styled.div`
  width: 100%;
  display: inline-flex;
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
        <ActionBar>
          <StyledSearchBar
            placeholder="Search your favourite songs here..."
            onChange={e => this.setState({ searchMsg: e.target.value })}
          />
          <StyledSelect
            onChange={selectedOption => {}}
            className="basic-single"
            classNamePrefix="react-select"
            name="simpleSelect"
            options={LevelDropdownOptionList()}
            isSearchable={false}
          />
        </ActionBar>

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
