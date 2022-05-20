/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, Text} from 'react-native';

const App = () => {
  const getFullName = (fname, lname) => {
    return fname + ' ' + lname;
  };
  return (
    <SafeAreaView>
      <Text>React-Native {getFullName('Animesh', 'Dey')}</Text>
    </SafeAreaView>
  );
};

export default App;
