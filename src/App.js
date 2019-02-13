import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ThemeProvider from './common/theme/ThemeProvider';
import main from './common/theme/theme';
import configureStore from './store';
import SongListContainer from './songListPage/containers/SongListContainer';

class App extends Component {
  componentDidMount = () => {};
  render() {
    return (
      <Provider store={configureStore()}>
        <ThemeProvider>
          <SongListContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
