import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Feather, AntDesign } from '@expo/vector-icons';

import SignIn from './src/screens/signIn/SignIn';
import SignUp from './src/screens/signUp/SignUp';
import ConfirmSignUp from './src/screens/confirmSignUp/ConfirmSignUp';
import Home from './src/screens/home/Home';
import Account from './src/screens/account/Account';
import Support from './src/screens/support/Support';
import Profile from './src/screens/profile/Profile';


const AuthenticationStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthenticationNavigator = (props) => {
    return (
        <AuthenticationStack.Navigator >
            <AuthenticationStack.Screen 
                name="Sign In"
                component={SignIn}
                options={{header: () => null}}
            />
            <AuthenticationStack.Screen
                name="Sign Up"
                component={SignUp}
                options={{header: () => null}}
            />
            <AuthenticationStack.Screen
                name="Confirm Sign Up"
                component={ConfirmSignUp}
            />
        </AuthenticationStack.Navigator>
    );
};

const HomeNavigator = (props) => {
    return (
        <AuthenticationStack.Navigator
            screenOptions={{
                headerShown: true 
            }}
        >
            <AuthenticationStack.Screen 
                name="Home"
                component={Home}
                options={{header: () => null}}
            />
            <AuthenticationStack.Screen
                name="Account"
                component={Account}
            />
        </AuthenticationStack.Navigator>
    ) 
}

const AppNavigator = (props) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen
                name='HomeNavigator'
                component={HomeNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Support'
                component={Support}
                options={{
                    tabBarLabel: 'Support',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="questioncircleo" size={size} color={color} />
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


export { AppNavigator, AuthenticationNavigator };