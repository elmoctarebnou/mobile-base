import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AuthContext from '../../context/AuthContext';

import AppTextInput from '../../components/appTextInput/AppTextInput';
import AppButton from '../../components/appButton/AppButton';
import DisplayMessage from '../../components/displayMessage/DisplayMessage';

import getStyles from './ConfirmSignUp.styles';


const ConfirmSignUp = (props) => {

    const { navigation } = props;

    const [username, setUsername] = useState('');
    const [authCode, setAuthCode] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const styles = StyleSheet.create(getStyles());

    const { confirmSignUp } = useContext(AuthContext);

    const onConfirmSignUp = () => {
        const error = confirmSignUp(username, authCode);
        console.log({error, username, authCode})
        if (error && error.message) setErrorMessage(error.message);
        else navigation.navigate('SignIn');
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
                {errorMessage && <DisplayMessage message={errorMessage}/>}
                <AppButton title="Confirm Sign Up" onPress={onConfirmSignUp} />
            </View>
        </SafeAreaView>
    );
};

export default ConfirmSignUp;
