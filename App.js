import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#fff',
  // },
});

export default App;
