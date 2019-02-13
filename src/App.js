import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ThemeProvider from './common/theme/ThemeProvider';
import configureStore from './store';
import SongListContainer from './container/SongListContainer';

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
