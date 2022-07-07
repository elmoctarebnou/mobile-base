import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppTextInput from '../../components/app-text-input/AppTextInput';
import AppButton from '../../components/app-button/AppButton';

import getStyles from './LogIn.style';


const LogIn = (props) => {

    const { navigation, updateAuthState } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const styles = StyleSheet.create(getStyles());

    const logIn = async () => {
        try {
            await Auth.signIn(username, password);
            console.log('✅ Success');
            updateAuthState('loggedIn');
        } catch (error) {
            console.log('❌ Error loging in...', error);
        }
    }
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Sign in to your account</Text>
                <AppTextInput
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    leftIcon="account"
                    placeholder="Enter username"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppTextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    leftIcon="lock"
                    placeholder="Enter password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType="password"
                />
                <AppButton title="Login" onPress={logIn} />
                <View style={styles.footerButtonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={styles.forgotPasswordButtonText}>
                            Don't have an account? Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LogIn;
