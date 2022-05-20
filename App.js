import React from 'react';

import {SafeAreaView, Text, TextInput, View, Image} from 'react-native';

const Othercom = props => {
  return (
    <View>
      <Text>Other Component in {props.tech}</Text>
    </View>
  );
};

const CatApp = () => {
  return (
    <View>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
};

const App = () => {
  const getFullName = (fname, lname) => {
    return fname + ' ' + lname;
  };
  return (
    <SafeAreaView>
      <Text>React-Native {getFullName('Animesh', 'Dey')}</Text>
      <View style={{padding: 15}}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="Name"
        />
      </View>
      <View style={{margin: 15}}>
        <Othercom tech="React Native" />
        <Othercom tech="React Native" />
        <Othercom tech="React Native" />
        <Othercom tech="React Native" />
        <Othercom tech="React Native" />
        <Othercom tech="React Native" />
      </View>
      <View style={{padding: 25}}>
        <CatApp />
      </View>
    </SafeAreaView>
  );
};

export default App;
