import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppTextInput from '../../components/app-text-input/AppTextInput';
import AppButton from '../../components/app-button/AppButton';

import getStyles from './ConfirmSignUp.style';


const ConfirmSignUp = (props) => {

    const { navigation } = props;

    const [username, setUsername] = useState('');
    const [authCode, setAuthCode] = useState('');

    const styles = StyleSheet.create(getStyles());

    const confirmSignUp = async () => {
        try {
            await Auth.confirmSignUp(username, authCode);
            console.log('✅ Code confirmed');
            navigation.navigate('LogIn');
        } catch (error) {
            console.log(
                '❌ Verification code does not match. Please enter a valid verification code.',
                error.code
            );
        }
    };
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Confirm Sign Up</Text>
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
                    value={authCode}
                    onChangeText={(text) => setAuthCode(text)}
                    leftIcon="numeric"
                    placeholder="Enter verification code"
                    keyboardType="numeric"
                />
                <AppButton title="Confirm Sign Up" onPress={confirmSignUp} />
            </View>
        </SafeAreaView>
    );
};

export default ConfirmSignUp;
