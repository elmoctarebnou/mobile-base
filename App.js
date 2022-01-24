import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Octicons, AntDesign } from 'react-native-vector-icons';

import Home from './src/screens/home/Home';
import Login from './src/screens/login/Login';
import Signup from './src/screens/signup/Signup';

const Tab = createBottomTabNavigator();

export default function App() {
    const [isAthenticated, setIsAuthenticated] = useState(false);

    const renderTabs = () => {
        if (isAthenticated) {
            return (
                <>
                    <Tab.Screen name="Home" component={Home} />
                </>
            );
        } else {
            return (
                <>
                    <Tab.Screen name="Log In" component={Login} />
                    <Tab.Screen name="Sign Up" component={Signup} />
                </>
            );
        }
    };

    const getTabAppearance = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Log In') {
                return <AntDesign name="login" color={color} size={size} />;
            }
            if (route.name === 'Sign Up') {
                return <Octicons name="sign-in" color={color} size={size} />;
            }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
    });

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={getTabAppearance}>
                {renderTabs()}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
