import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import codePush from "react-native-code-push";
 
export default class App extends React.Component {

  componentWillMount() {
    // 更新重启之后，防止回滚
    codePush.notifyAppReady();
    // 在加载完了可以允许重启
    codePush.disallowRestart();
  }
 
  componentDidMount() {
    //在加载完了可以允许重启
    codePush.allowRestart();
    codePush.sync({ installMode: codePush.InstallMode.IMMEDIATE });
  }
 
  render() {
    return (
      <View style={{ backgroundColor: 'white', height: 100, marginTop: 100 }}>
        <TouchableOpacity onPress={this.onButtonPress}>
          <Text style={{ color: 'red' }}>Check for updates</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 30 }}>测试文案</Text>
      </View>
    )
  }
 
  onButtonPress() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }
}
let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL }
 
App = codePush(codePushOptions)(App)