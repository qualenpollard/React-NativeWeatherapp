/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Home from './components/Home.js';
import {
  View,
  StyleSheet,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <Home />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
