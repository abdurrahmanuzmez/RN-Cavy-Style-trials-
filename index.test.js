import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Tester, TestHookStore } from 'cavy';
import ExampleSpec from './specs/exampleSpec';

import App from './App.js';


const testHookStore = new TestHookStore();

class AppWrapper extends Component {
  render() {
    return (
        <Tester specs={[App]} store={testHookStore} waitTime={1000}
                          startDelay={3000}>
          <App />
        </Tester>

      );
  }
}

AppRegistry.registerComponent('yourAppName', () => AppWrapper);
