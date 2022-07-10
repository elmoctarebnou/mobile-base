import React, { useEffect, useState } from 'react';

import { Auth } from 'aws-amplify';

const AuthContext = React.createContext()

export const AuthContextProvider = (props) => {

    console.log('PROPS = ', props)
    const { children } = props;

    const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');

    useEffect(() => {
        checkAuthState();
    });

    const checkAuthState = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            console.log(user)
            console.log('✅ User is signed in');
        } catch (err) {
            console.log('❌ User is not signed in');
            setUserLoggedIn('loggedOut');
        }
    };

    const updateAuthState = (isUserLoggedIn) => {
        setUserLoggedIn(isUserLoggedIn);
    }

    const signUp = async (username, password, email) => {
        try {
            await Auth.signUp({
                username,
                password,
                attributes: { email }
            });
            console.log('✅ Sign-up Confirmed');
            return null
        } catch (error) {
            console.log('❌ Error signing up...', error);
            return error
        }
    }

    const signOut = async () => {
        try {
            await Auth.signOut();
            updateAuthState('loggedOut');
        } catch (error) {
            console.log('Error signing out: ', error);
        }
    }

    const logIn = async (username, password) => {
        try {
            await Auth.signIn(username, password);
            console.log('✅ Success');
            updateAuthState('loggedIn');
        } catch (error) {
            console.log('❌ Error loging in...', error);
            return error
        }
    }

    const confirmSignUp = async (username, authCode) => {
        try {
            await Auth.confirmSignUp(username, authCode);
            console.log('✅ Code confirmed');
            return null
        } catch (error) {
            console.log(
                '❌ Verification code does not match. Please enter a valid verification code.',
                error.code
            );
            return error
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isUserLoggedIn,
                signUp,
                confirmSignUp,
                signOut,
                logIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext