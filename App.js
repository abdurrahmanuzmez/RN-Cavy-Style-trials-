import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
import Index from './src/index'

import {Tester, TestHookStore} from 'cavy';

const testHookStore = new TestHookStore();

import exampleSpec from "./specs/exampleSpec";

export default function App() {
  return (
      <View>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
          <Text>mobil test</Text>
              <Tester specs={[exampleSpec]} store={testHookStore} waitTime={1000}>
                      <Index/>
              </Tester>


      </View>
  );
}

AppRegistry.registerComponent('blankproject', () => App);
