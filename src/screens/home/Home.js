import React, {useContext} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import AuthContext from '../../context/AuthContext';

import AppButton from '../../components/appButton/AppButton';

import getStyles from './Home.styles';


const Home = (props) => {

    const { updateAuthState } = props;
    const styles = StyleSheet.create(getStyles());

    const {isUserLoggedIn, signOut} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>{isUserLoggedIn}</Text>
            <AppButton title="Sign Out" onPress={signOut}/>
        </View>
    );
};

export default Home;

