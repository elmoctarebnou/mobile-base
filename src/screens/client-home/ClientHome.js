import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import getStyles from './ClientHome.style';


const ClientHome = () => {

    const styles = StyleSheet.create(getStyles());

    return (
        <View style={styles.container}>
            <Text>Client Home</Text>
        </View>
    );
};

export default ClientHome;

