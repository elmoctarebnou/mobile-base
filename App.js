import React, { useContext, useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { View } from 'react-native';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';


import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

import Initializing from './src/screens/initializing/Initializing';
import SignIn from './src/screens/signIn/SignIn';
import SignUp from './src/screens/signUp/SignUp';
import ConfirmSignUp from './src/screens/confirmSignUp/ConfirmSignUp';
import Home from './src/screens/home/Home';
import Accounts from './src/screens/accounts/Accounts';
import Profile from './src/screens/profile/Profile';

import {
    Context as AuthContext,
    Provider as AuthContextProvider
} from './src/context/AuthContext';

Amplify.configure(awsconfig);


const AuthenticationStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthenticationNavigator = (props) => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="SignIn">
                {(screenProps) => (
                    <SignIn
                        {...screenProps}
                        updateAuthState={props.updateAuthState}
                    />
                )}
            </AuthenticationStack.Screen>
            <AuthenticationStack.Screen
                name="SignUp"
                component={SignUp}
            />
            <AuthenticationStack.Screen
                name="ConfirmSignUp"
                component={ConfirmSignUp}
            />
        </AuthenticationStack.Navigator>
    );
};

const AppNavigator = (props) => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name='Accounts'
                component={Accounts}
                options={{
                    tabBarLabel: 'Accounts',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bank-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};



const App = () => {

    const { state,  checkAuthState } = useContext(AuthContext);
    const { isUserLoggedIn } = state;

    useEffect(async() => {
        await checkAuthState()
        console.log({state})
    }, [])

    return (
        <NavigationContainer>
            {isUserLoggedIn === 'initializing' && <Initializing />}
            {isUserLoggedIn === 'loggedIn' && <AppNavigator/>}
            {isUserLoggedIn === 'loggedOut' && <AuthenticationNavigator/>}
        </NavigationContainer>
    );
};

export default () => {
    return (
        <AuthContextProvider>
            <App/>
        </AuthContextProvider>
    )
}
