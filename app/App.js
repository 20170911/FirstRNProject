import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import ToastExample from './ToastExample';
import {ToastAndroid} from 'react-native';

const App = props => {
  return (
    <View style={styles.container}>
      <Text>ToastExample</Text>
      <Button
        title={'ToastExample'}
        onPress={() => {
          ToastExample.show('ToastExample', ToastExample.SHORT);
        }}
      />

      <Button
        title={'ToastAndroid'}
        onPress={() => {
          ToastAndroid.show('ToastAndroid', ToastAndroid.SHORT);
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
