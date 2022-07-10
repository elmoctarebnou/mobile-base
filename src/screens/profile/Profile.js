import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context as AuthContext } from '../../context/AuthContext';

import AppButton from '../../components/appButton/AppButton';

import getStyles from './Profile.styles.js';

const Profile = (props) => {

    const styles = StyleSheet.create(getStyles());

    const { state, signOut } = useContext(AuthContext);
    const { isUserLoggedIn } = state; 

    return (
        <View style={styles.column}>
            <Text style={{ fontSize: 30 }}>{isUserLoggedIn}</Text>
            <AppButton title="Sign Out" onPress={signOut}/>
        </View>
    )
};
export default Profile;
