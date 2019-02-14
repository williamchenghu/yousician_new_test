import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ThemeProvider from './common/theme/ThemeProvider';
import configureStore from './store';
import SongListContainer from './songListPage/containers/SongListContainer';
import ErrorMessage from './message/errorMessage/ErrorMessageContainer';

class App extends Component {
  componentDidMount = () => {};
  render() {
    return (
      <Provider store={configureStore()}>
        <ThemeProvider>
          <SongListContainer />
          <ErrorMessage />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
