import React, { useContext } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';

import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

import Home from './src/screens/home/Home';
import SignIn from './src/screens/signIn/SignIn';
import SignUp from './src/screens/signUp/SignUp';
import ConfirmSignUp from './src/screens/confirmSignUp/ConfirmSignUp';

import AuthContext, { AuthContextProvider } from './src/context/AuthContext';

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
            <Tab.Screen name='Home'>
                {(screenProps) => (
                    <Home
                        {...screenProps}
                        updateAuthState={props.updateAuthState}
                    />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

const Initializing = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
    );
};

const App = () => {

    const { isUserLoggedIn } = useContext(AuthContext);


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
