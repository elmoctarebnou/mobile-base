import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Auth } from 'aws-amplify';

import getStyles from './Landing.style';



const Landing = (props) => {

    const { updateAuthState } = props;

    const styles = StyleSheet.create(getStyles());


    const signOut = async () => {
        try {
            await Auth.signOut();
            updateAuthState('loggedOut');
        } catch (error) {
            console.log('Error signing out: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text> 💙 + 💛</Text>
            <Button title="Sign Out" color="tomato" onPress={signOut} />
        </View>
    );
};

export default Landing;
