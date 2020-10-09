/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Tester, TestHookStore} from 'cavy';

const testHookStore = new TestHookStore();
import React, {Component} from 'react';

import TestingApp2 from './App';


class TestingApp extends Component {
    render() {
        return (
            <Tester specs={[]} store={testHookStore} waitTime={1000}>
                <TestingApp2 />
            </Tester>

        )
    }
}

AppRegistry.registerComponent('blankproject', () => TestingApp);
