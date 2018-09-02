import React from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import ProfileScreen from '../screens/Profile';

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const RootNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
    Main: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export {RootNavigator, AppNavigator, middleware};
