// @flow
import React, { PureComponent } from 'react';
import SongGridCmp from './SongGridCmp';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import type { Songs, Song } from '../../common/type/songs';
import LevelDropdownOptionList from '../../common/utils/list';
import StyledSelect from '../../common/styled_components/SimpleSelect';
import StyledSearchBar from '../../common/styled_components/StyledSearchBar';
import ProgressBar from '../../common/styled_components/ProgressBar';
import PaginationCmp from '../../common/components/PaginationCmp';
import SnackbarCmp from '../../common/components/SnackBarCmp';

const SongPage = styled.div`
  padding:${props => props.theme.space.inline.l}
  max-width: 80%;
  margin: auto;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
}

`;

const ActionBar = styled.div`
  width: 100%;
  display: inline-flex;
  & > *:first-child {
    width: 65%;
  }
  & > *:last-child {
    width: 30%;
  }
  @media only screen and (max-width: 768px) {
    display: inline-block;
    & > *:first-child {
      width: 100%;
    }
    & > *:last-child {
      width: 100%;
    }
  }
`;

type Props = {
  getSongList: Function,
  putRating: Function,
  songList: Songs,
  isLoading: boolean,
  isSuccessRating: boolean,
  restSuccessRating: Function
};
type State = {
  searchMsg: string,
  level: number,
  currentPageNum: number
};
class SongList extends PureComponent<Props, State> {
  state: State = {
    searchMsg: '',
    level: 15,
    currentPageNum: 1
  };

  componentDidMount = () => {
    const { getSongList } = this.props;
    getSongList();
  };

  searchFilter = (song: Song, searchMsg: string) =>
    song.title.toUpperCase().includes(searchMsg.toUpperCase());

  levelFilter = (song: Song, level: number) => (level === 15 ? true : song.level <= level + 1);

  pageFilter = (currentPageNumber: number, index: number): boolean =>
    (currentPageNumber - 1) * 5 <= index && index < currentPageNumber * 5;

  prepareSongList = (songList: Songs, searchMsg: string, level: number) =>
    songList
      .valueSeq()
      .filter(song => this.searchFilter(song, searchMsg) && this.levelFilter(song, level))
      .toArray();

  onChangeRating = (songDetails: Song) => (rate: number) => {
    const { putRating } = this.props;
    putRating({ ...songDetails, rating: rate });
  };

  render() {
    const { songList, isLoading, isSuccessRating, restSuccessRating } = this.props;
    const { searchMsg, level, currentPageNum } = this.state;
    return (
      <SongPage>
        <ActionBar>
          <StyledSearchBar
            placeholder="Search your favourite songs here..."
            onChange={e => this.setState({ searchMsg: e.target.value })}
          />
          <StyledSelect
            onChange={selectedOption => this.setState({ level: selectedOption.value })}
            placeholder="Select level"
            classNamePrefix="react-select"
            name="simpleSelect"
            options={LevelDropdownOptionList()}
            isSearchable={false}
            defaultValue={LevelDropdownOptionList().pop()}
          />
        </ActionBar>
        {isLoading && <ProgressBar />}
        {!isLoading && this.prepareSongList(songList, searchMsg, level).length < 1 && (
          <div>No results to show:(</div>
        )}
        {this.prepareSongList(songList, searchMsg, level).map(
          (song, index) =>
            this.pageFilter(currentPageNum, index) && (
              <SongGridCmp
                key={song.title}
                songDetails={song}
                onChangeRating={this.onChangeRating}
              />
            )
        )}
        <PaginationCmp
          currentPageNum={currentPageNum}
          listLength={this.prepareSongList(songList, searchMsg, level).length}
          onChangeCurrentPage={pageNumber => {
            this.setState({ currentPageNum: pageNumber });
          }}
        />
        <SnackbarCmp
          status={isSuccessRating}
          message="Successful rating"
          onClose={restSuccessRating}
          type="success"
        />
      </SongPage>
    );
  }
}

export default SongList;
