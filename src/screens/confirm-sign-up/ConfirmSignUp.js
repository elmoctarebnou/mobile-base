import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {Context as AuthContext} from '../../context/AuthContext';

import AppTextInput from '../../components/appTextInput/AppTextInput';
import AppButton from '../../components/appButton/AppButton';

import getStyles from './ConfirmSignUp.style';


const ConfirmSignUp = (props) => {

    const { confirmSignUp } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [authCode, setAuthCode] = useState('');

    const styles = StyleSheet.create(getStyles());

    const onConfirmSignUp = () => {
        confirmSignUp(username, authCode);
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
                <AppButton title="Confirm Sign Up" onPress={onConfirmSignUp} />
            </View>
        </SafeAreaView>
    );
};

export default ConfirmSignUp;
