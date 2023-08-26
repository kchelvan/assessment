import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import AppNavigator from './navigation/AppNavigator';
import baseReducer from './store/reducers/base';

const rootReducer = combineReducers({
  base: baseReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
