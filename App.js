import React, { useContext, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator, AuthenticationNavigator } from './navigation';
import { NativeBaseProvider } from 'native-base';




import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

import Initializing from './src/screens/initializing/Initializing';

import {
    Context as AuthContext,
    Provider as AuthContextProvider
} from './src/context/AuthContext';

Amplify.configure(awsconfig);

const App = () => {

    const { state,  checkAuthState } = useContext(AuthContext);
    const { isUserLoggedIn } = state;

    useEffect(async() => {
        await checkAuthState()
        console.log({state})
    }, [])

    return (
        <NavigationContainer>
            <NativeBaseProvider>
                {isUserLoggedIn === 'initializing' && <Initializing />}
                {isUserLoggedIn === 'loggedIn' && <AppNavigator/>}
                {isUserLoggedIn === 'loggedOut' && <AuthenticationNavigator/>}
            </NativeBaseProvider>
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
