import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ToastExample from './ToastExample';
import {ToastAndroid} from 'react-native';
import {Button, Checkbox, Provider, Toast} from '@ant-design/react-native';

const App = () => {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>ToastExample</Text>
        <Button
          onPress={() => {
            ToastExample.show('ToastExample', ToastExample.SHORT);
          }}>
          ToastExample
        </Button>

        <Button
          onPress={() => {
            ToastAndroid.show('ToastAndroid', ToastAndroid.SHORT);
          }}>
          ToastAndroid
        </Button>
        <Button onPress={() => Toast.fail('This is a toast tips')}>
          Start
        </Button>
        <Checkbox>1232</Checkbox>
      </View>
    </Provider>
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
