/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import AppReducer from './src/reducers/index';
import {AppNavigator, middleware} from './src/navigators/AppNavigator';

const store = createStore(AppReducer, applyMiddleware(middleware));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}
