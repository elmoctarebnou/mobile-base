import React, {useContext} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { Context as AuthContext } from '../../context/AuthContext';

import AppButton from '../../components/appButton/AppButton';

import getStyles from './Home.styles';


const Home = (props) => {

    const styles = StyleSheet.create(getStyles());

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Home</Text>
        </View>
    );
};

export default Home;

