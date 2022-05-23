import React from 'react';
import {View, Text, StyleSheet, StatusBar, Appearance} from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';

const App = () => {
  // const colorScheme = Appearance.getColorScheme();
  // console.log(colorScheme);
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <Header />
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#fff',
  // },
});

export default App;
