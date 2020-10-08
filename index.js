/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Tester, TestHookStore} from 'cavy';

const testHookStore = new TestHookStore();
import React, {Component} from 'react';

import TestingApp from './App';

class AppWraper extends Component {
    render() {
        return (
            <Tester specs={[]} store={testHookStore} waitTime={1000}>
                <TestingApp />
            </Tester>

        )
    }
}

AppRegistry.registerComponent('blankproject', () => TestingApp);
