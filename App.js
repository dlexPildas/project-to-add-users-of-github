/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar color="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
};

export default App;
