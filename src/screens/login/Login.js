import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import getStyles from './Login.style';

const styles = StyleSheet.create(getStyles());

const Login = () => {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
        </View>
    );
};

export default Login;
