import React, { useEffect, useState } from 'react';

import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';

import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './src/screens/landing/Landing';
import ClientHome from './src/screens/client-home/ClientHome';
import LogIn from './src/screens/log-in/LogIn';
import SignUp from './src/screens/sign-up/SignUp';
import ConfirmSignUp from './src/screens/confirm-sign-up/ConfirmSignUp';

Amplify.configure(awsconfig);

const AuthenticationStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthenticationNavigator = (props) => {


    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="LogIn">
                {(screenProps) => (
                    <LogIn
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
        <AppStack.Navigator>
            <AppStack.Screen name="ClientHome">
                {(screenProps) => (
                    <ClientHome
                        {...screenProps}
                        updateAuthState={props.updateAuthState}
                    />
                )}
            </AppStack.Screen>
        </AppStack.Navigator>
    );
};

const Initializing = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <ActivityIndicator size="large" color="tomato" />
        </View>
    );
};

const App = () => {

    const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');

    useEffect(() => {
        checkAuthState();
    });

    const checkAuthState = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            console.log('✅ User is signed in');
            setUserLoggedIn('loggedIn');
        } catch (err) {
            console.log('❌ User is not signed in');
            setUserLoggedIn('loggedOut');
        }
    };
    function updateAuthState(isUserLoggedIn) {
        setUserLoggedIn(isUserLoggedIn);
    }


    return (
        <NavigationContainer>
            {isUserLoggedIn === 'initializing' && <Initializing />}
            {isUserLoggedIn === 'loggedIn' && (
                <AppNavigator updateAuthState={updateAuthState} />
            )}
            {isUserLoggedIn === 'loggedOut' && (
                <AuthenticationNavigator updateAuthState={updateAuthState} />
            )}
        </NavigationContainer>
    );
};

export default App;
