// @flow
import { connect } from 'react-redux';
import { getSongList, putRating, restSuccessRating } from '../../duck/songlist';
import SongList from '../components/SongList';

export default connect(
  state => ({
    songList: state.songlist.get('songList'),
    isLoading: state.songlist.get('isLoading'),
    isSuccessRating: state.songlist.get('isSuccessRating')
  }),
  { getSongList, putRating, restSuccessRating }
)(SongList);
