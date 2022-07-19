import React, { useState, useContext, useDebugValue } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    useWindowDimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {Context as AuthContext} from '../../context/AuthContext';

import AppTextInput from '../../components/appTextInput/AppTextInput';
import AppButton from '../../components/appButton/AppButton';
import DisplayMessage from '../../components/displayMessage/DisplayMessage';

import getStyles from './SignIn.styles';
import awalogo from '../../assets/awalogo.png';


const SingIn = (props) => {

    const { signIn } = useContext(AuthContext);

    const { navigation } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const styles = StyleSheet.create(getStyles());
    const { width, height } = useWindowDimensions();

    const onSignIn = async () => {
        const error = await signIn(username, password)
        if (error && error.message) {
            setErrorMessage(error.message);
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Image
                    source={awalogo}
                    style={[
                        styles.logo,
                        {
                            width: width * .8,
                            height: height / 4,
                            resizeMode: 'center'
                        }
                    ]}
                />
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
                {errorMessage && <DisplayMessage message={errorMessage}/>}
                <AppButton title="Sing In" onPress={onSignIn} />
                <View style={styles.footerButtonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Sign Up')}
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

export default SingIn;
