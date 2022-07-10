import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AuthContext from '../../context/AuthContext';

import AppTextInput from '../../components/appTextInput/AppTextInput';
import AppButton from '../../components/appButton/AppButton';
import DisplayMessage from '../../components/displayMessage/DisplayMessage';

import getStyles from './LogIn.styles';


const LogIn = (props) => {

    const { logIn } = useContext(AuthContext);

    const { navigation } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const styles = StyleSheet.create(getStyles());

    const onLogin = () => {
        const error = logIn(username, password)
        if (error && error.message) {
            setErrorMessage(error.message);
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
                <AppButton title="Login" onPress={onLogin} />
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
