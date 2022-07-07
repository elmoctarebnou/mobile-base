import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppTextInput from '../../components/app-text-input/AppTextInput';
import AppButton from '../../components/app-button/AppButton';

import getStyles from './SignUp.style';


const SignUp = (props) => {

    const { navigation } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const styles = StyleSheet.create(getStyles());

    const signUp = async () => {
        try {
            await Auth.signUp({ username, password, attributes: { email } });
            console.log('✅ Sign-up Confirmed');
            navigation.navigate('ConfirmSignUp');
        } catch (error) {
            console.log('❌ Error signing up...', error);
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Create a new account</Text>
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
                <AppTextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    leftIcon="email"
                    placeholder="Enter email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppButton title="Sign Up" onPress={signUp} />
                <View style={styles.footerButtonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LogIn')}
                    >
                        <Text style={styles.forgotPasswordButtonText}>
                            Already have an account? Log In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
