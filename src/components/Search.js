import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  return (
    <View style={styles.container}>
      <FontAwesome6 name={'search'} size={25} style={{marginTop: 10}} />
      <TextInput style={styles.input} placeholder="Resturants, food" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 8,
    marginHorizontal: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    elevation: 5,
    shadowOpacity: 0.1,
    padding: 10,
    borderRadius: 40,
    overflow: 'hidden',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    minWidth: 50,
  },
});

export default Search;
