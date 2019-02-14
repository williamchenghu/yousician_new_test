// @flow
import { connect } from 'react-redux';
import { getSongList, putRating } from '../../duck/songlist';
import SongList from '../components/SongList';

export default connect(
  state => ({
    songList: state.songlist.get('songList'),
    isLoading: state.songlist.get('isLoading')
  }),
  { getSongList, putRating }
)(SongList);
